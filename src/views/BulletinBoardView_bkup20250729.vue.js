import { ref, defineComponent, onMounted, onBeforeUnmount, nextTick, computed, watch } from 'vue';
import { onValue, ref as dbRef, get, set } from 'firebase/database';
import { bulletinRef, database } from '@/firebase';
import { useRouter } from 'vue-router';
export default defineComponent({
    props: {
        uid: {
            required: false,
            default: ''
        },
        users: {
            required: false,
            default: () => ({})
        }
    },
    setup(props, { emit }) {
        const router = useRouter();
        const maxShowMessages = ref(5);
        const messages = ref([
            { author: 'AliceS', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
            { author: 'BobS', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },
        ].map(msg => ({
            ...msg,
            reactions: {}
        })));
        const uploadProgress = ref('');
        const isBigFile = ref(false);
        const newMessage = ref('');
        const newMessageHref = ref('');
        const newMessageHrefs = ref([]);
        const dataLoaded = ref(false);
        const replyingTo = ref(-1);
        const replyText = ref('');
        const editingMessage = ref(-1);
        const uploadingFile = ref(false);
        const newMessageAttachments = ref([]);
        const messageTextarea = ref(null);
        const showMentions = ref(false);
        const mentionSuggestions = ref([]);
        const mentionIndex = ref(0);
        const mentionStart = ref(-1);
        const searchKeyword = ref('');
        const filteredMessages = ref([]);
        const notifyAllUsers = ref(false);
        const mentionPosition = ref({ top: 0, left: 0 });
        // 文字展開狀態管理
        const expandMessage = (messageIndex) => {
            if (messages.value[messageIndex]) {
                messages.value[messageIndex].textExpanded = true;
            }
        };
        const collapseMessage = (messageIndex) => {
            if (messages.value[messageIndex]) {
                messages.value[messageIndex].textExpanded = false;
            }
        };
        const expandReply = (messageIndex, replyIndex) => {
            if (messages.value[messageIndex] && messages.value[messageIndex].replies) {
                messages.value[messageIndex].replies[replyIndex].textExpanded = true;
            }
        };
        const collapseReply = (messageIndex, replyIndex) => {
            if (messages.value[messageIndex] && messages.value[messageIndex].replies) {
                messages.value[messageIndex].replies[replyIndex].textExpanded = false;
            }
        };
        // 標籤系統相關變數 - 直接在組件中定義
        const availableLabels = ref([
            { id: 'bug', name: '錯誤', color: 'red' },
            { id: 'feature', name: '功能請求', color: 'blue' },
            { id: 'discussion', name: '討論', color: 'green' },
            { id: 'question', name: '疑問', color: 'yellow' },
            { id: 'urgent', name: '緊急', color: 'orange' },
            { id: 'documentation', name: '文檔', color: 'purple' },
            { id: 'enhancement', name: '改進', color: 'teal' },
            { id: 'announcement', name: '公告', color: 'violet' },
            { id: 'feedback', name: '回饋', color: 'pink' },
            { id: 'meeting', name: '會議', color: 'brown' },
            { id: 'event', name: '活動', color: 'olive' }
        ]);
        // 新增狀態管理相關變數
        const availableStatuses = ref([
            { value: 'open', text: '開啟', icon: 'circle outline' },
            { value: 'in-progress', text: '進行中', icon: 'hourglass half' },
            { value: 'resolved', text: '已解決', icon: 'check circle' },
            { value: 'closed', text: '已關閉', icon: 'times circle' }
        ]);
        // 新增優先級相關變數
        const availablePriorities = ref([
            { value: 'low', text: '低', icon: 'chevron down' },
            { value: 'medium', text: '中', icon: 'minus' },
            { value: 'high', text: '高', icon: 'chevron up' },
            { value: 'urgent', text: '緊急', icon: 'exclamation triangle' }
        ]);
        const sortedMessages = computed(() => {
            return [...messages.value].map((obj, index) => {
                const newObj = {
                    ...obj
                };
                newObj.actualIndex = index;
                return newObj;
            }).sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime();
            });
        });
        const addMessage = () => {
            if (newMessageHref.value) {
                newMessageHrefs.value.push(newMessageHref.value);
                newMessageHref.value = '';
            }
            if (!dataLoaded.value)
                return;
            console.log(newMessage.value);
            const m_length = messages.value.length;
            const mentionedUsers = detectMentionedUsers(newMessage.value);
            // 解析任務列表
            const tasks = parseTaskList(newMessage.value);
            // 檢測是否有引用
            const referencedMessages = detectReferences(newMessage.value);
            const newMessageObj = {
                author: props.users[props.uid].name || '匿名',
                uid: props.uid || '123',
                date: new Date().toISOString(),
                text: newMessage.value,
                reactions: {},
            };
            if (mentionedUsers.length > 0) {
                newMessageObj.mentions = mentionedUsers;
            }
            if (newMessageAttachments.value.length > 0) {
                newMessageObj.attachments = newMessageAttachments.value;
            }
            if (newMessageHrefs.value.length > 0) {
                newMessageObj.hrefs = newMessageHrefs.value;
            }
            if (tasks.length > 0) {
                newMessageObj.tasks = tasks;
            }
            if (referencedMessages.length > 0) {
                newMessageObj.references = referencedMessages;
            }
            if (notifyAllUsers.value) {
                newMessageObj.notifyAllUsers = true;
            }
            messages.value.push(newMessageObj);
            // 如果勾選了發送給所有用戶，則發送通知給所有用戶
            if (notifyAllUsers.value) {
                sendNotificationToAllUsers(newMessageObj, m_length);
            }
            // 如果沒有勾選發送給所有用戶，則發送通知給被提及的用戶
            // 這麼做是為了避免發送給所有用戶時，被提及的用戶會收到重複的通知
            if (mentionedUsers.length > 0 && !notifyAllUsers.value) {
                sendMentionNotifications(mentionedUsers, newMessageObj, null, m_length);
            }
            newMessage.value = '';
            newMessageHrefs.value = [];
            newMessageAttachments.value = [];
            notifyAllUsers.value = false; // 重置通知狀態
            set(dbRef(database, 'bulletin/' + m_length), newMessageObj).then(() => {
                console.log('留言成功');
            });
        };
        const toggleLogin = () => {
            emit('toggleLogin');
        };
        const parseDate = (date) => {
            const now = new Date();
            const messageDate = new Date(date);
            if (isNaN(messageDate.getTime())) {
                return '無效日期';
            }
            const diff = now.getTime() - messageDate.getTime();
            const diffSeconds = Math.floor(diff / 1000);
            const diffMinutes = Math.floor(diff / (1000 * 60));
            const diffHours = Math.floor(diff / (1000 * 60 * 60));
            const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            if (diffSeconds < 60) {
                if (diffSeconds === 0) {
                    return '剛剛';
                }
                return `${diffSeconds} 秒前`;
            }
            else if (diffMinutes < 60) {
                return `${diffMinutes} 分鐘前`;
            }
            else if (diffHours < 24) {
                return `${diffHours} 小時前`;
            }
            else {
                return `${diffDays} 天前`;
            }
        };
        const toggleReplies = (index) => {
            if (!props.uid)
                return;
            if (messages.value[index].repliesExpanded) {
                messages.value[index].repliesExpanded = false;
            }
            else {
                messages.value[index].repliesExpanded = true;
            }
            saveRepliesExpandedState();
        };
        const toggleReplyReaction = (reply, actualIndex, rIndex, reaction) => {
            if (!props.uid)
                return;
            if (!reply.reactions) {
                reply.reactions = {};
            }
            if (!reply.reactions[reaction]) {
                reply.reactions[reaction] = {};
            }
            if (reply.reactions[reaction][props.uid]) {
                delete reply.reactions[reaction][props.uid];
            }
            else {
                reply.reactions[reaction][props.uid] = true;
            }
            set(dbRef(database, `bulletin/${actualIndex}/replies/${rIndex}/reactions`), reply.reactions).then(() => {
                console.log('回覆反應更新成功');
            });
        };
        const toggleReaction = (message, reaction) => {
            if (!props.uid)
                return;
            if (!message.reactions) {
                message.reactions = {};
            }
            if (!message.reactions[reaction]) {
                message.reactions[reaction] = {};
            }
            if (message.reactions[reaction][props.uid]) {
                delete message.reactions[reaction][props.uid];
            }
            else {
                message.reactions[reaction][props.uid] = true;
            }
            if (message.actualIndex !== undefined) {
                set(dbRef(database, `bulletin/${message.actualIndex}/reactions`), message.reactions).then(() => {
                    console.log('反應更新成功');
                });
            }
        };
        const hasReacted = (message, reaction) => {
            return message.reactions?.[reaction]?.[props.uid] || false;
        };
        const getReactionCount = (message, reaction) => {
            return Object.keys(message.reactions?.[reaction] || {}).length;
        };
        const getReactionUsers = (message, reaction) => {
            if (!message.reactions?.[reaction])
                return '';
            return Object.keys(message.reactions[reaction])
                .map(uid => props.users[uid]?.name || '匿名用戶')
                .join('、');
        };
        const toggleReplyForm = (index) => {
            if (!props.uid)
                return;
            if (replyingTo.value === index) {
                replyingTo.value = -1;
            }
            else {
                replyingTo.value = index;
                replyText.value = '';
            }
        };
        const cancelReply = () => {
            replyingTo.value = -1;
            replyText.value = '';
        };
        const addReply = (index) => {
            if (!dataLoaded.value || !props.uid || replyText.value.trim() === '')
                return;
            const messageToReply = messages.value[index];
            if (!messageToReply.replies) {
                messageToReply.replies = [];
            }
            const mentionedUsers = detectMentionedUsers(replyText.value);
            const newReply = {
                author: props.users[props.uid].name || '匿名',
                uid: props.uid,
                date: new Date().toISOString(),
                text: replyText.value.trim()
            };
            messageToReply.replies.push(newReply);
            sendMentionNotifications(mentionedUsers, messageToReply, newReply, index);
            replyText.value = '';
            replyingTo.value = -1;
            set(dbRef(database, `bulletin/${index}/replies`), messageToReply.replies).then(() => {
                console.log('回覆新增成功');
            });
        };
        const deleteReply = (messageIndex, replyIndex) => {
            if (!dataLoaded.value || !props.uid)
                return;
            const messageToUpdate = messages.value[messageIndex];
            if (!messageToUpdate.replies || replyIndex >= messageToUpdate.replies.length)
                return;
            const replyToDelete = messageToUpdate.replies[replyIndex];
            if (replyToDelete.uid !== props.uid)
                return;
            if (window.confirm('確定要刪除這則回覆嗎？')) {
                messageToUpdate.replies.splice(replyIndex, 1);
                set(dbRef(database, `bulletin/${messageIndex}/replies`), messageToUpdate.replies).then(() => {
                    console.log('回覆刪除成功');
                });
            }
        };
        const saveRepliesExpandedState = () => {
            const expandedState = {};
            messages.value.forEach((message, index) => {
                if (message.repliesExpanded) {
                    expandedState[index] = true;
                }
            });
            sessionStorage.setItem('repliesExpandedState', JSON.stringify(expandedState));
        };
        const restoreRepliesExpandedState = () => {
            const storedState = sessionStorage.getItem('repliesExpandedState');
            if (storedState) {
                try {
                    const expandedState = JSON.parse(storedState);
                    messages.value.forEach((message, index) => {
                        message.repliesExpanded = expandedState[index] || false;
                    });
                }
                catch (e) {
                    console.error('恢復展開狀態失敗', e);
                }
            }
        };
        const editMessage = (index) => {
            if (!dataLoaded.value || !props.uid)
                return;
            const messageToEdit = messages.value[index];
            if (messageToEdit.uid !== props.uid || (messageToEdit.replies && messageToEdit.replies.length > 0))
                return;
            const editedText = prompt('編輯留言', messageToEdit.text);
            if (editedText !== null && editedText.trim() !== '') {
                messageToEdit.text = editedText.trim();
                messageToEdit.updated = new Date().toISOString();
                set(dbRef(database, `bulletin/${index}/text`), editedText.trim()).then(() => {
                    console.log('留言編輯成功');
                });
                set(dbRef(database, `bulletin/${index}/updated`), messageToEdit.updated).then(() => {
                    console.log('更新時間記錄成功');
                });
            }
        };
        const handleFileUpload = async (event) => {
            const file = event.target.files?.[0];
            if (!file)
                return;
            if (file.name.includes('/') || file.name.includes('\\')) {
                alert('檔名不能包含斜線「/」或反斜線「\\」');
                return;
            }
            if (file.size > 1024 * 1024 * 1024) {
                alert('檔案大小不能超過 1GB');
                return;
            }
            uploadingFile.value = true;
            try {
                if (file.size <= 10 * 1024 * 1024) {
                    isBigFile.value = false;
                    const fileContent = await file.arrayBuffer();
                    const response = await fetch('https://members-backend.alearn13994229.workers.dev/uploadToR2/files/' + file.name, {
                        method: 'POST',
                        body: fileContent,
                        headers: {
                            'Content-Type': file.type
                        }
                    });
                    if (response.status === 400) {
                        const result = await response.json();
                        alert(result.error + ' 請更改名稱後重新上傳');
                        return;
                    }
                    if (!response.ok) {
                        throw new Error('上傳失敗');
                    }
                    const result = await response.json();
                    newMessageAttachments.value.push({
                        name: file.name,
                        url: result.url,
                        size: file.size,
                        type: file.type
                    });
                }
                else {
                    isBigFile.value = true;
                    uploadProgress.value = '上傳中...';
                    const CHUNK_SIZE = 5 * 1024 * 1024;
                    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
                    console.log('開始分塊上傳:', {
                        fileName: file.name,
                        fileSize: file.size,
                        chunkSize: CHUNK_SIZE,
                        totalChunks: totalChunks
                    });
                    uploadProgress.value = '開始分塊上傳：' + file.name + '，共' + totalChunks + '塊';
                    for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
                        const start = chunkIndex * CHUNK_SIZE;
                        const end = Math.min(start + CHUNK_SIZE, file.size);
                        const chunk = file.slice(start, end);
                        console.log(`上傳分塊 ${chunkIndex + 1}/${totalChunks}:`, {
                            start,
                            end,
                            chunkSize: chunk.size,
                            chunkType: chunk.type
                        });
                        uploadProgress.value = '上傳第 ' + (chunkIndex + 1) + ' 塊...(共' + totalChunks + '塊)';
                        const formData = new FormData();
                        formData.append('chunk', chunk);
                        const response = await fetch(`https://members-backend.alearn13994229.workers.dev/uploadChunkToR2/files/${encodeURIComponent(file.name)}/${chunkIndex}/${totalChunks}`, {
                            method: 'POST',
                            body: formData
                        });
                        console.log(`分塊 ${chunkIndex + 1}/${totalChunks} 上傳回應:`, {
                            status: response.status,
                            ok: response.ok,
                            statusText: response.statusText
                        });
                        if (response.ok) {
                            console.log(`成功上傳第 ${chunkIndex + 1} 塊分塊`);
                        }
                        else {
                            const errorText = await response.text();
                            console.error(`分塊 ${chunkIndex + 1}/${totalChunks} 上傳失敗:`, errorText);
                            throw new Error(`分塊 ${chunkIndex + 1}/${totalChunks} 上傳失敗: ${errorText}`);
                        }
                    }
                    console.log('所有分塊上傳完成，開始合併');
                    uploadProgress.value = '合併中...';
                    const mergeResponse = await fetch(`https://members-backend.alearn13994229.workers.dev/mergeChunksInR2/files/${file.name}/${totalChunks}`, {
                        method: 'POST'
                    });
                    console.log('合併回應:', {
                        status: mergeResponse.status,
                        ok: mergeResponse.ok,
                        statusText: mergeResponse.statusText
                    });
                    if (!mergeResponse.ok) {
                        const errorText = await mergeResponse.text();
                        uploadProgress.value = '合併失敗';
                        console.error('合併失敗:', errorText);
                        throw new Error(`合併分塊失敗: ${errorText}`);
                    }
                    const result = await mergeResponse.json();
                    console.log('合併成功，檔案資訊:', result);
                    uploadProgress.value = '合併成功';
                    newMessageAttachments.value.push({
                        name: file.name,
                        url: result.url,
                        size: file.size,
                        type: file.type
                    });
                }
                event.target.value = '';
                uploadProgress.value = '';
            }
            catch (error) {
                console.error('檔案上傳失敗:', error);
                uploadProgress.value = '檔案上傳失敗';
                alert('檔案上傳失敗，請重試');
            }
            finally {
                uploadingFile.value = false;
            }
        };
        const removeAttachment = (index) => {
            if (confirm('確定要刪除此檔案嗎？')) {
                newMessageAttachments.value.splice(index, 1);
            }
        };
        // 計算 @ 符號位置
        const calculateMentionPosition = () => {
            if (!messageTextarea.value || mentionStart.value === -1)
                return;
            const textarea = messageTextarea.value;
            const textareaRect = textarea.getBoundingClientRect();
            // 創建一個臨時的 span 來測量文本寬度
            const measurer = document.createElement('span');
            const computedStyle = getComputedStyle(textarea);
            measurer.style.cssText = `
        visibility: hidden;
        position: absolute;
        white-space: pre;
        font-family: ${computedStyle.fontFamily};
        font-size: ${computedStyle.fontSize};
        font-weight: ${computedStyle.fontWeight};
        line-height: ${computedStyle.lineHeight};
        letter-spacing: ${computedStyle.letterSpacing};
      `;
            document.body.appendChild(measurer);
            // 獲取到 @ 符號為止的文本
            const textBeforeMention = newMessage.value.slice(0, mentionStart.value + 1);
            // 處理換行
            const lines = textBeforeMention.split('\n');
            const lastLine = lines[lines.length - 1];
            // 測量最後一行的寬度
            measurer.textContent = lastLine;
            const textWidth = measurer.getBoundingClientRect().width;
            document.body.removeChild(measurer);
            // 計算位置
            const paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
            const paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
            const borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
            const borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
            const lineHeight = parseInt(computedStyle.lineHeight, 10) || 20;
            // 計算 @ 符號的位置
            const left = textareaRect.left + paddingLeft + borderLeft + textWidth;
            const top = textareaRect.top + paddingTop + borderTop + (lines.length * lineHeight) + window.scrollY;
            // 確保不超出螢幕邊界
            const menuWidth = Math.min(220, window.innerWidth - 20);
            const maxLeft = window.innerWidth - menuWidth - 10;
            const minLeft = 10;
            const finalLeft = Math.min(Math.max(left, minLeft), maxLeft);
            // 確保不超出底部邊界
            const menuHeight = 250;
            const maxTop = window.innerHeight - menuHeight - 10;
            const finalTop = Math.min(top, maxTop);
            mentionPosition.value = { top: finalTop, left: finalLeft };
        };
        const handleMessageInput = (event) => {
            const text = newMessage.value;
            const cursorPosition = messageTextarea.value?.selectionStart || 0;
            const lastAtSymbol = text.lastIndexOf('@', cursorPosition);
            if (lastAtSymbol !== -1 && lastAtSymbol < cursorPosition) {
                const searchText = text.slice(lastAtSymbol + 1, cursorPosition);
                mentionStart.value = lastAtSymbol;
                if (searchText.length === 0) {
                    const firstFiveUsers = Object.entries(props.users)
                        .map(([uid, user]) => ({
                        uid,
                        name: user.name,
                        photoURL: user.photoURL
                    }));
                    // 添加 "All" 選項到列表最前面
                    const allOption = {
                        uid: 'all',
                        name: 'All',
                        photoURL: undefined
                    };
                    mentionSuggestions.value = [allOption, ...firstFiveUsers];
                    showMentions.value = true;
                    mentionIndex.value = 0;
                    // 計算位置
                    nextTick(() => {
                        calculateMentionPosition();
                    });
                    return;
                }
                if (!searchText.includes(' ')) {
                    const filteredUsers = Object.entries(props.users)
                        .filter(([_, user]) => user.name.toLowerCase().includes(searchText.toLowerCase()))
                        .map(([uid, user]) => ({
                        uid,
                        name: user.name,
                        photoURL: user.photoURL
                    }));
                    // 如果搜索文本匹配 "all"，則添加 All 選項
                    const suggestions = [];
                    if ('all'.toLowerCase().includes(searchText.toLowerCase())) {
                        suggestions.push({
                            uid: 'all',
                            name: 'All',
                            photoURL: undefined
                        });
                    }
                    suggestions.push(...filteredUsers);
                    mentionSuggestions.value = suggestions;
                    showMentions.value = true;
                    mentionIndex.value = 0;
                    // 計算位置
                    nextTick(() => {
                        calculateMentionPosition();
                    });
                    return;
                }
            }
            showMentions.value = false;
        };
        const handleKeydown = (event) => {
            console.log('handleKeydown', event.key);
            if (!showMentions.value)
                return;
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    mentionIndex.value = (mentionIndex.value + 1) % mentionSuggestions.value.length;
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    mentionIndex.value = (mentionIndex.value - 1 + mentionSuggestions.value.length) % mentionSuggestions.value.length;
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (mentionSuggestions.value[mentionIndex.value]) {
                        selectMention(mentionSuggestions.value[mentionIndex.value]);
                    }
                    break;
                case 'Escape':
                    showMentions.value = false;
                    break;
            }
        };
        const selectMention = (user) => {
            if (mentionStart.value === -1)
                return;
            const text = newMessage.value;
            const beforeMention = text.slice(0, mentionStart.value);
            const afterMention = text.slice(messageTextarea.value?.selectionStart || 0);
            // 如果選擇的是 "All"，設置通知所有用戶的標記
            if (user.uid === 'all') {
                notifyAllUsers.value = true;
            }
            newMessage.value = `${beforeMention}@${user.name} ${afterMention}`;
            showMentions.value = false;
            mentionStart.value = -1;
            nextTick(() => {
                if (messageTextarea.value) {
                    const newPosition = beforeMention.length + user.name.length + 2;
                    messageTextarea.value.setSelectionRange(newPosition, newPosition);
                    messageTextarea.value.focus();
                }
            });
        };
        const escapeHtml = (text) => {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        };
        const parseMentionsAndHideTasks = (text) => {
            if (!text)
                return '';
            const escapedText = escapeHtml(text);
            const mentionRegex = /@([a-zA-Z0-9\u4e00-\u9fa5_]+)/g;
            const taskRegex = /^.*-\s?\[[\sxX]\].*$/gm;
            // 還要把空行也去掉
            const emptyLineRegex = /^\s*$/gm;
            return escapedText.replace(taskRegex, '').replace(emptyLineRegex, '').replace(mentionRegex, (match, username) => {
                const user = Object.entries(props.users).find(([_, user]) => user.name === username);
                if (user) {
                    return `<span class="mention-link" data-uid="${user[0]}">${match}</span>`;
                }
                return match;
            });
        };
        const testMentions = () => {
            const testCases = [
                'Hello @Alice and @Bob',
                '@Alice 你好 @Bob',
                '這是@Alice的留言，@Bob也來看看',
                '@Alice@Bob 連續標記',
                '沒有標記的普通文字',
                '@不存在的用戶',
                '@Alice 和 @不存在的用戶'
            ];
            console.log('測試 @ 標記解析：');
            testCases.forEach(test => {
                console.log('原文:', test);
                console.log('解析後:', parseMentionsAndHideTasks(test));
            });
        };
        const handleMentionClick = (event) => {
            const target = event.target;
            if (target.classList.contains('mention-link')) {
                const uid = target.getAttribute('data-uid');
                if (uid) {
                    router.push(`/flag/${uid}`);
                }
            }
        };
        const handleSearch = () => {
            if (!searchKeyword.value.trim()) {
                filteredMessages.value = sortedMessages.value;
                return;
            }
            console.log('searchKeyword.value', searchKeyword.value);
            const keyword = searchKeyword.value.toLowerCase().trim();
            filteredMessages.value = sortedMessages.value.filter(message => {
                if (message.text && message.text.toLowerCase().includes(keyword)) {
                    return true;
                }
                if (message.author && message.author.toLowerCase().includes(keyword)) {
                    return true;
                }
                if (message.replies) {
                    return message.replies.some(reply => reply.text && reply.text.toLowerCase().includes(keyword) ||
                        reply.author && reply.author.toLowerCase().includes(keyword));
                }
                return false;
            });
        };
        const clearSearch = () => {
            searchKeyword.value = '';
            filteredMessages.value = sortedMessages.value;
        };
        watch(sortedMessages, (newMessages) => {
            if (!searchKeyword.value.trim()) {
                filteredMessages.value = newMessages;
            }
            else {
                handleSearch();
            }
        }, { immediate: true });
        const handleHighlight = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const highlightMessageId = urlParams.get('highlight');
            console.log('highlightMessageId', highlightMessageId);
            if (highlightMessageId) {
                nextTick(() => {
                    const targetMessage = sortedMessages.value.find(msg => msg.actualIndex === Number(highlightMessageId));
                    console.log('targetMessage', targetMessage);
                    if (targetMessage) {
                        toggleReplies(targetMessage.actualIndex || sortedMessages.value.length - 1);
                        console.log('sortedMessages.value.length', sortedMessages.value.length);
                        console.log('targetMessage.actualIndex', targetMessage.actualIndex);
                        console.log('maxShowMessages.value', maxShowMessages.value);
                        console.log('sortedMessages.value.length - targetMessage.actualIndex', sortedMessages.value.length - (targetMessage.actualIndex || 0));
                        if ((sortedMessages.value.length - (targetMessage.actualIndex || 0)) > maxShowMessages.value) {
                            console.log('showMoreMessages', maxShowMessages.value);
                            showMoreMessages(true);
                            console.log('maxShowMessages', maxShowMessages.value);
                        }
                        nextTick(() => {
                            console.log('nextTick', maxShowMessages.value);
                            const messageElement = document.querySelector(`[data-message-id="${highlightMessageId}"]`);
                            console.log('messageElement', messageElement);
                            if (messageElement) {
                                messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                messageElement.classList.add('highlight-message');
                                setTimeout(() => {
                                    messageElement.classList.remove('highlight-message');
                                }, 3000);
                            }
                        });
                    }
                });
            }
        };
        watch(() => props.uid, (newUid) => {
            console.log('newUid', newUid);
            if (newUid) {
                get(bulletinRef).then((snapshot) => {
                    const data = snapshot.val();
                    console.log(data);
                    messages.value = data.map((message) => ({
                        author: message.author,
                        uid: message.uid,
                        date: message.date,
                        text: message.text,
                        updated: message.updated,
                        reactions: message.reactions || {},
                        replies: message.replies ? message.replies.map((reply) => ({
                            author: reply.author,
                            uid: reply.uid,
                            date: reply.date,
                            text: reply.text,
                            reactions: reply.reactions || {}
                        })) : [],
                        hrefs: message.hrefs || [],
                        attachments: message.attachments || [],
                        labels: message.labels || [],
                        status: message.status || 'open',
                        references: message.references || [],
                        tasks: message.tasks || [],
                        priority: message.priority || 'low',
                        assignees: message.assignees || [],
                        notifyAllUsers: message.notifyAllUsers || false
                    }));
                    dataLoaded.value = true;
                    setTimeout(() => {
                        handleHighlight();
                    }, 500);
                });
            }
        });
        // 當前激活的下拉菜單
        const activeDropdownMenu = ref(null);
        const activeDropdownType = ref('');
        const activeDropdownMessageIndex = ref(-1);
        // 創建動態下拉菜單
        const createDropdownMenu = (type, messageIndex, targetElement) => {
            // 移除現有的下拉菜單
            removeActiveDropdownMenu();
            const menu = document.createElement('div');
            menu.className = 'dynamic-dropdown-menu';
            menu.style.cssText = `
        position: fixed;
        z-index: 9999999;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        min-width: 160px;
        max-width: 250px;
        overflow: hidden;
        font-family: inherit;
        font-size: 14px;
      `;
            const message = messages.value[messageIndex];
            let menuItems = '';
            if (type === 'labels') {
                availableLabels.value.forEach(label => {
                    const isActive = hasLabel(message, label.id);
                    menuItems += `
            <div class="dropdown-item ${isActive ? 'active' : ''}" data-action="toggleLabel" data-label-id="${label.id}">
              <i class="tag icon ${label.color}"></i>
              ${label.name}
            </div>
          `;
                });
            }
            else if (type === 'status') {
                availableStatuses.value.forEach(status => {
                    const isActive = message.status === status.value;
                    menuItems += `
            <div class="dropdown-item ${isActive ? 'active' : ''}" data-action="changeStatus" data-status="${status.value}">
              <i class="icon ${status.icon}"></i>
              ${status.text}
            </div>
          `;
                });
            }
            else if (type === 'priority') {
                availablePriorities.value.forEach(priority => {
                    const isActive = message.priority === priority.value;
                    menuItems += `
            <div class="dropdown-item ${isActive ? 'active' : ''}" data-action="changePriority" data-priority="${priority.value}">
              <i class="icon ${priority.icon}"></i>
              ${priority.text}
            </div>
          `;
                });
            }
            menu.innerHTML = menuItems;
            // 添加樣式
            const style = document.createElement('style');
            style.textContent = `
        .dynamic-dropdown-menu .dropdown-item {
          padding: 0.75rem 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.2s ease;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.9rem;
        }
        .dynamic-dropdown-menu .dropdown-item:last-child {
          border-bottom: none;
        }
        .dynamic-dropdown-menu .dropdown-item:hover {
          background-color: #f8f9fa;
        }
        .dynamic-dropdown-menu .dropdown-item.active {
          background-color: #0066FF;
          color: white;
        }
        .dynamic-dropdown-menu .dropdown-item i.icon {
          opacity: 0.7;
        }
        .dynamic-dropdown-menu .dropdown-item.active i.icon {
          opacity: 1;
        }
      `;
            document.head.appendChild(style);
            // 計算位置
            const rect = targetElement.getBoundingClientRect();
            let top = rect.bottom + 4;
            let left = rect.left;
            document.body.appendChild(menu);
            // 檢查邊界並調整位置
            const menuRect = menu.getBoundingClientRect();
            // 檢查右邊界
            if (menuRect.right > window.innerWidth - 10) {
                left = window.innerWidth - menuRect.width - 10;
            }
            // 檢查底部邊界
            if (menuRect.bottom > window.innerHeight - 10) {
                top = rect.top - menuRect.height - 4;
            }
            menu.style.top = `${top}px`;
            menu.style.left = `${left}px`;
            // 添加事件監聽器
            menu.addEventListener('click', (e) => {
                const item = e.target.closest('.dropdown-item');
                if (item) {
                    const action = item.getAttribute('data-action');
                    if (action === 'toggleLabel') {
                        const labelId = item.getAttribute('data-label-id');
                        const label = availableLabels.value.find(l => l.id === labelId);
                        if (label) {
                            toggleLabel(messageIndex, label);
                        }
                    }
                    else if (action === 'changeStatus') {
                        const status = item.getAttribute('data-status');
                        if (status) {
                            changeStatus(messageIndex, status);
                        }
                    }
                    else if (action === 'changePriority') {
                        const priority = item.getAttribute('data-priority');
                        if (priority) {
                            changePriority(messageIndex, priority);
                        }
                    }
                    removeActiveDropdownMenu();
                }
            });
            activeDropdownMenu.value = menu;
            activeDropdownType.value = type;
            activeDropdownMessageIndex.value = messageIndex;
        };
        // 移除激活的下拉菜單
        const removeActiveDropdownMenu = () => {
            if (activeDropdownMenu.value) {
                activeDropdownMenu.value.remove();
                activeDropdownMenu.value = null;
                activeDropdownType.value = '';
                activeDropdownMessageIndex.value = -1;
            }
        };
        // 處理下拉菜單的顯示和隱藏
        const handleDropdownClick = (event) => {
            event.stopPropagation();
            const button = event.target.closest('.dropdown-trigger');
            if (button) {
                const type = button.getAttribute('data-dropdown-type');
                const messageIndex = parseInt(button.getAttribute('data-message-index') || '0');
                if (type && messageIndex >= 0) {
                    createDropdownMenu(type, messageIndex, button);
                }
            }
        };
        // 點擊其他地方關閉下拉菜單
        const handleDocumentClick = (event) => {
            const target = event.target;
            if (!target.closest('.dropdown-trigger') && !target.closest('.dynamic-dropdown-menu')) {
                removeActiveDropdownMenu();
            }
        };
        // 保存事件監聽器引用以便清理
        const scrollHandler = () => {
            removeActiveDropdownMenu();
        };
        onMounted(() => {
            console.log('mounted');
            onValue(bulletinRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                messages.value = data.map((message) => ({
                    author: message.author,
                    uid: message.uid,
                    date: message.date,
                    text: message.text,
                    updated: message.updated,
                    reactions: message.reactions || {},
                    replies: message.replies ? message.replies.map((reply) => ({
                        author: reply.author,
                        uid: reply.uid,
                        date: reply.date,
                        text: reply.text,
                        reactions: reply.reactions || {}
                    })) : [],
                    hrefs: message.hrefs || [],
                    attachments: message.attachments || [],
                    labels: message.labels || [],
                    status: message.status || 'open',
                    references: message.references || [],
                    tasks: message.tasks || [],
                    priority: message.priority || 'low',
                    assignees: message.assignees || [],
                    notifyAllUsers: message.notifyAllUsers || false
                }));
                dataLoaded.value = true;
                restoreRepliesExpandedState();
                handleHighlight();
                // 設置下拉菜單事件監聽器
                nextTick(() => {
                    document.addEventListener('click', handleDocumentClick);
                    // 添加滾動事件監聽器，滾動時關閉所有下拉菜單
                    document.addEventListener('scroll', scrollHandler, true);
                    // 添加監聽器來關閉 @ 提及選單
                    const closeMentionSuggestions = () => {
                        showMentions.value = false;
                    };
                    document.addEventListener('scroll', closeMentionSuggestions, true);
                    window.addEventListener('resize', closeMentionSuggestions);
                    document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
                        trigger.addEventListener('click', handleDropdownClick);
                    });
                });
            });
            setInterval(async () => {
                console.log('tick');
                await nextTick();
                messages.value = [...messages.value];
            }, 60 * 1000);
            document.addEventListener('click', handleMentionClick);
            if (process.env.NODE_ENV === 'development') {
                testMentions();
            }
        });
        onBeforeUnmount(() => {
            // 清理事件監聽器
            document.removeEventListener('click', handleDocumentClick);
            document.removeEventListener('scroll', scrollHandler, true);
            document.removeEventListener('click', handleMentionClick);
            // 清理激活的下拉菜單
            removeActiveDropdownMenu();
        });
        const addHref = () => {
            if (newMessageHref.value) {
                try {
                    new URL(newMessageHref.value);
                    newMessageHrefs.value.push(newMessageHref.value);
                    newMessageHref.value = '';
                }
                catch (e) {
                    alert('請輸入有效的網址');
                }
            }
        };
        const removeHref = () => {
            if (newMessageHrefs.value.length > 0) {
                newMessageHrefs.value.pop();
            }
        };
        const removeHrefByIndex = (index) => {
            newMessageHrefs.value.splice(index, 1);
        };
        const showMoreMessages = (force = false) => {
            if (force) {
                maxShowMessages.value = sortedMessages.value.length;
            }
            else {
                maxShowMessages.value += 10;
            }
        };
        const showLessMessages = () => {
            maxShowMessages.value -= 10;
        };
        const detectMentionedUsers = (text) => {
            if (!text)
                return [];
            const mentionedUsers = [];
            const mentionRegex = /@([a-zA-Z0-9\u4e00-\u9fa5_]+)/g;
            let match;
            while ((match = mentionRegex.exec(text)) !== null) {
                const username = match[1];
                const userEntry = Object.entries(props.users).find(([_, user]) => (user.name || '').toLowerCase() === username.toLowerCase());
                if (userEntry) {
                    const userId = userEntry[0];
                    if (!mentionedUsers.includes(userId)) {
                        mentionedUsers.push(userId);
                    }
                }
            }
            return mentionedUsers;
        };
        const sendMentionNotifications = (mentionedUserIds, message, reply, actualIndex) => {
            if (reply) {
                if (!mentionedUserIds.includes(message.uid) && message.uid !== props.uid) {
                    mentionedUserIds.push(message.uid);
                }
                for (const r of message.replies || []) {
                    if (!mentionedUserIds.includes(r.uid) && r.uid !== props.uid) {
                        mentionedUserIds.push(r.uid);
                    }
                }
            }
            if (!props.uid || mentionedUserIds.length === 0)
                return;
            mentionedUserIds.forEach(userId => {
                const mentionedUser = props.users[userId];
                console.log('mentionedUser', mentionedUser);
                if (!mentionedUser || !mentionedUser.email)
                    return;
                const now = Date.now();
                const id = `${actualIndex}_${userId}_${now}`;
                const notificationData = {
                    id,
                    mentionedUserId: userId,
                    mentionedUserEmail: mentionedUser.email,
                    mentioningUserId: props.uid,
                    mentioningUserName: props.users[props.uid].name || '匿名使用者',
                    messageId: String(actualIndex),
                    messageText: reply ? reply.text : message.text,
                    messageTime: now,
                    status: 'pending',
                    type: reply ? 'reply' : 'mention',
                    createdAt: now
                };
                set(dbRef(database, `notifications/${id}`), notificationData)
                    .then(() => {
                    console.log(`已發送通知給 ${mentionedUser.name}`);
                })
                    .catch(error => {
                    console.error('發送通知失敗:', error);
                });
            });
        };
        // 發送通知給所有用戶的函數
        const sendNotificationToAllUsers = (message, actualIndex) => {
            if (!props.uid || !props.users)
                return;
            const allUserIds = Object.keys(props.users);
            allUserIds.forEach(userId => {
                // 不發送給自己
                if (userId === props.uid)
                    return;
                const user = props.users[userId];
                if (!user || !user.email)
                    return;
                const now = Date.now();
                const id = `all_${actualIndex}_${userId}_${now}`;
                const notificationData = {
                    id,
                    mentionedUserId: userId,
                    mentionedUserEmail: user.email,
                    mentioningUserId: props.uid,
                    mentioningUserName: props.users[props.uid].name || '匿名使用者',
                    messageId: String(actualIndex),
                    messageText: message.text,
                    messageTime: now,
                    status: 'pending',
                    type: 'broadcast', // 使用新的類型來標識這是廣播訊息
                    createdAt: now
                };
                set(dbRef(database, `notifications/${id}`), notificationData)
                    .then(() => {
                    console.log(`已發送廣播通知給 ${user.name}`);
                })
                    .catch(error => {
                    console.error('發送廣播通知失敗:', error);
                });
            });
        };
        // 標籤系統相關函數
        const toggleLabel = (messageIndex, label) => {
            if (!dataLoaded.value || !props.uid)
                return;
            const message = messages.value[messageIndex];
            if (!message.labels) {
                message.labels = [];
            }
            const existingLabelIndex = message.labels.findIndex(l => l.id === label.id);
            if (existingLabelIndex > -1) {
                // 移除標籤
                message.labels.splice(existingLabelIndex, 1);
            }
            else {
                // 新增標籤
                message.labels.push(label);
            }
            // 更新到 Firebase
            set(dbRef(database, `bulletin/${messageIndex}/labels`), message.labels).then(() => {
                console.log('標籤更新成功');
            });
        };
        const hasLabel = (message, labelId) => {
            return message.labels?.some(label => label.id === labelId) || false;
        };
        // 狀態管理相關函數
        const changeStatus = (messageIndex, newStatus) => {
            if (!dataLoaded.value || !props.uid)
                return;
            const message = messages.value[messageIndex];
            message.status = newStatus;
            // 更新到 Firebase
            set(dbRef(database, `bulletin/${messageIndex}/status`), newStatus).then(() => {
                console.log('狀態更新成功');
            });
        };
        const getStatusIcon = (status) => {
            const statusConfig = availableStatuses.value.find(s => s.value === status);
            return statusConfig ? statusConfig.icon : 'circle outline';
        };
        const getStatusText = (status) => {
            const statusConfig = availableStatuses.value.find(s => s.value === status);
            return statusConfig ? statusConfig.text : '開啟';
        };
        // 優先級管理相關函數
        const changePriority = (messageIndex, newPriority) => {
            if (!dataLoaded.value || !props.uid)
                return;
            const message = messages.value[messageIndex];
            message.priority = newPriority;
            // 更新到 Firebase
            set(dbRef(database, `bulletin/${messageIndex}/priority`), newPriority).then(() => {
                console.log('優先級更新成功');
            });
        };
        const getPriorityIcon = (priority) => {
            const priorityConfig = availablePriorities.value.find(p => p.value === priority);
            return priorityConfig ? priorityConfig.icon : 'chevron down';
        };
        const getPriorityText = (priority) => {
            const priorityConfig = availablePriorities.value.find(p => p.value === priority);
            return priorityConfig ? priorityConfig.text : '低';
        };
        // 引用功能相關函數
        const quoteMessage = (messageIndex) => {
            if (!dataLoaded.value || !props.uid)
                return;
            const message = messages.value[messageIndex];
            const quotedText = `> ${message.author}: ${message.text.substring(0, 100)}${message.text.length > 100 ? '...' : ''}\n\n`;
            // 設置引用內容到新留言框
            newMessage.value = quotedText + newMessage.value;
            // 聚焦到留言框
            nextTick(() => {
                if (messageTextarea.value) {
                    messageTextarea.value.focus();
                    messageTextarea.value.setSelectionRange(newMessage.value.length, newMessage.value.length);
                }
            });
        };
        const scrollToMessage = (messageId) => {
            const messageElement = document.querySelector(`[data-message-id="${messageId}"]`);
            if (messageElement) {
                messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                messageElement.classList.add('highlight-message');
                setTimeout(() => {
                    messageElement.classList.remove('highlight-message');
                }, 3000);
            }
        };
        // 任務列表相關函數
        const parseTaskList = (text) => {
            const taskRegex = /^(\s*[-*+]\s*\[([x\s])\]\s*(.+))$/gm;
            const tasks = [];
            let match;
            while ((match = taskRegex.exec(text)) !== null) {
                tasks.push({
                    id: Math.random().toString(36).substr(2, 9),
                    text: match[3].trim(),
                    completed: match[2] === 'x'
                });
            }
            return tasks;
        };
        const toggleTask = (messageIndex, taskId) => {
            if (!dataLoaded.value || !props.uid)
                return;
            const message = messages.value[messageIndex];
            if (message.tasks) {
                const task = message.tasks.find(t => t.id === taskId);
                if (task) {
                    task.completed = !task.completed;
                    // 更新到 Firebase
                    set(dbRef(database, `bulletin/${messageIndex}/tasks`), message.tasks).then(() => {
                        console.log('任務狀態更新成功');
                    });
                }
            }
        };
        const getCompletedTaskCount = (tasks) => {
            return tasks.filter(task => task.completed).length;
        };
        // 檢測引用的函數
        const detectReferences = (text) => {
            const references = [];
            // 檢測引用格式 (例如 #123 或 引用 #123)
            const referenceRegex = /(?:引用\s*)?#(\d+)/g;
            let match;
            while ((match = referenceRegex.exec(text)) !== null) {
                const messageId = parseInt(match[1]);
                if (messageId < messages.value.length) {
                    const referencedMessage = messages.value[messageId];
                    if (referencedMessage) {
                        references.push({
                            id: messageId,
                            preview: referencedMessage.text.substring(0, 50) + (referencedMessage.text.length > 50 ? '...' : ''),
                            type: 'message'
                        });
                    }
                }
            }
            return references;
        };
        return {
            isBigFile,
            uploadProgress,
            maxShowMessages,
            showMoreMessages,
            showLessMessages,
            messages,
            newMessage,
            newMessageHref,
            addMessage,
            parseDate,
            toggleLogin,
            sortedMessages,
            toggleReaction,
            toggleReplyReaction,
            hasReacted,
            getReactionCount,
            getReactionUsers,
            dataLoaded,
            replyingTo,
            replyText,
            toggleReplyForm,
            addReply,
            cancelReply,
            toggleReplies,
            deleteReply,
            saveRepliesExpandedState,
            restoreRepliesExpandedState,
            editMessage,
            editingMessage,
            uploadingFile,
            newMessageAttachments,
            handleFileUpload,
            removeAttachment,
            addHref,
            removeHref,
            removeHrefByIndex,
            newMessageHrefs,
            messageTextarea,
            showMentions,
            mentionSuggestions,
            mentionIndex,
            handleMessageInput,
            handleKeydown,
            selectMention,
            parseMentionsAndHideTasks,
            searchKeyword,
            filteredMessages,
            handleSearch,
            clearSearch,
            detectMentionedUsers,
            sendMentionNotifications,
            availableLabels,
            availableStatuses,
            availablePriorities,
            toggleLabel,
            hasLabel,
            changeStatus,
            getStatusIcon,
            getStatusText,
            changePriority,
            getPriorityIcon,
            getPriorityText,
            quoteMessage,
            scrollToMessage,
            parseTaskList,
            toggleTask,
            getCompletedTaskCount,
            detectReferences,
            handleDropdownClick,
            activeDropdownMenu,
            activeDropdownType,
            activeDropdownMessageIndex,
            createDropdownMenu,
            removeActiveDropdownMenu,
            notifyAllUsers,
            sendNotificationToAllUsers,
            mentionPosition,
            calculateMentionPosition,
            expandMessage,
            collapseMessage,
            expandReply,
            collapseReply,
        };
    }
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['comment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['comment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['comment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['comment'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['comment'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['comment'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['reply'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['reply'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['primary'];
    __VLS_styleScopedClasses['submit'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['flex-column'];
    __VLS_styleScopedClasses['reaction-btn'];
    __VLS_styleScopedClasses['reaction-btn'];
    __VLS_styleScopedClasses['action-btn'];
    __VLS_styleScopedClasses['action-btn'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['reply-btn'];
    __VLS_styleScopedClasses['quote-btn'];
    __VLS_styleScopedClasses['edit-btn'];
    __VLS_styleScopedClasses['expand-btn'];
    __VLS_styleScopedClasses['delete-btn'];
    __VLS_styleScopedClasses['reaction-tooltip'];
    __VLS_styleScopedClasses['reaction-btn'];
    __VLS_styleScopedClasses['reaction-tooltip'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
    __VLS_styleScopedClasses['comment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['reply'];
    __VLS_styleScopedClasses['reaction-buttons'];
    __VLS_styleScopedClasses['reaction-btn'];
    __VLS_styleScopedClasses['action-buttons'];
    __VLS_styleScopedClasses['action-btn'];
    __VLS_styleScopedClasses['emoji'];
    __VLS_styleScopedClasses['count'];
    __VLS_styleScopedClasses['reaction-tooltip'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['upload'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['attachments'];
    __VLS_styleScopedClasses['attachments'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['attachments'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['mini'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['attachments'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['mini'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['attachments'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['mini'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['mention-item'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['search'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['search'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['search'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['search'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['close'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['mention-link'];
    __VLS_styleScopedClasses['message-status'];
    __VLS_styleScopedClasses['message-status'];
    __VLS_styleScopedClasses['message-status'];
    __VLS_styleScopedClasses['message-priority'];
    __VLS_styleScopedClasses['message-priority'];
    __VLS_styleScopedClasses['message-priority'];
    __VLS_styleScopedClasses['message-labels'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['referenced-message'];
    __VLS_styleScopedClasses['task-item'];
    __VLS_styleScopedClasses['task-item'];
    __VLS_styleScopedClasses['task-item'];
    __VLS_styleScopedClasses['task-text'];
    __VLS_styleScopedClasses['read-more-link'];
    __VLS_styleScopedClasses['message-header'];
    __VLS_styleScopedClasses['message-status-priority'];
    __VLS_styleScopedClasses['message-labels'];
    __VLS_styleScopedClasses['task-list'];
    __VLS_styleScopedClasses['referenced-message'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['mention-suggestions'];
    __VLS_styleScopedClasses['mention-item'];
    __VLS_styleScopedClasses['mention-item'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['buttons'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['menu'];
    __VLS_styleScopedClasses['dropdown'];
    __VLS_styleScopedClasses['menu'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['dropdown-trigger'];
    __VLS_styleScopedClasses['dropdown-trigger'];
    __VLS_styleScopedClasses['dropdown-trigger'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
//# sourceMappingURL=BulletinBoardView_bkup20250729.vue.js.map
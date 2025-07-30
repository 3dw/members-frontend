import { ref, defineComponent, nextTick } from 'vue';
export default defineComponent({
    name: 'BulletinMessageEditor',
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
    emits: ['add-message'],
    setup(props, { emit, expose }) {
        const uploadProgress = ref('');
        const isBigFile = ref(false);
        const newMessageTitle = ref('');
        const newMessage = ref('');
        const newMessageHref = ref('');
        const newMessageHrefs = ref([]);
        const uploadingFile = ref(false);
        const newMessageAttachments = ref([]);
        const messageTextarea = ref(null);
        const showMentions = ref(false);
        const mentionSuggestions = ref([]);
        const mentionIndex = ref(0);
        const mentionStart = ref(-1);
        const notifyAllUsers = ref(false);
        const mentionPosition = ref({ top: 0, left: 0 });
        const addMessage = () => {
            if (!newMessageTitle.value.trim()) {
                alert('請輸入留言標題');
                return;
            }
            if (!newMessage.value.trim()) {
                alert('請輸入留言內容');
                return;
            }
            if (newMessageHref.value) {
                newMessageHrefs.value.push(newMessageHref.value);
                newMessageHref.value = '';
            }
            const mentionedUsers = detectMentionedUsers(newMessage.value);
            const tasks = parseTaskList(newMessage.value);
            const referencedMessages = detectReferences(newMessage.value);
            const messageData = {
                title: newMessageTitle.value.trim(),
                text: newMessage.value,
                attachments: newMessageAttachments.value,
                hrefs: newMessageHrefs.value,
                mentionedUsers,
                tasks,
                referencedMessages,
                notifyAllUsers: notifyAllUsers.value
            };
            emit('add-message', messageData);
            // 清空表單
            newMessageTitle.value = '';
            newMessage.value = '';
            newMessageHrefs.value = [];
            newMessageAttachments.value = [];
            notifyAllUsers.value = false;
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
        const handleMessageInput = () => {
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
                        .filter(([, user]) => user.name.toLowerCase().includes(searchText.toLowerCase()))
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
        const addHref = () => {
            if (newMessageHref.value) {
                try {
                    new URL(newMessageHref.value);
                    newMessageHrefs.value.push(newMessageHref.value);
                    newMessageHref.value = '';
                }
                catch {
                    alert('請輸入有效的網址');
                }
            }
        };
        const removeHrefByIndex = (index) => {
            newMessageHrefs.value.splice(index, 1);
        };
        const detectMentionedUsers = (text) => {
            if (!text)
                return [];
            const mentionedUsers = [];
            const mentionRegex = /@([a-zA-Z0-9\u4e00-\u9fa5_]+)/g;
            let match;
            while ((match = mentionRegex.exec(text)) !== null) {
                const username = match[1];
                const userEntry = Object.entries(props.users).find(([, user]) => (user.name || '').toLowerCase() === username.toLowerCase());
                if (userEntry) {
                    const userId = userEntry[0];
                    if (!mentionedUsers.includes(userId)) {
                        mentionedUsers.push(userId);
                    }
                }
            }
            return mentionedUsers;
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
        // 檢測引用的函數
        const detectReferences = (text) => {
            const references = [];
            // 檢測引用格式 (例如 #123 或 引用 #123)
            const referenceRegex = /(?:引用\s*)?#(\d+)/g;
            let match;
            while ((match = referenceRegex.exec(text)) !== null) {
                const messageId = parseInt(match[1]);
                // 這裡需要從父組件獲取 messages 來檢查引用是否有效
                // 暫時先加入，讓父組件來驗證
                references.push({
                    id: messageId,
                    preview: '',
                    type: 'message'
                });
            }
            return references;
        };
        const setQuotedText = (quotedText) => {
            newMessage.value = quotedText + newMessage.value;
            // 聚焦到留言框並將游標移到最後
            nextTick(() => {
                if (messageTextarea.value) {
                    messageTextarea.value.focus();
                    messageTextarea.value.setSelectionRange(newMessage.value.length, newMessage.value.length);
                }
            });
        };
        const exposedMethods = {
            setQuotedText
        };
        expose(exposedMethods);
        return {
            uploadProgress,
            isBigFile,
            newMessageTitle,
            newMessage,
            newMessageHref,
            newMessageHrefs,
            uploadingFile,
            newMessageAttachments,
            messageTextarea,
            showMentions,
            mentionSuggestions,
            mentionIndex,
            notifyAllUsers,
            mentionPosition,
            addMessage,
            handleFileUpload,
            removeAttachment,
            calculateMentionPosition,
            handleMessageInput,
            handleKeydown,
            selectMention,
            addHref,
            removeHrefByIndex,
            detectMentionedUsers,
            parseTaskList,
            detectReferences,
            setQuotedText,
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
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
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['reply'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['reply'];
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['message'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['message'];
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
    __VLS_styleScopedClasses['mention-item'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['form'];
    __VLS_styleScopedClasses['reply'];
    __VLS_styleScopedClasses['mention-suggestions'];
    __VLS_styleScopedClasses['mention-item'];
    __VLS_styleScopedClasses['mention-item'];
    __VLS_styleScopedClasses['ui'];
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
//# sourceMappingURL=BulletinMessageEditor.vue.js.map
import { ref, defineComponent, onMounted, onBeforeUnmount, computed, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'BulletinMessageDisplay',
    props: {
        uid: {
            required: false,
            default: ''
        },
        users: {
            required: false,
            default: () => ({})
        },
        messages: {
            type: Array,
            required: true,
            default: () => []
        },
        replyingTo: {
            type: Number,
            required: false,
            default: -1
        }
    },
    emits: ['toggle-reaction', 'toggle-reply-form', 'quote-message', 'edit-message', 'save-edit', 'cancel-edit', 'delete-reply', 'add-reply', 'cancel-reply', 'toggle-task', 'handle-dropdown-click', 'expand-message', 'collapse-message', 'expand-reply', 'collapse-reply', 'toggle-replies'],
    setup(props, { emit }) {
        const router = useRouter();
        const maxShowMessages = ref(5);
        const searchKeyword = ref('');
        const filteredMessages = ref([]);
        const localReplyText = ref('');
        const editingMessageIndex = ref(-1);
        const editTitle = ref('');
        const editText = ref('');
        const editTextarea = ref(null);
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
            return [...props.messages].map((obj, index) => {
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
        // 文字展開狀態管理
        const expandMessage = (messageIndex) => {
            emit('expand-message', messageIndex);
        };
        const collapseMessage = (messageIndex) => {
            emit('collapse-message', messageIndex);
        };
        const expandReply = (messageIndex, replyIndex) => {
            emit('expand-reply', messageIndex, replyIndex);
        };
        const collapseReply = (messageIndex, replyIndex) => {
            emit('collapse-reply', messageIndex, replyIndex);
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
            emit('toggle-replies', index);
            saveRepliesExpandedState();
        };
        const saveRepliesExpandedState = () => {
            const expandedState = {};
            props.messages.forEach((message, index) => {
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
                    props.messages.forEach((message, index) => {
                        message.repliesExpanded = expandedState[index] || false;
                    });
                }
                catch (e) {
                    console.error('恢復展開狀態失敗', e);
                }
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
                const user = Object.entries(props.users).find(([, user]) => user.name === username);
                if (user) {
                    return `<span class="mention-link" data-uid="${user[0]}">${match}</span>`;
                }
                return match;
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
        const showMoreMessages = () => {
            maxShowMessages.value += 10;
        };
        const showLessMessages = () => {
            maxShowMessages.value -= 10;
        };
        const getStatusIcon = (status) => {
            const statusConfig = availableStatuses.value.find(s => s.value === status);
            return statusConfig ? statusConfig.icon : 'circle outline';
        };
        const getStatusText = (status) => {
            const statusConfig = availableStatuses.value.find(s => s.value === status);
            return statusConfig ? statusConfig.text : '開啟';
        };
        const getPriorityIcon = (priority) => {
            const priorityConfig = availablePriorities.value.find(p => p.value === priority);
            return priorityConfig ? priorityConfig.icon : 'chevron down';
        };
        const getPriorityText = (priority) => {
            const priorityConfig = availablePriorities.value.find(p => p.value === priority);
            return priorityConfig ? priorityConfig.text : '低';
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
        const getCompletedTaskCount = (tasks) => {
            return tasks.filter(task => task.completed).length;
        };
        const toggleTask = (messageIndex, taskId) => {
            emit('toggle-task', messageIndex, taskId);
        };
        // 當前激活的下拉菜單
        const activeDropdownMenu = ref(null);
        const activeDropdownType = ref('');
        const activeDropdownMessageIndex = ref(-1);
        // 創建動態下拉菜單 - 這個功能需要在父組件中實現
        const handleDropdownClick = (event) => {
            // 將事件委託給父組件處理
            emit('handle-dropdown-click', event);
        };
        // 處理回覆相關功能
        const handleAddReply = (messageIndex) => {
            emit('add-reply', messageIndex, localReplyText.value);
            localReplyText.value = '';
        };
        const handleCancelReply = () => {
            emit('cancel-reply');
            localReplyText.value = '';
        };
        // 編輯相關函數
        const startEditMessage = (messageIndex, originalTitle, originalText) => {
            editingMessageIndex.value = messageIndex;
            // 直接使用傳入的標題和內容
            editTitle.value = originalTitle || '';
            editText.value = originalText || '';
            console.log('編輯留言:', originalTitle, originalText);
            nextTick(() => {
                if (editTextarea.value) {
                    editTextarea.value.focus();
                }
            });
        };
        const saveEdit = () => {
            console.log('saveEdit 被調用');
            console.log('editTitle:', editTitle.value);
            console.log('editText:', editText.value);
            console.log('editingMessageIndex:', editingMessageIndex.value);
            console.log('props.messages:', props.messages);
            if (!editTitle.value.trim()) {
                alert('請輸入留言標題');
                return;
            }
            if (editText.value.trim() !== '') {
                // 檢查 messages 數組中是否有 undefined 元素
                const invalidMessages = props.messages.filter((msg) => !msg);
                if (invalidMessages.length > 0) {
                    console.error('發現無效的留言元素:', invalidMessages);
                }
                // 根據 actualIndex 找到對應的留言索引
                const messageIndex = props.messages.findIndex(msg => {
                    if (!msg) {
                        console.error('遇到無效的留言元素');
                        return false;
                    }
                    return msg.actualIndex === editingMessageIndex.value;
                });
                console.log('找到的 messageIndex:', messageIndex);
                if (messageIndex !== -1) {
                    console.log('發送 save-edit 事件');
                    emit('save-edit', messageIndex, editTitle.value.trim(), editText.value.trim());
                }
                else {
                    console.error('找不到對應的留言索引:', editingMessageIndex.value);
                }
                cancelEdit();
            }
        };
        const cancelEdit = () => {
            editingMessageIndex.value = -1;
            editTitle.value = '';
            editText.value = '';
        };
        const scrollToMessageEditor = () => {
            const messageEditor = document.querySelector('.ui.form.reply');
            if (messageEditor) {
                messageEditor.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };
        onMounted(() => {
            document.addEventListener('click', handleMentionClick);
        });
        onBeforeUnmount(() => {
            document.removeEventListener('click', handleMentionClick);
        });
        return {
            maxShowMessages,
            searchKeyword,
            filteredMessages,
            sortedMessages,
            parseDate,
            toggleReplies,
            saveRepliesExpandedState,
            restoreRepliesExpandedState,
            hasReacted,
            getReactionCount,
            getReactionUsers,
            parseMentionsAndHideTasks,
            handleSearch,
            clearSearch,
            showMoreMessages,
            showLessMessages,
            getStatusIcon,
            getStatusText,
            getPriorityIcon,
            getPriorityText,
            scrollToMessage,
            getCompletedTaskCount,
            toggleTask,
            expandMessage,
            collapseMessage,
            expandReply,
            collapseReply,
            handleDropdownClick,
            activeDropdownMenu,
            activeDropdownType,
            activeDropdownMessageIndex,
            localReplyText,
            handleAddReply,
            handleCancelReply,
            editingMessageIndex,
            editTitle,
            editText,
            editTextarea,
            startEditMessage,
            saveEdit,
            cancelEdit,
            scrollToMessageEditor,
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
//# sourceMappingURL=BulletinMessageDisplay.vue.js.map
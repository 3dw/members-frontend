import { ref, defineComponent, computed, watch } from 'vue';
export default defineComponent({
    name: 'BulletinMessageList',
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
        }
    },
    emits: ['select-message', 'add-message'],
    setup(props, { emit }) {
        const maxShowMessages = ref(10);
        const searchKeyword = ref('');
        const filteredMessages = ref([]);
        const showMessageForm = ref(false);
        const newMessageTitle = ref('');
        const newMessageText = ref('');
        const sortedMessages = computed(() => {
            return [...props.messages].map((obj, index) => {
                return {
                    ...obj,
                    actualIndex: index
                };
            }).sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime();
            });
        });
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
        const handleSearch = () => {
            if (!searchKeyword.value.trim()) {
                filteredMessages.value = sortedMessages.value;
                return;
            }
            const keyword = searchKeyword.value.toLowerCase().trim();
            filteredMessages.value = sortedMessages.value.filter(message => {
                if (message.title && message.title.toLowerCase().includes(keyword)) {
                    return true;
                }
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
        const showMoreMessages = () => {
            maxShowMessages.value += 10;
        };
        const showLessMessages = () => {
            maxShowMessages.value = Math.max(10, maxShowMessages.value - 10);
        };
        const selectMessage = (messageIndex) => {
            console.log('點擊留言:', messageIndex);
            console.log('發送 select-message 事件');
            emit('select-message', messageIndex);
        };
        const toggleMessageForm = () => {
            showMessageForm.value = !showMessageForm.value;
        };
        const closeMessageForm = () => {
            showMessageForm.value = false;
            newMessageTitle.value = '';
            newMessageText.value = '';
        };
        const submitMessage = () => {
            if (newMessageText.value.trim()) {
                emit('add-message', {
                    title: newMessageTitle.value.trim(),
                    text: newMessageText.value.trim(),
                    attachments: [],
                    hrefs: [],
                    mentionedUsers: [],
                    tasks: [],
                    referencedMessages: [],
                    notifyAllUsers: false
                });
                closeMessageForm();
            }
        };
        const getStatusIcon = (status) => {
            const statusMap = {
                'open': 'circle outline',
                'in-progress': 'hourglass half',
                'resolved': 'check circle',
                'closed': 'times circle'
            };
            return statusMap[status] || 'circle outline';
        };
        const getStatusText = (status) => {
            const statusMap = {
                'open': '開啟',
                'in-progress': '進行中',
                'resolved': '已解決',
                'closed': '已關閉'
            };
            return statusMap[status] || '開啟';
        };
        const getPriorityIcon = (priority) => {
            const priorityMap = {
                'low': 'arrow down',
                'medium': 'minus',
                'high': 'arrow up',
                'urgent': 'exclamation triangle'
            };
            return priorityMap[priority] || 'arrow down';
        };
        const getPriorityText = (priority) => {
            const priorityMap = {
                'low': '低',
                'medium': '中',
                'high': '高',
                'urgent': '緊急'
            };
            return priorityMap[priority] || '低';
        };
        watch(sortedMessages, (newMessages) => {
            if (!searchKeyword.value.trim()) {
                filteredMessages.value = newMessages;
            }
            else {
                handleSearch();
            }
        }, { immediate: true });
        return {
            maxShowMessages,
            searchKeyword,
            filteredMessages,
            sortedMessages,
            parseDate,
            handleSearch,
            clearSearch,
            showMoreMessages,
            showLessMessages,
            selectMessage,
            getStatusIcon,
            getStatusText,
            getPriorityIcon,
            getPriorityText,
            showMessageForm,
            newMessageTitle,
            newMessageText,
            toggleMessageForm,
            closeMessageForm,
            submitMessage,
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
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['message-status'];
    __VLS_styleScopedClasses['message-priority'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['message-card'];
    __VLS_styleScopedClasses['message-stats'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['message-content'];
    __VLS_styleScopedClasses['message-form'];
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
//# sourceMappingURL=BulletinMessageList.vue.js.map
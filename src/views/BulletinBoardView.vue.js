import { ref, defineComponent, onMounted, nextTick, computed } from 'vue';
import { onValue, ref as dbRef, set } from 'firebase/database';
import { bulletinRef, database } from '@/firebase';
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
        const messages = ref([
            { author: 'AliceS', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
            { author: 'BobS', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },
        ].map(msg => ({
            ...msg,
            reactions: {}
        })));
        const newMessage = ref('');
        const dataLoaded = ref(false);
        const replyingTo = ref(-1);
        const replyText = ref('');
        const editingMessage = ref(-1);
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
            if (!dataLoaded.value)
                return;
            console.log(newMessage.value);
            const m_length = messages.value.length;
            const newMessageObj = {
                author: props.users[props.uid].name || '匿名',
                uid: props.uid || '123',
                date: new Date().toISOString(),
                text: newMessage.value,
                reactions: {}
            };
            messages.value.push(newMessageObj);
            newMessage.value = '';
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
            // 保存展開狀態到sessionStorage
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
            const newReply = {
                author: props.users[props.uid].name || '匿名',
                uid: props.uid,
                date: new Date().toISOString(),
                text: replyText.value.trim()
            };
            messageToReply.replies.push(newReply);
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
            // 確認回覆是當前用戶所發的
            const replyToDelete = messageToUpdate.replies[replyIndex];
            if (replyToDelete.uid !== props.uid)
                return;
            if (window.confirm('確定要刪除這則回覆嗎？')) {
                // 移除回覆
                messageToUpdate.replies.splice(replyIndex, 1);
                // 更新到 Firebase，只更新特定訊息的回覆
                set(dbRef(database, `bulletin/${messageIndex}/replies`), messageToUpdate.replies).then(() => {
                    console.log('回覆刪除成功');
                });
            }
        };
        // 新增保存展開狀態到sessionStorage的方法
        const saveRepliesExpandedState = () => {
            const expandedState = {};
            messages.value.forEach((message, index) => {
                if (message.repliesExpanded) {
                    expandedState[index] = true;
                }
            });
            sessionStorage.setItem('repliesExpandedState', JSON.stringify(expandedState));
        };
        // 新增從sessionStorage恢復展開狀態的方法
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
            // 確認是用戶自己的留言且沒有回覆
            if (messageToEdit.uid !== props.uid || (messageToEdit.replies && messageToEdit.replies.length > 0))
                return;
            // 取得編輯內容（這裡可以使用 prompt，在實際使用時建議更換為 modal 或表單）
            const editedText = prompt('編輯留言', messageToEdit.text);
            if (editedText !== null && editedText.trim() !== '') {
                // 更新留言內容
                messageToEdit.text = editedText.trim();
                // 添加更新時間戳
                messageToEdit.updated = new Date().toISOString();
                // 更新到 Firebase
                set(dbRef(database, `bulletin/${index}/text`), editedText.trim()).then(() => {
                    console.log('留言編輯成功');
                });
                // 更新 updated 欄位到 Firebase
                set(dbRef(database, `bulletin/${index}/updated`), messageToEdit.updated).then(() => {
                    console.log('更新時間記錄成功');
                });
            }
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
                    })) : []
                }));
                dataLoaded.value = true;
                // 在數據載入後恢復展開狀態
                restoreRepliesExpandedState();
            });
            setInterval(async () => {
                console.log('tick');
                await nextTick();
                messages.value = [...messages.value];
            }, 60 * 1000);
        });
        return {
            messages,
            newMessage,
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
            editMessage
        };
    }
});
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
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['basic'];
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
    __VLS_styleScopedClasses['emoji'];
    __VLS_styleScopedClasses['count'];
    __VLS_styleScopedClasses['reaction-tooltip'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=BulletinBoardView.vue.js.map
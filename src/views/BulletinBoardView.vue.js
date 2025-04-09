import { ref, defineComponent, onMounted, nextTick, computed } from 'vue';
import { onValue, set } from 'firebase/database';
import { bulletinRef } from '@/firebase';
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
        // 添加 sortedMessages 計算屬性
        const sortedMessages = computed(() => {
            return [...messages.value].sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB.getTime() - dateA.getTime(); // 降序排列，最新的在前面
            });
        });
        const addMessage = () => {
            if (!dataLoaded.value)
                return;
            console.log(newMessage.value);
            messages.value.push({
                author: props.users[props.uid].name || '匿名',
                uid: props.uid || '123',
                date: new Date().toISOString(),
                text: newMessage.value,
                reactions: {}
            });
            newMessage.value = '';
            set(bulletinRef, messages.value).then(() => {
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
        // 新增處理反應的方法
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
            // 更新到 Firebase
            set(bulletinRef, messages.value).then(() => {
                console.log('反應更新成功');
            });
        };
        const hasReacted = (message, reaction) => {
            return message.reactions?.[reaction]?.[props.uid] || false;
        };
        const getReactionCount = (message, reaction) => {
            return Object.keys(message.reactions?.[reaction] || {}).length;
        };
        // 新增獲取反應者名稱的方法
        const getReactionUsers = (message, reaction) => {
            if (!message.reactions?.[reaction])
                return '';
            return Object.keys(message.reactions[reaction])
                .map(uid => props.users[uid]?.name || '匿名用戶')
                .join('、');
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
                    reactions: message.reactions || {}
                }));
                dataLoaded.value = true;
            });
            setInterval(async () => {
                console.log('tick');
                await nextTick();
                // 更新 messages 的狀態以觸發重新渲染
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
            hasReacted,
            getReactionCount,
            getReactionUsers,
            dataLoaded
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
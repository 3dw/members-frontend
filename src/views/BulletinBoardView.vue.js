import { ref, defineComponent, onMounted, nextTick } from 'vue';
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
            { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
            { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' }
        ]);
        const newMessage = ref('');
        const addMessage = () => {
            console.log(newMessage.value);
            messages.value.push({
                author: props.users[props.uid].name || '匿名',
                uid: props.uid || '123',
                date: new Date().toISOString(),
                text: newMessage.value
            });
            newMessage.value = '';
            set(bulletinRef, messages.value).then(() => {
                console.log('留言成功');
            });
            // 可以在這裡添加邏輯來將新留言添加到 messages 中
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
        onMounted(() => {
            console.log('mounted');
            onValue(bulletinRef, (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                messages.value = data.map((message) => ({
                    author: message.author,
                    uid: message.uid,
                    date: message.date,
                    text: message.text
                }));
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
            toggleLogin
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['comments'];
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
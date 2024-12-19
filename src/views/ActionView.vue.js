import { ref, onMounted, computed } from 'vue';
import { actionsRef } from '@/firebase';
import { push, onValue } from 'firebase/database';
import { legislators } from '@/data/ly_11_02';
export default (await import('vue')).defineComponent({
    setup() {
        const url = 'https://www.alearn.org.tw/action';
        const title = '請協助捍衛每個孩子選擇自學的權利';
        const description = '只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育';
        const shareToFB = () => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        };
        const shareToTwitter = () => {
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        };
        const shareToLine = () => {
            window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`);
        };
        const actions = ref([]);
        // 新增 computed property 來計算今日行動
        const todayActions = computed(() => {
            const today = new Date();
            return actions.value.filter(action => {
                console.log(action.datetime);
                console.log(action.datetime.split(' ')[0]);
                const actionDate = new Date(action.datetime.split(' ')[0]);
                console.log(actionDate);
                console.log(today);
                return actionDate.getFullYear() === today.getFullYear() &&
                    actionDate.getMonth() === today.getMonth() &&
                    actionDate.getDate() === today.getDate();
            });
        });
        // 監聽資料變化
        onMounted(() => {
            onValue(actionsRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    actions.value = Object.values(data);
                    console.log(actions.value);
                }
            });
        });
        // 記錄打電話行動
        const logPhoneCall = (legislator) => {
            const userName = prompt('請問您的大名或是暱稱?');
            if (!userName)
                return;
            const message = prompt('請問您的心得感想?(可不填)');
            const now = new Date();
            push(actionsRef, {
                datetime: now.toLocaleString('zh-TW'),
                action: 'phone',
                name: userName,
                legislator: legislator.name,
                message: message || '請繼續接力關注此案'
            });
        };
        const logEmail = (legislator) => {
            const userName = prompt('請問您的大名或是暱稱?');
            if (!userName)
                return;
            const message = prompt('請問您的心得感想?(可不填)');
            const now = new Date();
            push(actionsRef, {
                datetime: now.toLocaleString('zh-TW'),
                action: 'email',
                name: userName,
                legislator: legislator.name,
                message: message || '請繼續接力關注此案'
            });
        };
        // 計算每位委員被打電話的次數
        const getCallCount = (legislatorName) => {
            const count = actions.value.filter(action => action.name !== 'test' &&
                action.legislator === legislatorName).length;
            return Math.min(Math.round((count / 100) * 100), 100);
        };
        return {
            url,
            title,
            description,
            legislators,
            shareToFB,
            shareToTwitter,
            shareToLine,
            actions,
            todayActions,
            logPhoneCall,
            logEmail,
            getCallCount,
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
    __VLS_styleScopedClasses['cards'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['progress'];
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
//# sourceMappingURL=ActionView.vue.js.map
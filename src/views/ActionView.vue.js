import { ref, onMounted, computed } from 'vue';
import { actionsRef } from '@/firebase';
import { push, onValue } from 'firebase/database';
import { legislators } from '@/data/ly_11_02';
import { messageTemplate, messageFacebookTemplate, messageEmailTemplate, messagePhoneTemplate } from '@/data/message_templates';
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
        const methods = ['電話', 'Email', 'Facebook'];
        const userName = ref('');
        const myLegislator = ref('');
        const method = ref('Facebook');
        const message = ref('');
        const actions = ref([]);
        const showDetails = ref(false);
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
        // 記錄行動
        const logAction = () => {
            console.log(myLegislator.value);
            console.log(userName.value);
            console.log(method.value);
            console.log(message.value);
            if (!myLegislator.value || !userName.value || !method.value) {
                window.alert('請填寫完整表單');
                return;
            }
            const now = new Date();
            // 將方法轉換為小寫
            let myMethod;
            if (method.value === '電話') {
                myMethod = 'phone';
            }
            else if (method.value === 'Email') {
                myMethod = 'email';
            }
            else if (method.value === 'Facebook') {
                myMethod = 'facebook';
            }
            push(actionsRef, {
                datetime: now.toLocaleString('zh-TW'),
                name: userName.value,
                legislator: myLegislator.value,
                action: myMethod,
                message: message.value || '請繼續接力關注此案'
            }).then(() => {
                window.alert('行動記錄已成功保存');
            }).catch((error) => {
                window.alert('行動記錄保存失敗: ' + error.message);
            });
            return;
        };
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
        const logFacebook = (legislator) => {
            const userName = prompt('請問您的大名或是暱稱?');
            if (!userName)
                return;
            const message = prompt('請問您的心得感想?(可不填)');
            const now = new Date();
            push(actionsRef, {
                datetime: now.toLocaleString('zh-TW'),
                action: 'facebook',
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
        // 新增每週統計
        const weeklyStats = computed(() => {
            const stats = {};
            const today = new Date();
            // 初始化過去7天的數據
            for (let i = 6; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                stats[date.toISOString().split('T')[0]] = 0;
            }
            // 統計行動數據
            actions.value.forEach(action => {
                if (action.name === 'test')
                    return;
                // 解析 "2024/12/19 下午9:39:21" 格式的日期
                const [datePart] = action.datetime.split(' ');
                const [year, month, day] = datePart.split('/');
                const actionDateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                if (stats[actionDateStr] !== undefined) {
                    stats[actionDateStr]++;
                }
            });
            return stats;
        });
        // 格式化日期顯示
        const formatDate = (dateStr) => {
            const date = new Date(dateStr);
            return `${date.getMonth() + 1}/${date.getDate()}`;
        };
        const messageTemplate1 = ref(messageTemplate);
        const messageFacebookTemplate1 = ref(messageFacebookTemplate);
        const messageEmailTemplate1 = ref(messageEmailTemplate);
        const messagePhoneTemplate1 = ref(messagePhoneTemplate);
        const copyMessage = async () => {
            try {
                await navigator.clipboard.writeText(messageTemplate1.value);
                window.alert('訊息已複製到剪貼簿');
            }
            catch (err) {
                console.error('複製失敗:', err);
            }
        };
        const toggleMessageTemplate = (templateType) => {
            switch (templateType) {
                case 'facebook':
                    messageTemplate1.value = messageFacebookTemplate1.value.trim();
                    break;
                case 'email':
                    messageTemplate1.value = messageEmailTemplate1.value.trim();
                    break;
                case 'phone':
                    messageTemplate1.value = messagePhoneTemplate1.value.trim();
                    break;
            }
        };
        const resetMessage = () => {
            messageTemplate1.value = `親愛的委員您好,

我是關心教育的公民。想請您關注「向下延伸補助國中小自學生」實行細則的擬定進展。

依據教育基本法,家庭擁有教育選擇權。自學已是體制內合法的教育方式,理應和在校生一樣享有政府補助。

只有補助自學,弱勢家庭的孩子才有足夠的機會參與實驗教育。懇請您支持這項攸關教育平等的法案。

謝謝您的關注。`;
        };
        return {
            userName,
            myLegislator,
            method,
            methods,
            message,
            url,
            title,
            description,
            legislators,
            showDetails,
            shareToFB,
            shareToTwitter,
            shareToLine,
            actions,
            todayActions,
            logAction,
            logPhoneCall,
            logEmail,
            logFacebook,
            getCallCount,
            weeklyStats,
            formatDate,
            messageTemplate1, // 訊息範本
            messageFacebookTemplate1, // 訊息範本
            messageEmailTemplate1, // 訊息範本
            messagePhoneTemplate1, // 訊息範本
            copyMessage,
            resetMessage,
            toggleMessageTemplate
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['tiny'];
    __VLS_styleScopedClasses['statistics'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['red'];
    __VLS_styleScopedClasses['star'];
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
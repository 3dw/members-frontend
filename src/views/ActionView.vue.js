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
        // 下載行動記錄, 以JSON格式
        const downloadAction = () => {
            // 排版一下，至少要有換行
            let jsonString = JSON.stringify(actions.value)
                .replace(/,/g, '\n,')
                .replace(/\}\s+,/g, '},')
                .replace(/,\{/g, ',\n{');
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'action_record.json';
            a.click();
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
            messageTemplate1.value = messageTemplate;
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
            getCallCount,
            weeklyStats,
            formatDate,
            messageTemplate1, // 訊息範本
            messageFacebookTemplate1, // 訊息範本
            messageEmailTemplate1, // 訊息範本
            messagePhoneTemplate1, // 訊息範本
            copyMessage,
            resetMessage,
            toggleMessageTemplate,
            downloadAction
        };
    }
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['cards']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['tiny']} */ ;
/** @type {__VLS_StyleScopedClasses['statistics']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['red']} */ ;
/** @type {__VLS_StyleScopedClasses['star']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=ActionView.vue.js.map
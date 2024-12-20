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
        const messageTemplate = ref(`親愛的委員您好,

我是關心教育的公民。想請您關注「向下延伸補助國中小自學生」實行細則的擬定進展。

依據教育基本法,家庭擁有教育選擇權。自學已是體制內合法的教育方式,理應和在校生一樣享有政府補助。

只有補助自學,弱勢家庭的孩子才有足夠的機會參與實驗教育。懇請您支持這項攸關教育平等的法案。

謝謝您的關注。`);
        const messageFacebookTemplate = ref(`敬愛的立法委員您好：

    近日國會有很大的衝突，但相信教育及文化委員都是關心下一代幸福的人。

    2023年，自主學習促進會發起「向下延伸補助國中小自學生，落實不同社經背景家庭參與實驗教育之機會平等」的連署，成功得到5354位網友具名支持。然而，法案細則至今未訂定，導致國中小階段非學校型態實驗教育家庭仍無法獲得政府補助，面臨重大的經濟壓力，特別是弱勢家庭，更難以平等參與。

    自學是合法的義務教育模式，且高中自學生的補助已有顯著成效。10年間，政府補助嘉惠了8,770名高中自學生，比例僅占教育總支出的0.006%，卻幫助許多來自不同背景的學生完成學業，甚至進入頂尖大學。

    憲法、教育基本法及兒童權利公約都保障教育機會平等的精神。國中小階段的補助不僅能讓更多家庭減輕負擔，也能確保每位孩子享有平等選擇的權利。

    懇請委員您關注此案，協助推動細則制定，讓國中小自學生也能得到應有的支持，為實現教育平等的願景而努力。感謝您！
`);
        const messageEmailTemplate = ref(`主旨：關切「向下延伸補助國中小自學生」實行細則之進展

敬愛的[立法委員姓名]委員：

您好，我是一位關心台灣教育發展的公民，也是一位國中小階段的自學家長。我想針對「向下延伸補助國中小自學生」法案細則的制定進展，向您表達我的關切和支持。

2023年，自主學習促進會發起「向下延伸補助國中小自學生，落實不同社經背景家庭參與實驗教育之機會平等」線上連署並成功得到5354位網友具名連署，通過連署門檻，而實行細則在立法院遲遲未訂，致使目前國中小非學校型態實驗教育家庭仍未得到政府補助。

目前，自學已是體制內合法申請的義務教育模式，並受到政府審議和監督。過去十年，政府補助高中自學生，累計嘉惠了8,770名學生，占教育總支出比例僅0.006%。這項政策幫助了來自不同社經背景的學生完成學業，甚至有人以特殊選才進入國內頂尖大學，成效有目共睹。

然而，國中小階段的非學校型態實驗教育家庭至今未能享有政府的補助，任何實行非學校型態實驗教育的家庭，都因為失去了政府每年20萬的教育單位成本支持，面臨相當的經濟壓力。弱勢家庭則面臨更大的經濟負擔，無法平等參與自學。

自學的選擇往往來自於對孩子個別需求的深刻理解，但這個選擇不應該因家庭的社經背景而受到限制。延伸補助至國中小階段，不僅可以實現教育機會的平等，也符合以下法律和國際規範的精神：

憲法第159條：「國民受教育之機會，一律平等。」

教育基本法第4條：保障教育機會平等原則。

兒童權利公約第28條：確保每位兒童都享有受教育的權利。

因此，誠摯地呼籲立法院教育及文化委員會，儘速推動此法案細則的制定，以落實法律對教育選擇權和平等機會的保障。

希望委員您能持續關注此案，並協助推動其進展，讓更多孩子無論家庭背景，都能享有選擇自學的權利和資源。

也希望瞭解目前此案的進展及卡關的難點所在。有什麼是公民的力量可以一起協力之處？

感謝您撥冗閱讀，期待您的回覆與協助。

祝您一切順心，立法院工作順利！
`);
        const messagePhoneTemplate = ref(`自我介紹：

「您好，我是[您的大名]，一位關心台灣教育發展的公民，也是國中小階段自學生的家長。」

表達關注與訴求：
「我今天致電是想了解『向下延伸補助國中小自學生』法案細則的進展。這項政策對於弱勢家庭參與實驗教育、實現教育機會平等非常重要，2023年已在政府的join平台上連署5千餘人通過，但目前立法院似乎尚未制定細則，讓國中小自學生家庭未能享有政府補助。」

簡述背景與影響：

自學已是合法申請的義務教育模式，並受到政府審議與監督。
政府過去十年補助高中自學生成效良好，但國中小階段的非學校型態實驗教育家庭仍面臨沉重的經濟壓力，特別是弱勢家庭。

提出具體請求：
「我希望瞭解此法案細則的目前進展，以及是否有卡關的地方？」
「身為公民，有什麼我們可以協力的部分嗎？」

感謝與期待：

「非常感謝您的時間和協助！也希望您能持續關注這個議題，推動細則的制定，幫助更多孩子享有平等的教育機會。」
`);
        const copyMessage = async () => {
            try {
                await navigator.clipboard.writeText(messageTemplate.value);
                window.alert('訊息已複製到剪貼簿');
            }
            catch (err) {
                console.error('複製失敗:', err);
            }
        };
        const toggleMessageTemplate = (templateType) => {
            switch (templateType) {
                case 'facebook':
                    messageTemplate.value = messageFacebookTemplate.value.trim();
                    break;
                case 'email':
                    messageTemplate.value = messageEmailTemplate.value.trim();
                    break;
                case 'phone':
                    messageTemplate.value = messagePhoneTemplate.value.trim();
                    break;
            }
        };
        const resetMessage = () => {
            messageTemplate.value = `親愛的委員您好,

我是關心教育的公民。想請您關注「向下延伸補助國中小自學生」實行細則的擬定進展。

依據教育基本法,家庭擁有教育選擇權。自學已是體制內合法的教育方式,理應和在校生一樣享有政府補助。

只有補助自學,弱勢家庭的孩子才有足夠的機會參與實驗教育。懇請您支持這項攸關教育平等的法案。

謝謝您的關注。`;
        };
        return {
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
            logPhoneCall,
            logEmail,
            logFacebook,
            getCallCount,
            weeklyStats,
            formatDate,
            messageTemplate,
            messageFacebookTemplate,
            messageEmailTemplate,
            messagePhoneTemplate,
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
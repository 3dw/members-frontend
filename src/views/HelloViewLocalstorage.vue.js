import { ref, onMounted, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// --- 響應式狀態 ---
const isLoggedIn = ref(false);
const inputUsername = ref(''); // 用於登入輸入框
const username = ref(''); // 登入後的使用者名稱
const selectedAvatar = ref(''); // 選擇的頭像 (Emoji 或 URL)
const currentGreeting = ref(''); // 當前輸入的招呼語
const greetingsOnPond = ref([]); // 池塘上的所有招呼語 [{ username, avatar, message, timestamp, dateString }]
// 可選的頭像列表 (可以用圖片 URL 替換)
const availableAvatars = ref(['😊', '🚀', '🌟', '☀️', '💧', '🌳']);
// --- 本地儲存相關 ---
const STORAGE_KEY = 'pondGreetings';
// 載入今天儲存的招呼語
const loadGreetings = () => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
        try {
            const allGreetings = JSON.parse(storedData);
            const todayString = new Date().toDateString(); // 獲取今天的日期字串 "Mon Apr 07 2025"
            // 只過濾出今天的訊息
            greetingsOnPond.value = allGreetings.filter(g => g.dateString === todayString);
        }
        catch (e) {
            console.error("無法解析儲存的招呼語:", e);
            localStorage.removeItem(STORAGE_KEY); // 如果解析失敗，清除損壞的資料
            greetingsOnPond.value = [];
        }
    }
    else {
        greetingsOnPond.value = [];
    }
};
// 儲存招呼語到 localStorage
const saveGreetings = () => {
    // 注意：為了簡單起見，這裡每次都儲存所有已載入的今日訊息。
    // 更完善的做法可能是讀取舊資料，添加新資料，再存回去，
    // 但由於我們只顯示今日訊息，目前這樣做影響不大。
    localStorage.setItem(STORAGE_KEY, JSON.stringify(greetingsOnPond.value));
};
// --- 計算屬性 ---
// 檢查目前登入的使用者今天是否已經打過招呼
const hasGreetedToday = computed(() => {
    if (!isLoggedIn.value)
        return false;
    const todayString = new Date().toDateString();
    return greetingsOnPond.value.some(g => g.username === username.value && g.dateString === todayString);
});
// --- 方法 ---
const login = () => {
    if (inputUsername.value && selectedAvatar.value) {
        username.value = inputUsername.value;
        isLoggedIn.value = true;
        // 可以在這裡清除輸入框，如果需要的話
        // inputUsername.value = '';
        // selectedAvatar.value = ''; // 如果希望每次登入都重選頭像
    }
};
const logout = () => {
    isLoggedIn.value = false;
    username.value = '';
    inputUsername.value = ''; // 清空輸入欄位以便下次登入
    selectedAvatar.value = ''; // 清空選擇
    currentGreeting.value = ''; // 清空可能未送出的訊息
};
const postGreeting = () => {
    if (!currentGreeting.value || !isLoggedIn.value || hasGreetedToday.value) {
        return; // 如果沒有訊息、未登入或今天已打過招呼，則不執行
    }
    const now = new Date();
    const newGreeting = {
        username: username.value,
        avatar: selectedAvatar.value,
        message: currentGreeting.value,
        timestamp: now.getTime(), // 儲存時間戳 (毫秒)
        dateString: now.toDateString() // 儲存日期字串，方便比較 "今天"
    };
    greetingsOnPond.value.push(newGreeting); // 加入到畫面顯示的陣列
    currentGreeting.value = ''; // 清空輸入框
    saveGreetings(); // 儲存到 localStorage
};
// 可選：格式化時間戳顯示
// const formatTimestamp = (timestamp) => {
//   const date = new Date(timestamp);
//   return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // 只顯示 時:分
// };
// --- 生命週期鉤子 ---
onMounted(() => {
    loadGreetings(); // 組件掛載時載入 localStorage 中的今日招呼語
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
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
    __VLS_styleScopedClasses['avatar-selection'];
    __VLS_styleScopedClasses['avatar-selection'];
    __VLS_styleScopedClasses['welcome-message'];
    __VLS_styleScopedClasses['welcome-message'];
    __VLS_styleScopedClasses['welcome-message'];
    __VLS_styleScopedClasses['greeting-item'];
    __VLS_styleScopedClasses['greeting-item'];
    __VLS_styleScopedClasses['greeting-item'];
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=HelloViewLocalstorage.vue.js.map
import { ref, onMounted, computed } from 'vue';
// 1) 新增從 firebase/database 與我們的 bulletinRef 匯入
import { onValue, set } from 'firebase/database';
import { bulletinRef } from '@/firebase'; // <-- 跟 BulletinBoardView.vue 相同的匯入
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// --- 響應式狀態 ---
const isLoggedIn = ref(false);
const inputUsername = ref(''); // 用於登入輸入框
const username = ref(''); // 登入後的使用者名稱
const selectedAvatar = ref(''); // 選擇的頭像 (Emoji 或 URL)
const currentGreeting = ref(''); // 當前輸入的招呼語
// 2) 改用 Firebase 儲存留言
//    greetingsOnPond 不再只顯示「今日」的留言，而是所有來自 bulletinRef 的留言
const greetingsOnPond = ref([]); // 池塘上的所有招呼語
// 可選的頭像列表 (可以用圖片 URL 替換)
const availableAvatars = ref(['😊', '🚀', '🌟', '☀️', '💧', '🌳']);
// --- 計算屬性 ---
// 這裡保留了原本的「今天是否打過招呼」邏輯，
// 只是現在的 greetingsOnPond 是來自 Firebase 全部資料。
const hasGreetedToday = computed(() => {
    if (!isLoggedIn.value)
        return false;
    const todayString = new Date().toDateString();
    return greetingsOnPond.value.some((g) => g.username === username.value && g.dateString === todayString);
});
// --- 方法 ---
const login = () => {
    if (inputUsername.value && selectedAvatar.value) {
        username.value = inputUsername.value;
        isLoggedIn.value = true;
    }
};
const logout = () => {
    isLoggedIn.value = false;
    username.value = '';
    inputUsername.value = '';
    selectedAvatar.value = '';
    currentGreeting.value = '';
};
// 3) 發送留言時直接 set 整份 greetingsOnPond 到 Firebase
const postGreeting = () => {
    if (!currentGreeting.value || !isLoggedIn.value || hasGreetedToday.value) {
        return; // 如果沒有訊息、未登入或今天已打過招呼，則不執行
    }
    const now = new Date();
    const newGreeting = {
        username: username.value,
        avatar: selectedAvatar.value,
        message: currentGreeting.value,
        timestamp: now.getTime(),
        dateString: now.toDateString()
    };
    greetingsOnPond.value.push(newGreeting);
    currentGreeting.value = '';
    // 將整個陣列寫回 Firebase
    set(bulletinRef, greetingsOnPond.value)
        .then(() => {
        console.log('留言已寫入 Firebase');
    })
        .catch((err) => {
        console.error('寫入 Firebase 時發生錯誤:', err);
    });
};
// 可選：格式化時間戳顯示
// const formatTimestamp = (timestamp) => {
//   const date = new Date(timestamp);
//   return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// };
// --- 生命週期鉤子 ---
// 4) 組件掛載時，使用 onValue 監聽 bulletinRef，並更新 greetingsOnPond
onMounted(() => {
    onValue(bulletinRef, (snapshot) => {
        if (snapshot.exists()) {
            // 假設整個 bulletinRef 是一個陣列形式
            greetingsOnPond.value = snapshot.val();
        }
        else {
            greetingsOnPond.value = [];
        }
    });
});
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
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
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
;
//# sourceMappingURL=HelloView.vue.js.map
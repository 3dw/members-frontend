import { ref, onMounted, onUnmounted } from 'vue';
import { onValue, ref as dbRef } from 'firebase/database';
import { database } from '@/firebase';
import axios from 'axios';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 使用者資料
const users = ref({});
// 新增: 座位總數的響應式變數
const totalSeats = ref(50); // 預設值為 50
// 新增: 獲取座位總數的函數
const fetchTotalSeats = async () => {
    try {
        const response = await axios.get('https://members-backend.alearn13994229.workers.dev/count_members');
        console.log('API response:', response.data);
        totalSeats.value = response.data.total; // 修改這裡：取得 total 屬性的值
        console.log('Total seats set to:', totalSeats.value);
    }
    catch (error) {
        console.error('Error fetching total seats:', error);
        // 發生錯誤時保持預設值 50
    }
};
// 計算圓形位置
const getPosition = (index) => {
    // 使用 totalSeats.value 替換固定值
    const getRadius = () => {
        const width = window.innerWidth;
        if (width > 1200)
            return 350;
        if (width > 900)
            return 300;
        if (width > 700)
            return 250;
        if (width > 500)
            return 200;
        if (width > 350)
            return 150;
        return 130;
    };
    const radius = getRadius();
    const angle = ((index - 1) * (360 / totalSeats.value)) * (Math.PI / 180);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {
        transform: `translate(${x}px, ${y}px)`
    };
};
// 從 Firebase 讀取使用者資料
const usersRef = dbRef(database, 'users');
let unsubscribe = null;
onMounted(async () => {
    // 先獲取座位總數
    await fetchTotalSeats();
    // 原有的 Firebase 監聽邏輯
    unsubscribe = onValue(usersRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            users.value = data;
            console.log('Users data updated:', data);
        }
    }, (error) => {
        console.error('Error fetching users:', error);
    });
});
onUnmounted(() => {
    if (unsubscribe) {
        unsubscribe();
    }
});
// 取得座位上的使用者
const getSeatUser = (seatNumber) => {
    if (!users.value)
        return null;
    const usersList = Object.values(users.value);
    return usersList[seatNumber - 1] || null;
};
// 新增: 選中的用戶資料
const selectedUser = ref(null);
// 新增: 顯示 profile 的函數
const showProfile = (user) => {
    selectedUser.value = user;
};
// 新增: 關閉 profile 的函數
const closeProfile = () => {
    selectedUser.value = null;
};
// 新增: 格式化日期的函數
const formatDate = (timestamp) => {
    if (!timestamp)
        return '未知';
    return new Date(timestamp).toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}; /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['user-info'];
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['occupied'];
    __VLS_styleScopedClasses['circle-container'];
    __VLS_styleScopedClasses['circle-container'];
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['circle-container'];
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['user-avatar'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['subtitle'];
    __VLS_styleScopedClasses['circle-container'];
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['user-avatar'];
    __VLS_styleScopedClasses['user-name'];
    __VLS_styleScopedClasses['seat-number'];
    __VLS_styleScopedClasses['connection-view'];
    __VLS_styleScopedClasses['circle-container'];
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['user-avatar'];
    __VLS_styleScopedClasses['user-name'];
    __VLS_styleScopedClasses['seat-number'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['subtitle'];
    __VLS_styleScopedClasses['stat-item'];
    __VLS_styleScopedClasses['stat-number'];
    __VLS_styleScopedClasses['stat-label'];
    __VLS_styleScopedClasses['circle-container'];
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['stats'];
    __VLS_styleScopedClasses['circle-container'];
    __VLS_styleScopedClasses['seat'];
    __VLS_styleScopedClasses['profile-close'];
    __VLS_styleScopedClasses['profile-content'];
    __VLS_styleScopedClasses['profile-avatar'];
    __VLS_styleScopedClasses['profile-name'];
    __VLS_styleScopedClasses['detail-label'];
    __VLS_styleScopedClasses['detail-value'];
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
//# sourceMappingURL=ConnectionView.vue.js.map
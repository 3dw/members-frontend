import { ref, onMounted, onUnmounted } from 'vue';
import { onValue, ref as dbRef } from 'firebase/database';
import { database } from '@/firebase';
import axios from 'axios';
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
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['user-info']} */ ;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['occupied']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-container']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-container']} */ ;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-container']} */ ;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['user-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-container']} */ ;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['user-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['user-name']} */ ;
/** @type {__VLS_StyleScopedClasses['seat-number']} */ ;
/** @type {__VLS_StyleScopedClasses['connection-view']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-container']} */ ;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['user-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['user-name']} */ ;
/** @type {__VLS_StyleScopedClasses['seat-number']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['subtitle']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-item']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-number']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-label']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-container']} */ ;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['stats']} */ ;
/** @type {__VLS_StyleScopedClasses['circle-container']} */ ;
/** @type {__VLS_StyleScopedClasses['seat']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-close']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-content']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-name']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-label']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-value']} */ ;
var __VLS_dollars;
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
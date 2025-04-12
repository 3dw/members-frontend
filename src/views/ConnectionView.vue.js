import { ref, onMounted, onUnmounted } from 'vue';
import { onValue, ref as dbRef } from 'firebase/database';
import { database } from '@/firebase';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// 使用者資料
const users = ref({});
// 計算圓形位置
const getPosition = (index) => {
    const totalSeats = 50;
    // 根據螢幕寬度動態調整半徑
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
    const angle = ((index - 1) * (360 / totalSeats)) * (Math.PI / 180);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return {
        transform: `translate(${x}px, ${y}px)`
    };
};
// 從 Firebase 讀取使用者資料
const usersRef = dbRef(database, 'users');
let unsubscribe = null;
onMounted(() => {
    // 監聽 Firebase users 資料變化
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
//# sourceMappingURL=ConnectionView.vue.js.map
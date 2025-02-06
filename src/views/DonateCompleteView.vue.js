import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import { app } from '../firebase';
export default (await import('vue')).defineComponent({
    data() {
        return {
            status: 'pending',
            merchantTradeNo: '',
            unsubscribe: null,
        };
    },
    mounted() {
        this.merchantTradeNo = this.$route.params.merchantTradeNo || '';
        if (this.merchantTradeNo) {
            this.listenToOrderStatus(this.merchantTradeNo);
        }
    },
    methods: {
        listenToOrderStatus(orderId) {
            const db = getFirestore(app);
            const orderRef = doc(db, 'donations', orderId);
            this.unsubscribe = onSnapshot(orderRef, (doc) => {
                const data = doc.data();
                if (data) {
                    this.status = data.status;
                }
            });
            // 5分鐘後停止監聽
            setTimeout(() => {
                this.unsubscribe?.();
            }, 5 * 60 * 1000);
        }
    },
    beforeUnmount() {
        this.unsubscribe?.();
    }
});
;
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
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['basic'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ordered'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ordered'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['card-inputs'];
    __VLS_styleScopedClasses['expiry-inputs'];
    __VLS_styleScopedClasses['expiry-inputs'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment container") }, });
    if (__VLS_ctx.status === 'success') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main-title") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:alearn13994229@gmail.com"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (__VLS_ctx.status === 'failed') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main-title") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (__VLS_ctx.status === 'simulated') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main-title") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (__VLS_ctx.status === 'pending') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui segment") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("main-title") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['main-title'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['main-title'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['main-title'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['main-title'];
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
//# sourceMappingURL=DonateCompleteView.vue.js.map
export default (await import('vue')).defineComponent({
    data() {
        return {
            status: 'pending',
            merchantTradeNo: '',
            pollingInterval: null,
        };
    },
    mounted() {
        this.merchantTradeNo = this.$route.params.merchantTradeNo || '';
        if (this.merchantTradeNo) {
            this.startPolling(this.merchantTradeNo);
        }
    },
    methods: {
        async checkDonationStatus(orderId) {
            try {
                const response = await fetch(`https://members-backend.alearn13994229.workers.dev/check_donation_status/${orderId}`);
                const data = await response.json();
                if (data && data.status) {
                    this.status = data.status;
                }
            }
            catch (error) {
                console.error('檢查捐款狀態時發生錯誤:', error);
            }
        },
        startPolling(orderId) {
            // 立即檢查一次
            this.checkDonationStatus(orderId);
            // 每10秒檢查一次
            this.pollingInterval = setInterval(() => {
                this.checkDonationStatus(orderId);
            }, 10000);
            // 5分鐘後停止輪詢
            setTimeout(() => {
                if (this.pollingInterval) {
                    clearInterval(this.pollingInterval);
                }
            }, 5 * 60 * 1000);
        }
    },
    beforeUnmount() {
        if (this.pollingInterval) {
            clearInterval(this.pollingInterval);
        }
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
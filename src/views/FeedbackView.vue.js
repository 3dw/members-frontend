export default (await import('vue')).defineComponent({
    name: 'FeedbackView',
    data() {
        return {
            formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc59H5Bd4-u3yaQ-N31RqaFCxTZ7WP_QomYSe-G2wSRC0QzDg/viewform?embedded=true',
            iframeHeight: '100vh',
        };
    },
    methods: {
        adjustIframeHeight() {
            this.iframeHeight = `${window.innerHeight}px`;
        },
        scrollToPosition() {
            // 檢查是否為手機版
            if (window.innerWidth <= 767) {
                // 使用 setTimeout 確保在 DOM 更新後執行滾動
                setTimeout(() => {
                    window.scrollTo(0, 640);
                }, 1000);
            }
        },
    },
    mounted() {
        this.adjustIframeHeight();
        window.addEventListener('resize', this.adjustIframeHeight);
        this.scrollToPosition(); // 新增：調用滾動方法
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.adjustIframeHeight);
    },
});
;
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
    __VLS_styleScopedClasses['form-container'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-container ui container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({ ...{ onLoad: (__VLS_ctx.adjustIframeHeight) }, src: ((__VLS_ctx.formUrl)), width: ("100%"), height: ((__VLS_ctx.iframeHeight)), frameborder: ("0"), marginheight: ("0"), marginwidth: ("0"), });
    __VLS_styleScopedClasses['form-container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['container'];
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
//# sourceMappingURL=FeedbackView.vue.js.map
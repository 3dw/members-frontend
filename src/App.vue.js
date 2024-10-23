import { defineComponent } from 'vue';
import InApp from 'detect-inapp'; // 導入InApp以偵測瀏覽器內部環境
import Login from './components/Login.vue';
const inApp = new InApp(window.navigator.userAgent);
// 初始假設為 InApp 庫的偵測結果
const actualInApp = inApp.isInApp;
export default defineComponent({
    name: 'App',
    components: {
        Login
    },
    data() {
        return {
            // 使用修正後的 actualInApp
            isInApp: actualInApp, // 檢測是否在應用內部
            showLogin: true
        };
    },
    methods: {
        toggleLogin() {
            this.showLogin = !this.showLogin;
        }
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Login
        },
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("ui fixed top menu") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("item") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/about"), ...{ class: ("item") }, }));
    const __VLS_8 = __VLS_7({ to: ("/about"), ...{ class: ("item") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("small-spacer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("ui container") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onToggleLogin': {} }, }));
    const __VLS_14 = __VLS_13({ ...{ 'onToggleLogin': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    let __VLS_18;
    const __VLS_19 = {
        onToggleLogin: (__VLS_ctx.toggleLogin)
    };
    let __VLS_15;
    let __VLS_16;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    if (__VLS_ctx.showLogin) {
        const __VLS_20 = __VLS_resolvedLocalAndGlobalComponents.Login;
        /** @type { [typeof __VLS_components.Login, ] } */
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ 'onToggleLogin': {} }, showLogin: ((__VLS_ctx.showLogin)), isInApp: ((false)), }));
        const __VLS_22 = __VLS_21({ ...{ 'onToggleLogin': {} }, showLogin: ((__VLS_ctx.showLogin)), isInApp: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        let __VLS_26;
        const __VLS_27 = {
            onToggleLogin: (__VLS_ctx.toggleLogin)
        };
        let __VLS_23;
        let __VLS_24;
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['top'];
    __VLS_styleScopedClasses['menu'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['small-spacer'];
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
//# sourceMappingURL=App.vue.js.map
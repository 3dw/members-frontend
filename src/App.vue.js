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
            showLogin: false,
            sidebarVisible: false
        };
    },
    methods: {
        toggleLogin() {
            this.showLogin = !this.showLogin;
        },
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['sidebar'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['sidebar'];
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
//# sourceMappingURL=App.vue.js.map
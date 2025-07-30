export default (await import('vue')).defineComponent({
    name: "PrivacyPolicyView",
    props: {
        user: {
            required: false,
            default: () => {
                return {};
            }
        }
    },
    methods: {
        downloadBackup() {
            // Example: Download user data as a JSON file
            const userData = this.user;
            const blob = new Blob([JSON.stringify(userData)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "backup.json";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        loginGoogle(autoredirect, keeploggedin) {
            this.$emit('loginGoogle', autoredirect, keeploggedin);
        },
        toggleLogin() {
            this.$emit('toggleLogin');
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['primary'];
    __VLS_styleScopedClasses['button'];
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
let __VLS_self;
//# sourceMappingURL=PrivacyPolicyView.vue.js.map
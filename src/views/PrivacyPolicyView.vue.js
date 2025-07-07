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
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['primary']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=PrivacyPolicyView.vue.js.map
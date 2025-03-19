import { defineComponent, ref, watch, onMounted } from 'vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import axios from 'axios';
export default defineComponent({
    name: "LoginBox",
    props: {
        isInApp: {
            type: Boolean,
            required: true
        },
        showLogin: {
            type: Boolean,
            required: true
        }
    },
    setup(props, { emit }) {
        const users_email = ref('');
        const user_password = ref('');
        const keeploggedin = ref(false);
        watch(keeploggedin, (newVal) => {
            localStorage.setItem('keeploggedin', JSON.stringify(newVal));
        });
        onMounted(() => {
            const storedValue = localStorage.getItem('keeploggedin');
            if (storedValue !== null) {
                keeploggedin.value = JSON.parse(storedValue);
            }
        });
        const toggleLogin = () => {
            emit('toggleLogin');
        };
        const validateEmail = async (email) => {
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})+$/;
            const re2 = /@alearn.org.tw$/;
            if (re.test(String(email).toLowerCase()) && re2.test(String(email).toLowerCase())) {
                return true;
            }
            try {
                const response = await axios.get(`https://members-backend.alearn13994229.workers.dev/is_member_email/${email}`);
                return response.data.isMember === true;
            }
            catch (error) {
                console.error('Error checking member email:', error);
                return false;
            }
        };
        const registerWithEmail = async () => {
            console.log("users_email:", users_email.value);
            console.log("user_password:", user_password.value);
            console.log('Register clicked');
            if (!users_email.value || !user_password.value) {
                window.alert('請先填寫email和密碼');
                return;
            }
            if (!(await validateEmail(users_email.value))) {
                alert('請使用@aleran.org.tw網域的Email，或是會員名冊上有的Email');
                return;
            }
            if (!user_password.value || typeof user_password.value !== 'string') {
                alert('密碼請至少包含一個英文字，請重新輸入');
                return;
            }
            emit('registerWithEmail', users_email.value, user_password.value, keeploggedin.value);
        };
        const loginWithEmail = () => {
            let autoredirect = true;
            console.log('Login clicked');
            const path = window.location.pathname;
            if (!validateEmail(users_email.value)) {
                alert('請用@alearn.org.tw，或是會員名冊上有的Email登入');
                return;
            }
            if (path === '/friends' || path === '/maps' || path === '/privacy-policy' || path.startsWith('/flag') || path.startsWith('/group')) {
                autoredirect = false;
            }
            if (!user_password.value || typeof user_password.value !== 'string') {
                alert('密碼無效，請重新輸入');
                return;
            }
            emit('loginWithEmail', autoredirect, users_email.value, user_password.value, keeploggedin.value);
        };
        const resetPassword = () => {
            console.log("Reset password function triggered");
            console.log("Email for reset:", users_email.value);
            if (!validateEmail(users_email.value)) {
                alert('請先輸入有效的電子郵件地址');
                return;
            }
            const auth = getAuth();
            console.log("Firebase auth object:", auth);
            sendPasswordResetEmail(auth, users_email.value)
                .then(() => {
                alert('密碼重置郵件已發送，請檢查您的電子郵件信箱');
                console.log("Password reset email sent successfully");
            })
                .catch((error) => {
                console.error("密碼重置郵件發送失敗：", error.code, error.message);
                switch (error.code) {
                    case 'auth/invalid-email':
                        alert('無效的電子郵件地址');
                        break;
                    case 'auth/user-not-found':
                        alert('找不到該電子郵件對應的帳號');
                        break;
                    default:
                        alert('密碼重置郵件發送失敗，請稍後再試');
                }
            });
        };
        return {
            users_email,
            user_password,
            keeploggedin,
            toggleLogin,
            registerWithEmail,
            loginWithEmail,
            resetPassword,
        };
    }
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['large'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
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
//# sourceMappingURL=Login.vue.js.map
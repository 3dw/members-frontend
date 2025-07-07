import { defineComponent } from 'vue';
import mix from '../mixins/mix.ts';
export default defineComponent({
    name: 'NameCard',
    mixins: [mix],
    props: {
        h: {
            type: Object,
            required: true,
        },
        mySearch: {
            type: String,
            required: false,
            default: () => {
                return '';
            }
        },
        full: {
            type: Boolean,
            required: false,
            default: () => {
                return false;
            }
        },
        uid: {
            type: String,
            required: false,
            default: () => {
                return '';
            }
        },
        clickable: {
            type: Boolean,
            required: false,
            default: () => {
                return true;
            }
        }
    },
    emits: [
        'locate',
        'loginGoogle',
        'toggleLogin'
    ],
    data() {
        return {
            thin: window.innerWidth < 720
        };
    },
    methods: {
        isEmail(s) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(s);
        },
        goto(h) {
            // 檢查網址是否以 'http://' 或 'https://' 開頭
            if (!h.startsWith('http://') && !h.startsWith('https://')) {
                // 若沒有，則在前面加上 'https://'
                h = 'https://' + h;
            }
            // 使用處理後的網址打開新窗口
            window.open(h);
        },
        locate: function (h, bool) {
            console.log(h);
            this.$emit('locate', h, bool);
        },
        gotoMail(email) {
            window.location.href = `mailto:${email}`;
        },
        loginGoogle(autoredirect, keeploggedin) {
            this.$emit('loginGoogle', autoredirect, keeploggedin);
        },
        toggleLogin() {
            this.$emit('toggleLogin');
        },
        copyFlagURL(uid) {
            if (!document.hasFocus()) {
                alert("Document does not have focus, cannot copy link.");
                return;
            }
            const copyText = 'https://we.alearn.org.tw/flag/' + uid;
            navigator.clipboard.writeText(copyText)
                .then(() => {
                window.alert("已複製該名片");
            })
                .catch(err => {
                console.error('無法複製該名片', err);
            });
            this.$forceUpdate();
        },
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['green']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['red']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['purple']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['blue']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['teal']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=Card.vue.js.map
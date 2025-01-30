import { defineComponent, ref, onMounted } from 'vue';
import { projectsRef, supervisorsRef } from '@/firebase';
import { onValue } from 'firebase/database';
import axios from 'axios';
export default defineComponent({
    name: 'HomeView',
    props: {
        isLogin: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const isLoading = ref(false);
        const projects = ref([]);
        const supervisors = ref([]);
        const arr = new Array();
        const visibleEmails = ref(arr);
        const message = ref('');
        const result = ref('');
        onMounted(() => {
            // 檢查網址是否包含 #donate-online
            console.log(window.location.hash);
            if (window.location.hash === '#donate-online') {
                // 使用 setTimeout 確保 DOM 已完全載入
                setTimeout(() => {
                    const element = document.getElementById('donate-online');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
            onValue(projectsRef, (snapshot) => {
                const projectsData = snapshot.val();
                projects.value = Object.values(projectsData);
            }, (error) => {
                console.error('讀取專案資料時出錯', error);
            });
            onValue(supervisorsRef, (snapshot) => {
                const supervisorsData = snapshot.val();
                supervisors.value = Object.values(supervisorsData);
            }, (error) => {
                console.error('讀取理監事資料時出錯', error);
            });
        });
        return {
            isLoading,
            projects,
            supervisors,
            visibleEmails,
            message,
            result,
        };
    },
    methods: {
        toggleLogin() {
            this.$emit('toggleLogin');
        },
        toggleEmail(email) {
            this.visibleEmails.includes(email) ? this.visibleEmails.splice(this.visibleEmails.indexOf(email), 1) : this.visibleEmails.push(email);
        },
        sendMessage() {
            this.isLoading = true;
            console.log(this.message);
            if (!this.message.endsWith('？')) {
                this.message += '？';
            }
            axios.get('https://members-backend.alearn13994229.workers.dev/ai/' + this.message, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                console.log(response);
                this.result = response.data;
                this.isLoading = false;
            });
        },
        parseResult(result) {
            if (result === '。') {
                return '請說得詳細一點';
            }
            return result;
        },
        sendFeedback(feedback) {
            console.log(feedback);
            if (feedback === 'good') {
                console.log('good');
                window.alert('感謝您的回饋！');
            }
            else if (feedback === 'bad') {
                console.log('bad');
                if (window.confirm('請告訴我們哪裡做得不好，我們會努力改進！')) {
                    this.$router.push('/feedback');
                }
                else {
                    window.alert('感謝您的回饋！');
                }
            }
        }
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
    __VLS_styleScopedClasses['text-underline'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['input'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['primary'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['primary'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['card'];
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
//# sourceMappingURL=HomeView.vue.js.map
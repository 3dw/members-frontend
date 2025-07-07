import { onMounted, ref } from 'vue';
import { projectsRef, supervisorsRef } from '@/firebase';
import { onValue } from 'firebase/database';
export default (await import('vue')).defineComponent({
    setup() {
        const data = ref([]);
        const projects = ref([]);
        const supervisors = ref([]);
        const arr = new Array();
        const visibleEmails = ref(arr);
        const roleOrder = {
            '理事長': 1,
            '常務理事': 2,
            '常務監事': 3,
            '理事': 4,
            '監事': 5,
            '候補理事': 6
        };
        onMounted(() => {
            onValue(projectsRef, (snapshot) => {
                const projectsData = snapshot.val();
                projects.value = Object.values(projectsData);
            }, (error) => {
                console.error('讀取專案資料時出錯', error);
            });
            onValue(supervisorsRef, (snapshot) => {
                const supervisorsData = snapshot.val();
                supervisors.value = Object.values(supervisorsData);
                supervisors.value.sort((a, b) => (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99));
            }, (error) => {
                console.error('讀取理監事資料時出錯', error);
            });
        });
        return {
            data,
            projects,
            supervisors,
            visibleEmails,
        };
    },
    methods: {
        toggleLogin() {
            this.$emit('toggleLogin');
        },
        toggleEmail(email) {
            if (this.visibleEmails.includes(email)) {
                this.visibleEmails.splice(this.visibleEmails.indexOf(email), 1);
            }
            else {
                this.visibleEmails.push(email);
            }
        },
    },
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['right-bordered']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['list']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=AboutView.vue.js.map
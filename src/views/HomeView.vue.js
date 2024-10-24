import { defineComponent, ref, onMounted } from 'vue';
import { projectsRef } from '@/firebase';
import { onValue } from 'firebase/database';
export default defineComponent({
    name: 'HomeView',
    props: {
        isLogin: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const projects = ref([]);
        onMounted(() => {
            onValue(projectsRef, (snapshot) => {
                const projectsData = snapshot.val();
                projects.value = Object.values(projectsData);
            }, (error) => {
                console.error('讀取專案資料時出錯', error);
            });
        });
        return {
            projects,
        };
    },
    methods: {
        toggleLogin() {
            this.$emit('toggleLogin');
        },
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
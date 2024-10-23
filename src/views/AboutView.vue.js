import { onMounted, ref } from 'vue';
import { projectsRef } from '@/firebase';
import { onValue } from 'firebase/database';
export default (await import('vue')).defineComponent({
    setup() {
        const data = ref([]);
        onMounted(() => {
            onValue(projectsRef, (snapshot) => {
                const projects = snapshot.val();
                data.value = Object.values(projects);
            }, (error) => {
                console.error('讀取資料時出錯', error);
            });
        });
        return {
            data
        };
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
//# sourceMappingURL=AboutView.vue.js.map
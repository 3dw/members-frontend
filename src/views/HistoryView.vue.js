import { ref } from 'vue';
import Timeline from 'primevue/timeline';
import { historyData } from '../data/history';
export default (await import('vue')).defineComponent({
    components: {
        Timeline
    },
    props: {},
    setup() {
        const data = ref(historyData);
        return {
            data,
        };
    },
    methods: {},
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Timeline
        },
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
//# sourceMappingURL=HistoryView.vue.js.map
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
}); /* PartiallyEnd: #3632/script.vue */
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
    __VLS_styleScopedClasses['timeline-content'];
    __VLS_styleScopedClasses['timeline-content'];
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
//# sourceMappingURL=HistoryView.vue.js.map
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
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Timeline
};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
/** @type {__VLS_StyleScopedClasses['timeline-content']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=HistoryView.vue.js.map
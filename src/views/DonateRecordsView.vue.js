import { ref, computed } from 'vue';
import { donate_records } from '../data/donate_records';
export default (await import('vue')).defineComponent({
    setup() {
        const records = ref(donate_records);
        const searchQuery = ref('');
        const filteredRecords = computed(() => {
            const parseDateTime = (datetime) => {
                const [year, month] = datetime.split('年').map(Number);
                return new Date(year, month - 1, 1);
            };
            if (!searchQuery.value) {
                return records.value.slice().sort((a, b) => new Date(parseDateTime(b.datetime)).getTime() - new Date(parseDateTime(a.datetime)).getTime());
            }
            const query = searchQuery.value;
            console.log(query);
            return records.value.filter(record => record.name.includes(query) ||
                record.project.includes(query) ||
                record.datetime.includes(query)).slice().sort((a, b) => new Date(parseDateTime(b.datetime)).getTime() - new Date(parseDateTime(a.datetime)).getTime());
        });
        return {
            records,
            searchQuery,
            filteredRecords
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['cards'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['progress'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['tiny'];
    __VLS_styleScopedClasses['statistics'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['red'];
    __VLS_styleScopedClasses['star'];
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
//# sourceMappingURL=DonateRecordsView.vue.js.map
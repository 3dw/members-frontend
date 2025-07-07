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
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['cards']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['button']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['tiny']} */ ;
/** @type {__VLS_StyleScopedClasses['statistics']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['red']} */ ;
/** @type {__VLS_StyleScopedClasses['star']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=DonateRecordsView.vue.js.map
import { ref } from 'vue';
export default (await import('vue')).defineComponent({
    props: {
        users: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const selectedYear = ref(113);
        const url = ref('https://docs.google.com/document/d/1R1YOn3JL4J74dk1V8diAWEZLpuktN3bP_zwVEwKY_r8/preview');
        const urls = ref([
            {
                year: 108,
                url: 'https://docs.google.com/document/d/15sUosH-_72LF2hyMab21oI0tytqPj7Ns2Yeq63-TlNs/preview'
            },
            {
                year: 109,
                url: 'https://docs.google.com/document/d/1ZqjZjXUghxWA0N7ro5Jeh3A1xrPJZ1qdCJQKGk4IVAA/preview'
            },
            {
                year: 110,
                url: 'https://docs.google.com/document/d/1n4TR9eqVjlTB0CNXLVB8hP2C92o3zvYhCrUR0S65O5s/preview'
            },
            {
                year: 111,
                url: 'https://docs.google.com/document/d/1__5U_mGQkgvGwuWYJDODgyGSbCTIHg0HIXcHPXrg6rc/preview'
            },
            {
                year: 112,
                url: 'https://docs.google.com/document/d/11UgjAoDJhT1Hb28Zw7v-YrZUXMZUexNQZD2GJJQJTd8/preview'
            },
            {
                year: 113,
                url: 'https://docs.google.com/document/d/1R1YOn3JL4J74dk1V8diAWEZLpuktN3bP_zwVEwKY_r8/preview'
            }
        ]);
        const changeReport = () => {
            const selected = urls.value.find(item => item.year === selectedYear.value);
            if (selected) {
                url.value = selected.url;
            }
        };
        return {
            url,
            urls,
            selectedYear,
            changeReport
        };
    },
    methods: {},
}); /* PartiallyEnd: #3632/script.vue */
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
//# sourceMappingURL=YearlyReportView.vue.js.map
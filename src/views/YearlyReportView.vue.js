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
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=YearlyReportView.vue.js.map
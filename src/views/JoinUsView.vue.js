import { onMounted, ref } from 'vue';
import { changelogsRef } from '@/firebase';
import { onValue } from 'firebase/database';
export default (await import('vue')).defineComponent({
    props: {
        users: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const data = ref([]);
        onMounted(() => {
            onValue(changelogsRef, (snapshot) => {
                const rawData = snapshot.val();
                console.log(rawData);
                data.value = Object.values(rawData);
            }, (error) => {
                console.error('讀取變更紀錄資料時出錯', error);
            });
        });
        return {
            data,
        };
    },
    methods: {},
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['responsive-header']} */ ;
/** @type {__VLS_StyleScopedClasses['responsive-segment']} */ ;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=JoinUsView.vue.js.map
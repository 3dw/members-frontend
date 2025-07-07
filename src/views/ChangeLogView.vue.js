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
    computed: {
        reversedData() {
            return this.data.slice().reverse();
        },
    },
    methods: {
        parseDate(date) {
            return new Date(date).toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit', day: '2-digit' });
        },
    },
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=ChangeLogView.vue.js.map
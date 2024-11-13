import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
export default defineComponent({
    name: 'EditFaqView',
    props: {
        uid: {
            type: String,
            required: true
        }
    },
    setup() {
        const route = useRoute();
        const faqItem = ref({
            id: '',
            category: '',
            question: '',
            answer: ''
        });
        onMounted(async () => {
            try {
                const id = route.params.id;
                const response = await axios.get(`https://members-backend.alearn13994229.workers.dev/api/Faq`);
                const items = response.data;
                console.log(id);
                console.log(items);
                const item = items.find((item) => item.id === parseInt(id));
                if (item) {
                    faqItem.value = item;
                }
            }
            catch (error) {
                console.error('獲取FAQ資料失敗:', error);
            }
        });
        return {
            faqItem
        };
    },
    methods: {
        toggleLogin() {
            this.$emit('toggleLogin');
        },
        parseAnswer(answer) {
            console.log(answer);
            return answer.replace(/\\n/g, '\n');
        },
        async updateFaq() {
            try {
                await axios.post(`https://members-backend.alearn13994229.workers.dev/update/faq/${this.faqItem.id}`, { content: this.parseAnswer(this.faqItem.answer) });
                alert('更新成功');
                this.goBack();
            }
            catch (error) {
                console.error('更新FAQ失敗:', error);
                alert('更新失敗');
            }
        },
        goBack() {
            this.$router.push('/faq');
        }
    }
});
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
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
//# sourceMappingURL=EditFaqView.vue.js.map
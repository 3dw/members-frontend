import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { changelogsRef } from '../firebase';
import { push } from 'firebase/database';
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
        const updating = ref(false);
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
            faqItem,
            updating
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
            this.updating = true;
            try {
                await axios.post(`https://members-backend.alearn13994229.workers.dev/update/faq/${this.faqItem.id}`, { content: this.parseAnswer(this.faqItem.answer) }).then(() => {
                    alert('更新成功');
                })
                    .catch((error) => {
                    console.error('更新FAQ失敗:', error);
                    alert('更新失敗');
                    return;
                });
            }
            catch (error) {
                console.error('更新FAQ失敗:', error);
                alert('更新失敗');
                return;
            }
            const changelog = {
                date: new Date().toISOString(),
                uid: this.uid,
                faqId: Number(this.faqItem.id),
                text: '問題：' + this.faqItem.question + '己修改回答為：' + this.faqItem.answer
            };
            push(changelogsRef, changelog).then(() => {
                console.log('更新成功');
                this.goBack();
            });
        },
        goBack() {
            this.$router.push('/faq');
        }
    }
}); /* PartiallyEnd: #3632/script.vue */
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
    __VLS_styleScopedClasses['faq-container'];
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
//# sourceMappingURL=EditFaqView.vue.js.map
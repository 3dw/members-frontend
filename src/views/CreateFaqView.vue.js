import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { changelogsRef } from '@/firebase';
import { push } from 'firebase/database';
export default defineComponent({
    name: 'CreateFaqView',
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
        const uploading = ref(false);
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
            uploading
        };
    },
    methods: {
        toggleLogin() {
            this.$emit('toggleLogin');
        },
        async createFaq() {
            if (this.faqItem.category === '') {
                alert('請選擇類別');
                return;
            }
            if (this.faqItem.question === '') {
                alert('請輸入問題');
                return;
            }
            if (this.faqItem.answer === '') {
                alert('請輸入回答');
                return;
            }
            try {
                this.uploading = true;
                await axios.post(`https://members-backend.alearn13994229.workers.dev/create/faq`, {
                    category: this.faqItem.category,
                    question: this.faqItem.question,
                    answer: this.faqItem.answer,
                    links: '[]'
                }).then(() => {
                    this.uploading = false;
                    alert('上傳成功');
                }).catch((error) => {
                    this.uploading = false;
                    console.error('新增FAQ失敗:', error);
                    alert('上傳失敗');
                    return;
                });
            }
            catch (error) {
                this.uploading = false;
                console.error('新增FAQ失敗:', error);
                alert('上傳失敗');
                return;
            }
            const newChangelog = {
                date: new Date().toISOString(),
                uid: this.uid,
                text: `新增FAQ：${this.faqItem.question}`,
                faqId: this.faqItem.id
            };
            push(changelogsRef, newChangelog).then(() => {
                console.log('新增成功');
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
//# sourceMappingURL=CreateFaqView.vue.js.map
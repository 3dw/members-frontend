import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
export default defineComponent({
    name: 'FaqView',
    setup() {
        const faqItems = ref([]);
        onMounted(async () => {
            try {
                const response = await axios.get('https://members-backend.alearn13994229.workers.dev/api/Faq');
                faqItems.value = response.data;
            }
            catch (error) {
                console.error('獲取FAQ資料失敗:', error);
            }
        });
        return {
            faqItems
        };
    },
    methods: {
        fetchFaq() {
            this.faqItems = [];
            axios.get('https://members-backend.alearn13994229.workers.dev/api/Faq').then((response) => {
                this.faqItems = response.data;
            }).catch((error) => {
                console.error('獲取FAQ資料失敗:', error);
            });
        },
        parseLinks(links) {
            console.log(links);
            return JSON.parse(links);
        },
        parseAnswer(answer) {
            console.log(answer);
            return answer.replace(/\\n/g, '\n');
        },
        editFaq(id) {
            console.log(id);
            this.$router.push(`/edit_faq/${id}`);
        },
        deleteFaq(id) {
            console.log(id);
        },
        deleteLink(id, link) {
            console.log(id, link);
            if (confirm('確定要刪除此連結嗎？')) {
                console.log('刪除');
                axios.delete(`https://members-backend.alearn13994229.workers.dev/delete/faq/${id}/link/${link}`).then(() => {
                    window.alert('刪除成功');
                    console.log('刪除成功');
                    this.fetchFaq();
                }).catch((error) => {
                    window.alert('刪除失敗');
                    console.error('刪除失敗:', error);
                });
            }
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
//# sourceMappingURL=FaqView.vue.js.map
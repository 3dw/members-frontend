import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
export default defineComponent({
    name: 'FaqView',
    props: {
        uid: {
            type: String,
            required: true
        }
    },
    setup() {
        // 修改 ref 的型別定義
        const faqItems = ref([]);
        const categories = ref(['全部', '起步', '計畫', '支持', '資源', '其他']);
        const searchKeyword = ref('');
        const selectedCategory = ref('全部');
        const newLinkText = ref('');
        const newLinkHref = ref('');
        const showAddLinkId = ref('');
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
            faqItems,
            categories,
            searchKeyword,
            selectedCategory,
            newLinkText,
            newLinkHref,
            showAddLinkId
        };
    },
    computed: {
        sortedFaqItems() {
            return this.faqItems.slice().sort((a, b) => this.categories.indexOf(a.category) - this.categories.indexOf(b.category));
        },
        filteredAndSortedFaqItems() {
            const keyword = this.searchKeyword.toLowerCase().trim();
            let filtered = this.faqItems;
            // 先依類別過濾
            if (this.selectedCategory !== '全部') {
                filtered = filtered.filter(item => item.category === this.selectedCategory);
            }
            // 再依關鍵字過濾
            if (keyword) {
                filtered = filtered.filter(item => item.category.toLowerCase().includes(keyword) ||
                    item.question.toLowerCase().includes(keyword) ||
                    item.answer.toLowerCase().includes(keyword));
            }
            // 最後依類別排序
            return filtered.sort((a, b) => this.categories.indexOf(a.category) - this.categories.indexOf(b.category));
        }
    },
    methods: {
        toggleLogin() {
            this.$emit('toggleLogin');
        },
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
            return JSON.parse(links).filter(link => link != null && link.t !== '');
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
        },
        addLink(id) {
            console.log(id);
            const newLink = {
                t: this.newLinkText,
                h: this.newLinkHref
            };
            console.log(newLink);
            axios.post(`https://members-backend.alearn13994229.workers.dev/insert/faq/${id}/link`, newLink).then(() => {
                window.alert('新增成功');
                this.newLinkText = '';
                this.newLinkHref = '';
                this.showAddLinkId = '';
                console.log('新增成功');
                this.fetchFaq();
            }).catch((error) => {
                window.alert('新增失敗');
                console.error('新增失敗:', error);
            });
        },
        escapeHtml(text) {
            return text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        },
        highlightText(text) {
            if (!this.searchKeyword.trim())
                return this.escapeHtml(text);
            const escapedText = this.escapeHtml(text);
            const keyword = this.escapeHtml(this.searchKeyword.toLowerCase().trim());
            const regex = new RegExp(`(${keyword})`, 'gi');
            return escapedText.replace(regex, '<span class="highlight">$1</span>');
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
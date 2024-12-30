import handbook from '@/assets/books/handbook.png';
import talks6 from '@/assets/books/6talks.png';
import change from '@/assets/books/change.png';
import rights from '@/assets/books/rights.png';
import programIsland from '@/assets/books/program_island.jpeg';
import playMath from '@/assets/books/play_math_with_child.jpg';
export default (await import('vue')).defineComponent({
    setup() {
        const books = [
            {
                title: '自主學習手冊',
                price: '100元',
                note: '（已無庫存）',
                coverImage: handbook
            },
            {
                title: '自主學習理念六講',
                price: '100元',
                coverImage: talks6
            },
            {
                title: '異動中的永恆',
                price: '150元',
                coverImage: change
            },
            {
                title: '校園青少年人權手冊',
                price: '150元',
                coverImage: rights
            },
        ];
        const otherBooks = [
            {
                title: '普格碼島的法師：歡樂自學寫程式',
                author: '唐宗浩',
                promoPrice: '340元',
                originalPrice: '450元',
                coverImage: programIsland
            },
            {
                title: '跟孩子一起玩數學',
                author: '唐宗浩',
                promoPrice: '210元',
                originalPrice: '280元',
                coverImage: playMath
            }
        ];
        return {
            books,
            otherBooks
        };
    }
});
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
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['image'];
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
//# sourceMappingURL=BooksView.vue.js.map
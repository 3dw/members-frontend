import khanAcademyLogo from '@/assets/friendly_sites/可汗學院.png';
import wikiLogo from '@/assets/friendly_sites/維基百科.png';
import freeMathLogo from '@/assets/friendly_sites/自由數學.png';
import freeEnglishLogo from '@/assets/friendly_sites/自主學英文.png';
export default (await import('vue')).defineComponent({
    name: 'FriendSitesView',
    data() {
        return {
            sections: [
                {
                    title: '實驗教育',
                    icon: 'graduation cap icon',
                    sites: [
                        { name: '保障教育選擇權聯盟', url: 'https://homeschool.tw/', image: null },
                        { name: '星河計畫-自學生經驗匯流', url: 'https://galacticproject.notion.site/d7477db76ecd4ff3b453a39ba21d97ef', image: null },
                        { name: '島島阿學', url: 'https://www.daoedu.tw/', image: null },
                        { name: '零時小學校', url: 'https://sch001.g0v.tw/', image: null }
                    ]
                },
                {
                    title: '公益學習平台',
                    icon: 'book icon',
                    sites: [
                        { name: '自由數學', url: 'https://math.alearn.org.tw/', image: freeMathLogo },
                        { name: '自主學英文', url: 'https://en.alearn.org.tw/', image: freeEnglishLogo },
                        { name: '維基百科', url: 'https://zh.wikipedia.org/', image: wikiLogo },
                        { name: '可汗學院 Khan Academy', url: 'https://www.khanacademy.org/', image: khanAcademyLogo }
                    ]
                }
            ]
        };
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
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
//# sourceMappingURL=FriendSitesView.vue.js.map
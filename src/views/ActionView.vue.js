export default (await import('vue')).defineComponent({
    setup() {
        const url = 'https://www.alearn.org.tw/action';
        const title = '請協助捍衛每個孩子選擇自學的權利';
        const description = '只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育';
        const shareToFB = () => {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        };
        const shareToTwitter = () => {
            window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        };
        const shareToLine = () => {
            window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`);
        };
        const legislators = [
            {
                name: '民主進步黨團',
                party: '民進黨',
                fax: '02-2358-5797'
            },
            {
                name: '中國國民黨團',
                party: '國民黨',
                fax: '02-2358-5681, 02-2358-5692'
            },
            {
                name: '范雲',
                tel: '02-2358-6056、0988-807139',
                fax: '02-2358-6060'
            },
            {
                name: '張其祿',
                tel: '02-2358-6391',
                fax: '02-2358-6395'
            },
            {
                name: '陳培瑜',
                tel: '02-2358-8221',
                fax: '02-2358-8225'
            },
            {
                name: '張廖萬堅',
                tel: '02-2358-8282',
                fax: '02-2358-8285'
            },
            {
                name: '吳思瑤',
                tel: '02-2358-8131',
                fax: '02-2358-8135'
            },
            {
                name: '林宜瑾',
                tel: '02-2358-8316',
                fax: '02-2358-8320'
            },
            {
                name: '高金素梅',
                tel: '02-2358-6051',
                fax: '02-2358-6055'
            },
            {
                name: '陳秀寶',
                tel: '02-2358-6881',
                fax: '02-2358-6140'
            },
            {
                name: '黃國書',
                tel: '02-2358-6846',
                fax: '02-2358-6850'
            },
            {
                name: '萬美玲',
                tel: '02-2358-6156',
                fax: '02-2358-6160',
                email: 'idea.power@msa.hinet.net'
            },
            {
                name: '鄭正鈐',
                tel: '02-2358-8121',
                fax: '02-2358-8125'
            },
            {
                name: '鄭麗文',
                tel: '02-2358-6866',
                fax: '02-2358-6870'
            },
            {
                name: '陳靜敏',
                tel: '02-2358-8181',
                fax: '02-2358-8185',
                email: 'ly11208b@ly.gov.tw'
            },
            {
                name: '王婉諭',
                tel: '02-2358-6376',
                fax: '02-2358-6380',
                email: 'wanyu.claire@gmail.com'
            }
        ];
        return {
            legislators,
            shareToFB,
            shareToTwitter,
            shareToLine
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['cards'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['button'];
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
//# sourceMappingURL=ActionView.vue.js.map
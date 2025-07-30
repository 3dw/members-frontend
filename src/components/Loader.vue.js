import { defineComponent } from 'vue';
// import { hints } from '../data/hints';
export default defineComponent({
    name: 'LoaderComponent',
    data() {
        return {
            // hints: hints,
            myHint: '地圖介面讓您能夠根據地理位置就近尋找夥伴。'
        };
    },
    mounted() {
        // this.myHint = this.hints[Math.floor(Math.random()*this.hints.length)]
    },
    methods: {}
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
//# sourceMappingURL=Loader.vue.js.map
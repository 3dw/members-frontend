import { defineComponent } from 'vue';
import mix from '../mixins/mix.ts';
import Card from '../components/Card.vue';
import Loader from '../components/Loader.vue';
export default defineComponent({
    name: 'FlagView',
    components: { Card, Loader },
    mixins: [mix],
    props: {
        uid: {
            type: String,
            required: false,
            default: () => {
                return '';
            }
        },
        users: {
            type: Object,
            required: false,
            default: () => {
                return {};
            },
        },
        book: {
            type: Array,
            required: false,
            default: () => {
                return [];
            },
        },
        mySearch: {
            type: String,
            required: false,
            default: () => {
                return '';
            },
        },
    },
    computed: {
        myT() {
            if (Object.keys(this.users).length > 0 && this.$route.params.uid) {
                return this.users[this.$route.params.uid].name;
            }
            return [{ name: '旗幟' }][0].name;
        },
    },
    methods: {
        locate(h, bool) {
            this.$emit('locate', h, bool);
        },
        addBook(uid) {
            console.log(uid);
            this.$emit('addBook', uid);
        },
        removeBook(index) {
            console.log(index);
            this.$emit('removeBook', index);
        },
        loginGoogle(autoredirect, keeploggedin) {
            this.$emit('loginGoogle', autoredirect, keeploggedin);
        },
        toggleLogin() {
            this.$emit('toggleLogin');
        }
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
const __VLS_componentsOption = { Card, Loader };
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['ui']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=FlagView.vue.js.map
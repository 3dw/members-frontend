import { defineComponent, ref, computed } from 'vue';
import Loader from '@/components/Loader.vue';
export default defineComponent({
    name: 'MatchTimeView',
    components: {
        Loader,
    },
    props: {
        uid: {
            type: String,
            required: false,
            default: '',
        },
        users: {
            type: Object,
            required: false,
            default: () => ({}),
        },
    },
    setup(props) {
        const search = ref('');
        const toggleLogin = () => {
            window.location.href = '/login';
        };
        const toList = (users) => {
            return Object.values(users);
        };
        const highlightText = (text, searchTerm) => {
            if (!searchTerm || !text)
                return text;
            // 先將 HTML 特殊字符轉義
            const escapedText = text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            return escapedText.replace(regex, '<span class="highlight">$1</span>');
        };
        const filteredUsers = computed(() => {
            return toList(props.users).filter((user) => {
                return (user.name.includes(search.value) ||
                    (user.ask && user.ask.includes(search.value)) ||
                    (user.share && user.share.includes(search.value)) ||
                    (user.connect_me && user.connect_me.includes(search.value)) ||
                    (user.learner_habit && user.learner_habit.includes(search.value)) ||
                    (user.note && user.note.includes(search.value)));
            }).slice().sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        });
        return {
            search,
            toggleLogin,
            toList,
            filteredUsers,
            highlightText,
        };
    },
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Loader,
};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['note-cell']} */ ;
/** @type {__VLS_StyleScopedClasses['normal-cell']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=MatchTimeView.vue.js.map
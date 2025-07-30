import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
export default defineComponent({
    name: 'GithubEmbededView',
    setup() {
        const pinnedRepos = ref([
            {
                name: 'freemath',
                description: '適合自學親子使用的自由數學教材教法，以全中文編輯',
                url: 'https://github.com/3dw/freemath',
                stars: 0,
                forks: 0,
                language: 'Rich Text Format'
            },
            {
                name: 'zh-en',
                description: '以AI協助中英對照的學習資源網',
                url: 'https://github.com/3dw/zh-en',
                stars: 0,
                forks: 0,
                language: 'Vue'
            },
            {
                name: 'auto20-next',
                description: '自學2.0是一個公益尋友平台，旨在透過地理位置、個人興趣及專長來協助用戶尋找朋友。平台的核心功能「互助旗」提供公開的自我介紹，讓人們在見面前能初步了解和認識對方。',
                url: 'https://github.com/3dw/auto20-next',
                stars: 0,
                forks: 0,
                language: 'Vue'
            },
            {
                name: 'start-learn',
                description: '新版自學入口頁(編輯中)',
                url: 'https://github.com/3dw/start-learn',
                stars: 0,
                forks: 0,
                language: 'Vue'
            },
            {
                name: 'diverse',
                description: '多元學習風格自我測驗',
                url: 'https://github.com/3dw/diverse',
                stars: 0,
                forks: 0,
                language: 'Vue'
            }
        ]);
        const fetchRepoData = async () => {
            try {
                for (const repo of pinnedRepos.value) {
                    const response = await axios.get(`https://api.github.com/repos/3dw/${repo.name}`);
                    console.log('已獲取', repo.name, '的資料');
                    repo.stars = response.data.stargazers_count;
                    repo.forks = response.data.forks_count;
                    repo.language = response.data.language || repo.language;
                    repo.description = response.data.description || repo.description;
                }
            }
            catch (error) {
                console.error('獲取 GitHub 資料時出錯:', error);
            }
        };
        onMounted(() => {
            fetchRepoData();
        });
        return {
            pinnedRepos
        };
    },
    metaInfo: {
        title: "GitHub 開源組織"
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
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['items'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['items'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['items'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['items'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['items'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['meta'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['items'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['description'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['list'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['github-container'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['segment'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['ui'];
    __VLS_styleScopedClasses['items'];
    __VLS_styleScopedClasses['item'];
    __VLS_styleScopedClasses['header'];
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
//# sourceMappingURL=GithubEmbededView.vue.js.map
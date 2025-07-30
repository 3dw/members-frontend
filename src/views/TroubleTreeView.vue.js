import { ref, computed, onMounted, onUnmounted, defineComponent, nextTick } from 'vue';
import { database } from '@/firebase';
import { ref as dbRef, push, set, update, onValue } from 'firebase/database';
export default defineComponent({
    name: 'TroubleTreeView',
    props: {
        users: {
            type: Object,
            required: false,
            default: () => []
        },
        uid: {
            type: String,
            required: false,
            default: '匿名'
        }
    },
    setup(props) {
        // 定義樹洞分類
        const categoryMap = {
            'personal': '個人成長',
            'relationship': '人際關係',
            'career': '工作職涯',
            'family': '家庭困擾',
            'health': '身心健康'
        };
        // 定義分類顏色
        const getCategoryColor = (category) => {
            const colorMap = {
                'personal': '#2e7d32',
                'relationship': '#1b5e20',
                'career': '#388e3c',
                'family': '#43a047',
                'health': '#4caf50'
            };
            return colorMap[category] || '#2e7d32';
        };
        const troubles = ref([]);
        const replies = ref([]);
        const selectedFilter = ref(null);
        const selectedTroubleId = ref(null);
        const selectedTrouble = computed(() => {
            return troubles.value.find(trouble => trouble.id === selectedTroubleId.value);
        });
        const newTrouble = ref({
            content: '',
            category: 'personal'
        });
        const newReply = ref({
            content: '',
            troubleId: ''
        });
        // 錯誤提示
        const errorMessage = ref('');
        const replyError = ref('');
        const isLoading = ref(false);
        // Tree Canvas
        const treeCanvas = ref(null);
        // 過濾煩惱
        const filteredTroubles = computed(() => {
            if (!selectedFilter.value)
                return troubles.value;
            return troubles.value.filter(trouble => trouble.category === selectedFilter.value);
        });
        // 格式化日期
        const formatDate = (timestamp) => {
            const date = new Date(timestamp);
            const now = new Date();
            const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
            if (diffDays === 0) {
                return '今天 ' + date.toLocaleTimeString('zh-TW', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            }
            else if (diffDays === 1) {
                return '昨天 ' + date.toLocaleTimeString('zh-TW', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            }
            else if (diffDays < 7) {
                return `${diffDays}天前`;
            }
            else {
                return date.toLocaleDateString('zh-TW', {
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
            }
        };
        // 繪製大樹和樹洞
        const drawTree = () => {
            if (!treeCanvas.value)
                return;
            const canvas = treeCanvas.value;
            const ctx = canvas.getContext('2d');
            if (!ctx)
                return;
            // 設置 canvas 尺寸
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // 背景
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#e8f5e9');
            gradient.addColorStop(1, '#c8e6c9');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            // 畫樹幹
            const trunkWidth = Math.min(canvas.width * 0.18, 180);
            const trunkHeight = canvas.height * 0.65;
            const trunkX = canvas.width - trunkWidth - 20;
            const trunkY = canvas.height - trunkHeight - 20;
            // 樹幹漸變
            const trunkGradient = ctx.createLinearGradient(trunkX, trunkY, trunkX + trunkWidth, trunkY);
            trunkGradient.addColorStop(0, '#5D4037');
            trunkGradient.addColorStop(0.6, '#795548');
            trunkGradient.addColorStop(1, '#6D4C41');
            ctx.fillStyle = trunkGradient;
            ctx.beginPath();
            ctx.moveTo(trunkX, trunkY + trunkHeight);
            ctx.lineTo(trunkX + trunkWidth * 0.8, trunkY + trunkHeight);
            ctx.lineTo(trunkX + trunkWidth, trunkY + trunkHeight * 0.9);
            ctx.lineTo(trunkX + trunkWidth, trunkY + trunkHeight * 0.3);
            ctx.lineTo(trunkX + trunkWidth * 0.7, trunkY);
            ctx.lineTo(trunkX + trunkWidth * 0.3, trunkY);
            ctx.lineTo(trunkX, trunkY + trunkHeight * 0.3);
            ctx.closePath();
            ctx.fill();
            // 畫樹洞
            const holeWidth = trunkWidth * 0.6;
            const holeHeight = trunkHeight * 0.4;
            const holeX = trunkX + (trunkWidth - holeWidth) / 2;
            const holeY = trunkY + trunkHeight * 0.45;
            // 樹洞外圍
            ctx.fillStyle = '#3E2723';
            ctx.beginPath();
            ctx.ellipse(holeX + holeWidth / 2, holeY + holeHeight / 2, holeWidth / 2, holeHeight / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            // 樹洞內部
            ctx.fillStyle = '#1a1a1a';
            ctx.beginPath();
            ctx.ellipse(holeX + holeWidth / 2, holeY + holeHeight / 2, holeWidth / 2 * 0.8, holeHeight / 2 * 0.8, 0, 0, Math.PI * 2);
            ctx.fill();
            // 畫樹葉
            const drawLeaves = (x, y, radius, color) => {
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            };
            // 樹冠
            const treeTopX = trunkX + trunkWidth / 2;
            const treeTopY = trunkY * 0.7;
            // 樹葉漸變
            const leafColors = ['#2E7D32', '#388E3C', '#43A047', '#4CAF50'];
            // 隨機產生樹葉
            for (let i = 0; i < 100; i++) {
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * trunkWidth * 2;
                const x = treeTopX + Math.cos(angle) * distance;
                const y = treeTopY + Math.sin(angle) * distance * 0.7;
                const radius = Math.random() * 50 + 30;
                const color = leafColors[Math.floor(Math.random() * leafColors.length)];
                drawLeaves(x, y, radius, color);
            }
            // 地面
            ctx.fillStyle = '#795548';
            ctx.beginPath();
            ctx.moveTo(0, canvas.height);
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(canvas.width, canvas.height - 20);
            ctx.quadraticCurveTo(canvas.width * 0.75, canvas.height - 15, canvas.width * 0.5, canvas.height - 30);
            ctx.quadraticCurveTo(canvas.width * 0.25, canvas.height - 15, 0, canvas.height - 25);
            ctx.closePath();
            ctx.fill();
            // 畫一些草
            ctx.fillStyle = '#4CAF50';
            for (let i = 0; i < canvas.width; i += 15) {
                const height = Math.random() * 10 + 5;
                ctx.beginPath();
                ctx.moveTo(i, canvas.height);
                ctx.lineTo(i, canvas.height - height);
                ctx.lineTo(i + 5, canvas.height - height - 5);
                ctx.lineTo(i + 10, canvas.height - height);
                ctx.lineTo(i + 10, canvas.height);
                ctx.closePath();
                ctx.fill();
            }
        };
        // 新增煩惱
        const addTrouble = async () => {
            try {
                // 驗證內容
                if (!newTrouble.value.content.trim()) {
                    errorMessage.value = '請輸入煩惱內容';
                    return;
                }
                isLoading.value = true;
                // 準備要新增的資料
                const troubleData = {
                    content: newTrouble.value.content.trim(),
                    category: newTrouble.value.category,
                    timestamp: new Date().toISOString(),
                    empathies: 0,
                    replyCount: 0
                };
                // 新增到 Firebase
                const troublesRef = dbRef(database, 'troubles');
                const newTroubleRef = push(troublesRef);
                // 更新資料
                await set(newTroubleRef, {
                    id: newTroubleRef.key,
                    ...troubleData
                });
                // 清空輸入
                newTrouble.value.content = '';
                errorMessage.value = '';
                console.log('煩惱發布成功！');
            }
            catch (error) {
                console.error('發布煩惱失敗：', error);
                errorMessage.value = '發布失敗，請稍後再試';
            }
            finally {
                isLoading.value = false;
            }
        };
        // 新增回覆
        const addReply = async () => {
            if (!selectedTroubleId.value)
                return;
            try {
                // 驗證內容
                if (!newReply.value.content.trim()) {
                    replyError.value = '請輸入回覆內容';
                    return;
                }
                isLoading.value = true;
                // 準備要新增的資料
                const replyData = {
                    troubleId: selectedTroubleId.value,
                    content: newReply.value.content.trim(),
                    timestamp: new Date().toISOString(),
                    helpful: 0
                };
                // 新增到 Firebase
                const repliesRef = dbRef(database, 'replies');
                const newReplyRef = push(repliesRef);
                // 更新資料
                await set(newReplyRef, {
                    id: newReplyRef.key,
                    ...replyData
                });
                // 更新煩惱的回覆計數
                const troubleRef = dbRef(database, `troubles/${selectedTroubleId.value}`);
                const currentTrouble = selectedTrouble.value;
                if (currentTrouble) {
                    const replyCount = (currentTrouble.replyCount || 0) + 1;
                    await update(troubleRef, { replyCount });
                }
                // 清空輸入
                newReply.value.content = '';
                replyError.value = '';
                console.log('回覆發布成功！');
            }
            catch (error) {
                console.error('發布回覆失敗：', error);
                replyError.value = '回覆發布失敗，請稍後再試';
            }
            finally {
                isLoading.value = false;
            }
        };
        // 切換同理心數
        const toggleEmpathy = async (trouble) => {
            if (!trouble)
                return;
            const troubleRef = dbRef(database, `troubles/${trouble.id}`);
            await update(troubleRef, {
                empathies: (trouble.empathies || 0) + 1
            });
        };
        // 切換有幫助數
        const toggleHelpful = async (reply) => {
            if (!reply)
                return;
            const replyRef = dbRef(database, `replies/${reply.id}`);
            await update(replyRef, {
                helpful: (reply.helpful || 0) + 1
            });
        };
        // 過濾煩惱
        const filterTroubles = (category) => {
            selectedFilter.value = category;
        };
        // 查看煩惱詳情
        const viewTroubleDetails = (trouble) => {
            selectedTroubleId.value = trouble.id;
            newReply.value.troubleId = trouble.id;
            loadReplies(trouble.id);
        };
        // 返回煩惱列表
        const backToList = () => {
            selectedTroubleId.value = null;
            replies.value = [];
            newReply.value.content = '';
            newReply.value.troubleId = '';
        };
        // 加載特定煩惱的回覆
        const loadReplies = async (troubleId) => {
            const repliesRef = dbRef(database, 'replies');
            const unsubscribe = onValue(repliesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    replies.value = Object.values(data)
                        .filter((reply) => reply.troubleId === troubleId)
                        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                }
                else {
                    replies.value = [];
                }
            });
            return unsubscribe;
        };
        // 處理窗口大小改變，重新繪製樹
        const handleResize = () => {
            drawTree();
        };
        // 監聽 Firebase 資料變化
        let troublesUnsubscribe = null;
        onMounted(() => {
            // 設置 canvas 並繪製樹
            nextTick(() => {
                drawTree();
                window.addEventListener('resize', handleResize);
            });
            // 監聽煩惱資料變化
            const troublesRef = dbRef(database, 'troubles');
            troublesUnsubscribe = onValue(troublesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    troubles.value = Object.values(data);
                    // 依時間排序，最新的在前面
                    troubles.value.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                }
                else {
                    troubles.value = [];
                }
            });
            // 在 setup 中添加連接狀態檢查
            const connectedRef = dbRef(database, '.info/connected');
            onValue(connectedRef, (snap) => {
                if (snap.val() === true) {
                    console.log('已連接到 Firebase');
                }
                else {
                    console.log('未連接到 Firebase');
                }
            });
        });
        onUnmounted(() => {
            if (troublesUnsubscribe) {
                troublesUnsubscribe();
            }
            window.removeEventListener('resize', handleResize);
        });
        // 返回模板需要使用的值和函數
        return {
            treeCanvas,
            troubles,
            replies,
            selectedFilter,
            selectedTroubleId,
            selectedTrouble,
            newTrouble,
            newReply,
            errorMessage,
            replyError,
            isLoading,
            filteredTroubles,
            categoryMap,
            getCategoryColor,
            formatDate,
            addTrouble,
            addReply,
            toggleEmpathy,
            toggleHelpful,
            filterTroubles,
            viewTroubleDetails,
            backToList
        };
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
    __VLS_styleScopedClasses['trouble-input'];
    __VLS_styleScopedClasses['category-option'];
    __VLS_styleScopedClasses['category-option'];
    __VLS_styleScopedClasses['category-tooltip'];
    __VLS_styleScopedClasses['submit-btn'];
    __VLS_styleScopedClasses['submit-btn'];
    __VLS_styleScopedClasses['filter-btn'];
    __VLS_styleScopedClasses['filter-btn'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['filter-btn'];
    __VLS_styleScopedClasses['trouble-leaf'];
    __VLS_styleScopedClasses['trouble-leaf'];
    __VLS_styleScopedClasses['back-btn'];
    __VLS_styleScopedClasses['empathy-btn'];
    __VLS_styleScopedClasses['reply-form'];
    __VLS_styleScopedClasses['reply-form'];
    __VLS_styleScopedClasses['reply-btn'];
    __VLS_styleScopedClasses['reply-btn'];
    __VLS_styleScopedClasses['helpful-btn'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['subtitle'];
    __VLS_styleScopedClasses['input-section'];
    __VLS_styleScopedClasses['troubles-grid'];
    __VLS_styleScopedClasses['trouble-detail'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['subtitle'];
    __VLS_styleScopedClasses['category-selector'];
    __VLS_styleScopedClasses['category-option'];
    __VLS_styleScopedClasses['filter-btn'];
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
//# sourceMappingURL=TroubleTreeView.vue.js.map
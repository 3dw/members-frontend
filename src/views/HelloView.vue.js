import { ref, defineComponent, onMounted, computed, onBeforeUnmount, nextTick } from 'vue';
import { onValue, set } from 'firebase/database';
import { waterdropRef } from '@/firebase'; // 請依自己專案路徑調整
export default defineComponent({
    name: 'HelloView',
    setup() {
        // 表情符號頭像
        const emojiAvatars = ['😊', '🥰', '🥶', '🚀', '🌟', '☀️',
            '💧', '🌳', '🪷',
            '🐟', '🦈', '🐬', '🕷️', '🪼',
            '🐙', '🐠', '🐡', '🐸'
        ];
        // 結合圖片與表情頭像
        const availableAvatars = ref([
            ...emojiAvatars.map(emoji => ({ type: 'emoji', value: emoji }))
        ]);
        // 基本響應式狀態
        const isLoggedIn = ref(false);
        //       const username = ref('');
        const selectedAvatar = ref(null);
        const currentGreeting = ref('');
        const greetingsOnPond = ref([]);
        // Canvas 動畫相關
        const pondCanvas = ref(null);
        let ctx = null;
        let animationId = null;
        const ripples = ref([]);
        const pondAvatars = ref([]);
        const lastGreetingCount = ref(0);
        // 訊息時間排序
        const sortedMessages = computed(() => {
            return [...greetingsOnPond.value].sort((a, b) => {
                return (b.timestamp || 0) - (a.timestamp || 0);
            });
        });
        // 取得台灣日期
        function getTaiwanDate() {
            const options = {
                timeZone: 'Asia/Taipei',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            };
            return new Date().toLocaleDateString('zh-TW', options);
        }
        const taiwanDate = ref(getTaiwanDate());
        // 預設訊息
        const defaultGreeting = {
            id: 'default-greeting',
            // username: '池塘管理員',
            avatar: '🌊',
            message: '來打招呼吧！',
            timestamp: Date.now(),
            dateString: new Date().toDateString()
        };
        // 今日訊息 (若無則顯示預設)
        const todayGreetings = computed(() => {
            const today = new Date();
            const taiwanOptions = { timeZone: 'Asia/Taipei' };
            const taiwanToday = new Date(today.toLocaleString('en-US', taiwanOptions)).toDateString();
            const filteredGreetings = greetingsOnPond.value.filter(greeting => {
                const greetingDate = new Date(greeting.timestamp);
                const greetingDateString = new Date(greetingDate.toLocaleString('en-US', taiwanOptions)).toDateString();
                return greetingDateString === taiwanToday;
            });
            return filteredGreetings.length > 0 ? filteredGreetings : [defaultGreeting];
        });
        // 登入 / 登出 / 發送留言
        function login() {
            if (selectedAvatar.value) {
                isLoggedIn.value = true;
            }
        }
        function logout() {
            isLoggedIn.value = false;
            selectedAvatar.value = null;
            currentGreeting.value = '';
        }
        function postGreeting() {
            if (!currentGreeting.value || !isLoggedIn.value) {
                return;
            }
            const now = new Date();
            const newGreeting = {
                id: `msg-${now.getTime()}-${Math.random().toString(16).slice(2)}`,
                // username: username.value,
                avatar: selectedAvatar.value,
                message: currentGreeting.value,
                timestamp: now.getTime(),
                dateString: now.toDateString(),
            };
            const updatedGreetings = [...greetingsOnPond.value, newGreeting];
            set(waterdropRef, updatedGreetings)
                .then(() => {
                console.log('留言已寫入 Firebase');
                // 加一個小漣漪
                if (pondCanvas.value) {
                    addRipple(Math.random() * pondCanvas.value.width, Math.random() * pondCanvas.value.height);
                }
                currentGreeting.value = '';
            })
                .catch((err) => {
                console.error('寫入 Firebase 時發生錯誤:', err);
            });
        }
        // Canvas 與池塘初始化
        function initPond() {
            if (!pondCanvas.value) {
                console.error("Canvas element not found!");
                return;
            }
            ctx = pondCanvas.value.getContext('2d');
            if (!ctx) {
                console.error("Failed to get 2D context");
                return;
            }
            resizeCanvas();
            syncAvatarsFromGreetings();
            startAnimation();
            window.addEventListener('resize', resizeCanvas);
        }
        function resizeCanvas() {
            if (!pondCanvas.value || !ctx)
                return;
            const container = pondCanvas.value.parentElement;
            if (!container)
                return;
            pondCanvas.value.width = container.clientWidth;
            pondCanvas.value.height = container.clientHeight;
        }
        // 從 Firebase 留言同步到池塘動態物件
        function syncAvatarsFromGreetings() {
            if (!Array.isArray(greetingsOnPond.value))
                return;
            const incomingGreetings = todayGreetings.value;
            // 新增或更新
            incomingGreetings.forEach(g => {
                if (!g || !g.id)
                    return;
                const idx = pondAvatars.value.findIndex(a => a.id === g.id);
                if (idx === -1) {
                    addAvatarToPond(g);
                }
                else {
                    pondAvatars.value[idx].message = g.message;
                    pondAvatars.value[idx].avatar = g.avatar;
                    //            pondAvatars.value[idx].username = g.username;
                }
            });
            // 移除不是今天的留言
            const incomingIds = incomingGreetings.map(i => i.id).filter(Boolean);
            pondAvatars.value = pondAvatars.value.filter(a => incomingIds.includes(a.id));
        }
        // 新增池塘動態物件
        function addAvatarToPond(greeting) {
            if (!pondCanvas.value)
                return;
            const canvas = pondCanvas.value;
            // 若是圖片頭像，先建 Image 實體
            let imageObj = null;
            if (greeting.avatar && greeting.avatar.type === 'image') {
                imageObj = new Image();
                imageObj.src = greeting.avatar.src;
            }
            pondAvatars.value.push({
                id: greeting.id,
                avatar: greeting.avatar,
                // username: greeting.username,
                message: greeting.message,
                x: Math.random() * (canvas.width - 50) + 25,
                y: Math.random() * (canvas.height - 50) + 25,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: 30,
                imageObj
            });
        }
        // 波紋相關
        function addRipple(x, y) {
            ripples.value.push({
                x,
                y,
                radius: 0,
                maxRadius: 40 + Math.random() * 20,
                lineWidth: 1.5,
                opacity: 0.7,
                speed: 0.8 + Math.random() * 0.4,
            });
        }
        function drawPondBackground() {
            if (!ctx || !pondCanvas.value)
                return;
            const canvas = pondCanvas.value;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, '#a0d8f0');
            gradient.addColorStop(1, '#79c2e6');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        function updateRipples() {
            if (!ctx)
                return;
            for (let i = ripples.value.length - 1; i >= 0; i--) {
                const r = ripples.value[i];
                ctx.beginPath();
                ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(255, 255, 255, ${r.opacity})`;
                ctx.lineWidth = r.lineWidth;
                ctx.stroke();
                r.radius += r.speed;
                r.opacity -= 0.01;
                if (r.radius > r.maxRadius || r.opacity <= 0) {
                    ripples.value.splice(i, 1);
                }
            }
        }
        // 繪製可換行文字
        function drawWrappedText(context, text, x, y, maxWidth, lineHeight, padding, bubbleBg, textColor, font) {
            if (!text)
                return;
            context.font = font;
            context.textBaseline = 'top';
            context.textAlign = 'left';
            // 改用字符級別的文本換行邏輯，適合中文
            const lines = [];
            let currentLine = '';
            // 逐字檢查處理換行
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                const testLine = currentLine + char;
                const width = context.measureText(testLine).width;
                if (width > maxWidth && currentLine.length > 0) {
                    lines.push(currentLine);
                    currentLine = char;
                }
                else {
                    currentLine = testLine;
                }
            }
            // 加入最後一行
            if (currentLine.length > 0) {
                lines.push(currentLine);
            }
            let maxLineWidth = 0;
            lines.forEach(line => {
                const w = context.measureText(line).width;
                if (w > maxLineWidth)
                    maxLineWidth = w;
            });
            const bubbleWidth = maxLineWidth + padding * 2 + 10;
            const bubbleHeight = lines.length * lineHeight + padding * 2;
            const bubbleX = x - bubbleWidth / 2;
            const bubbleY = y - bubbleHeight - 5;
            context.fillStyle = bubbleBg;
            const r = 6;
            context.beginPath();
            // 左上
            context.moveTo(bubbleX + r, bubbleY);
            context.lineTo(bubbleX + bubbleWidth - r, bubbleY);
            context.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY, bubbleX + bubbleWidth, bubbleY + r);
            // 右下
            context.lineTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight - r);
            context.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight, bubbleX + bubbleWidth - r, bubbleY + bubbleHeight);
            // 左下
            context.lineTo(bubbleX + r, bubbleY + bubbleHeight);
            context.quadraticCurveTo(bubbleX, bubbleY + bubbleHeight, bubbleX, bubbleY + bubbleHeight - r);
            // 左上
            context.lineTo(bubbleX, bubbleY + r);
            context.quadraticCurveTo(bubbleX, bubbleY, bubbleX + r, bubbleY);
            context.closePath();
            context.fill();
            context.fillStyle = textColor;
            lines.forEach((line, index) => {
                // 簡化定位計算，避免混合使用不同的對齊方式
                const lineX = bubbleX + padding;
                context.fillText(line, lineX, bubbleY + padding + index * lineHeight);
            });
        }
        // 更新並繪製頭像/訊息
        function updateAndDrawAvatars() {
            if (!ctx || !pondCanvas.value)
                return;
            const canvas = pondCanvas.value;
            pondAvatars.value.forEach(avatar => {
                // 移動
                avatar.x += avatar.vx;
                avatar.y += avatar.vy;
                // 簡易邊界反彈
                const bubbleReserve = 70;
                const halfSize = avatar.size / 2;
                if (avatar.x - halfSize < 0) {
                    avatar.x = halfSize;
                    avatar.vx *= -1;
                }
                else if (avatar.x + halfSize > canvas.width) {
                    avatar.x = canvas.width - halfSize;
                    avatar.vx *= -1;
                }
                if (avatar.y - halfSize - bubbleReserve < 0) {
                    avatar.y = halfSize + bubbleReserve;
                    avatar.vy = Math.abs(avatar.vy);
                }
                else if (avatar.y + halfSize > canvas.height) {
                    avatar.y = canvas.height - halfSize;
                    avatar.vy *= -1;
                }
                // 繪製訊息泡泡
                const textContent = avatar.message;
                drawWrappedText(ctx, textContent, avatar.x, avatar.y - halfSize, 130, 16, 8, 'rgba(255, 255, 255, 0.85)', '#333', '14px sans-serif');
                // 根據頭像類型顯示
                if (avatar.avatar?.type === 'emoji') {
                    ctx.font = `${avatar.size}px sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(avatar.avatar.value, avatar.x, avatar.y);
                }
                else if (avatar.avatar?.type === 'image' && avatar.imageObj) {
                    ctx.drawImage(avatar.imageObj, avatar.x - avatar.size / 2, avatar.y - avatar.size / 2, avatar.size, avatar.size);
                }
                else {
                    // fallback
                    ctx.font = `${avatar.size}px sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText('💧', avatar.x, avatar.y);
                }
            });
        }
        // 動畫主循環
        function addRandomRipple() {
            if (!pondCanvas.value)
                return;
            if (Math.random() < 0.015) {
                const x = Math.random() * pondCanvas.value.width;
                const y = Math.random() * pondCanvas.value.height;
                addRipple(x, y);
            }
        }
        function startAnimation() {
            if (animationId)
                cancelAnimationFrame(animationId);
            const animate = () => {
                drawPondBackground();
                addRandomRipple();
                updateRipples();
                updateAndDrawAvatars();
                animationId = requestAnimationFrame(animate);
            };
            animate();
        }
        // 時間格式化
        function formatTime(timestamp) {
            if (!timestamp)
                return '';
            const date = new Date(timestamp);
            const now = new Date();
            const diffMs = now.getTime() - date.getTime();
            const diffMins = Math.floor(diffMs / (60 * 1000));
            const diffHours = Math.floor(diffMs / (60 * 60 * 1000));
            const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));
            if (diffMins < 60) {
                return `${diffMins} 分鐘前`;
            }
            else if (diffHours < 24) {
                return `${diffHours} 小時前`;
            }
            else {
                return `${diffDays} 天前`;
            }
        }
        // Firebase 監聽
        onMounted(() => {
            // 初始化池塘動畫（不論是否登入）
            nextTick(() => {
                initPond();
            });
            onValue(waterdropRef, (snapshot) => {
                let data = [];
                if (snapshot.exists()) {
                    const rawData = snapshot.val();
                    if (Array.isArray(rawData)) {
                        data = rawData;
                        data.forEach((item, idx) => {
                            if (!item.id) {
                                item.id = `fallback-${item.timestamp || idx}-${Math.random().toString(16).slice(2)}`;
                            }
                            if (typeof item.message === 'undefined') {
                                item.message = '';
                            }
                        });
                    }
                    else if (rawData && typeof rawData === 'object') {
                        data = Object.entries(rawData).map(([key, val]) => ({
                            id: key,
                            message: val.message || '',
                            ...val,
                        }));
                    }
                }
                greetingsOnPond.value = data;
                nextTick(() => {
                    // 已不需要判斷是否已初始化，只需同步資料
                    syncAvatarsFromGreetings();
                    // 若偵測到有新留言，就產生一次漣漪
                    if (greetingsOnPond.value.length > lastGreetingCount.value && pondCanvas.value) {
                        addRipple(Math.random() * pondCanvas.value.width, Math.random() * pondCanvas.value.height);
                    }
                    lastGreetingCount.value = greetingsOnPond.value.length;
                });
            }, (error) => {
                console.error("Error fetching data from Firebase:", error);
                greetingsOnPond.value = [];
                pondAvatars.value = [];
            });
        });
        onBeforeUnmount(() => {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
            window.removeEventListener('resize', resizeCanvas);
        });
        // 返回所有在模板中使用的變數和方法
        return {
            availableAvatars,
            isLoggedIn,
            // username,
            selectedAvatar,
            currentGreeting,
            greetingsOnPond,
            pondCanvas,
            ripples,
            sortedMessages,
            taiwanDate,
            login,
            logout,
            postGreeting,
            formatTime
        };
    }
});
;
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
    __VLS_styleScopedClasses['avatar-selection'];
    __VLS_styleScopedClasses['avatar-selection'];
    __VLS_styleScopedClasses['welcome-message'];
    __VLS_styleScopedClasses['welcome-message'];
    __VLS_styleScopedClasses['welcome-message'];
    __VLS_styleScopedClasses['login-form'];
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
//# sourceMappingURL=HelloView.vue.js.map
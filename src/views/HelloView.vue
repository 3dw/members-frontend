<template lang="pug">
  .hello-view
    //- 登入區塊 (如果尚未登入)
    div(v-if="!isLoggedIn")
      h2 加入池塘對話！
      .login-form
        label(for="username") 你的名字：
        input(type="text" id="username" v-model.trim="inputUsername" placeholder="輸入你的暱稱")

        label 頭像選擇：
        .avatar-selection
          label(v-for="(avatar, index) in availableAvatars" :key="index")
            input(type="radio" name="avatar" :value="avatar" v-model="selectedAvatar")
            span.avatar {{ avatar }}

        button(@click="login" :disabled="!inputUsername || !selectedAvatar") 進入池塘

    //- 打招呼和池塘顯示區 (如果已登入)
    div(v-else)
      .welcome-message
        h2 Hi, {{ username }} ({{ selectedAvatar }})!
        button(@click="logout") 離開池塘

      //- 發送招呼語表單
      .greeting-form(v-if="!hasGreetedToday")
        textarea(v-model.trim="currentGreeting" placeholder="今天想說些什麼？")
        button(@click="postGreeting" :disabled="!currentGreeting") 向大家打招呼！
      p(v-else) 你今天已經打過招呼了！

      //- 池塘顯示區 (只保留 Canvas，頭像＋訊息在畫布中動態繪製)
      h3.pond-title 今日池塘動態
      .pond-container
        canvas.pond-canvas(ref="pondCanvas")

      //- 新增：靜態訊息列表
      h3.messages-title 池塘訊息列表
      .messages-list
        .message-item(v-if="greetingsOnPond.length === 0")
          p.empty-message 今天池塘很安靜... 快來打聲招呼吧！
        .message-item(v-for="message in sortedMessages" :key="message.id")
          .message-header
            span.avatar {{ message.avatar || '💧' }}
            span.username {{ message.username }}
            span.time {{ formatTime(message.timestamp) }}
          .message-content {{ message.message }}
  </template>

  <script setup>
  import { ref, onMounted, computed, onBeforeUnmount, nextTick, watch } from 'vue';

  // 匯入 Firebase 功能
  import { onValue, set } from 'firebase/database';
  import { waterdropRef } from '@/firebase';  // 請依自己專案路徑調整

  // --- 基本響應式狀態 ---
  const isLoggedIn = ref(false);
  const inputUsername = ref('');
  const username = ref('');
  const selectedAvatar = ref('');
  const currentGreeting = ref('');
  const availableAvatars = ref(['😊', '🚀', '🌟', '☀️', '💧', '🌳']);
  const greetingsOnPond = ref([]); // 從 Firebase 取得的原始留言列表

  // --- Canvas 動畫相關狀態 ---
  const pondCanvas = ref(null); // <canvas> DOM
  let ctx = null;               // 2D context
  let animationId = null;       // requestAnimationFrame ID
  const ripples = ref([]);      // 水波紋
  const pondAvatars = ref([]);  // 在池塘中「飄動」的物件（包含：頭像＋暱稱＋訊息）
  const lastGreetingCount = ref(0); // 用於偵測是否有新留言

  // --- 計算屬性：判斷使用者今天是否已經發過言 ---
  const hasGreetedToday = computed(() => {
    if (!isLoggedIn.value || !Array.isArray(greetingsOnPond.value)) return false;
    const todayString = new Date().toDateString();
    return greetingsOnPond.value.some(
      (g) => g.username === username.value && g.dateString === todayString
    );
  });

  // 新增：訊息排序的計算屬性
  const sortedMessages = computed(() => {
    return [...greetingsOnPond.value].sort((a, b) => {
      return (b.timestamp || 0) - (a.timestamp || 0)
    })
  })

  // --- 登入 / 登出 / 發送留言 ---
  function login() {
    if (inputUsername.value && selectedAvatar.value) {
      username.value = inputUsername.value;
      isLoggedIn.value = true;
      // 登入後初始化池塘
      nextTick(() => {
        initPond();
      });
    }
  }

  function logout() {
    isLoggedIn.value = false;
    username.value = '';
    inputUsername.value = '';
    selectedAvatar.value = '';
    currentGreeting.value = '';

    // 停止動畫
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    // 清空狀態
    pondAvatars.value = [];
    ripples.value = [];
    lastGreetingCount.value = 0;
    window.removeEventListener('resize', resizeCanvas);
  }

  function postGreeting() {
    if (!currentGreeting.value || !isLoggedIn.value || hasGreetedToday.value) {
      return;
    }
    const now = new Date();
    const newGreeting = {
      id: `msg-${now.getTime()}-${Math.random().toString(16).slice(2)}`,
      username: username.value,
      avatar: selectedAvatar.value,
      message: currentGreeting.value, // **包含文字訊息**
      timestamp: now.getTime(),
      dateString: now.toDateString(),
    };

    const updatedGreetings = [...greetingsOnPond.value, newGreeting];

    set(waterdropRef, updatedGreetings)
      .then(() => {
        console.log('留言已寫入 Firebase');
        // 加一個小漣漪
        if (pondCanvas.value) {
          addRipple(
            Math.random() * pondCanvas.value.width,
            Math.random() * pondCanvas.value.height
          );
        }
        currentGreeting.value = '';
      })
      .catch((err) => {
        console.error('寫入 Firebase 時發生錯誤:', err);
      });
  }

  // --- Canvas 與池塘初始化 ---
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
    if (!pondCanvas.value || !ctx) return;
    const container = pondCanvas.value.parentElement;
    if (!container) return;

    // 寬度跟隨容器 (RWD)
    pondCanvas.value.width = container.clientWidth;
    // 高度根據容器計算 (clip-path 不會改變實際寬高，需要我們手動設定)
    pondCanvas.value.height = container.clientHeight;
  }

  // --- 從 Firebase 留言同步到「池塘中的動態物件」列表 ---
  function syncAvatarsFromGreetings() {
    if (!Array.isArray(greetingsOnPond.value)) return;

    // 目前畫面上有哪些 id
    const currentIds = pondAvatars.value.map(a => a.id);
    const incomingGreetings = greetingsOnPond.value;

    // 1. 新增或更新
    incomingGreetings.forEach(g => {
      if (!g || !g.id) return;
      const idx = pondAvatars.value.findIndex(a => a.id === g.id);
      if (idx === -1) {
        // 新增
        addAvatarToPond(g);
      } else {
        // 已存在 -> 更新文字或頭像
        pondAvatars.value[idx].message = g.message;
        pondAvatars.value[idx].avatar = g.avatar;
        pondAvatars.value[idx].username = g.username;
      }
    });

    // 2. 移除已刪除的留言
    const incomingIds = incomingGreetings.map(i => i.id).filter(Boolean);
    pondAvatars.value = pondAvatars.value.filter(a => incomingIds.includes(a.id));
  }

  // --- 將單一留言轉成池塘上的動態物件 (包含頭像、暱稱、訊息) ---
  function addAvatarToPond(greeting) {
    if (!pondCanvas.value) return;
    const canvas = pondCanvas.value;
    // 隨機分配初始位置與速度
    pondAvatars.value.push({
      id: greeting.id,
      avatar: greeting.avatar,
      username: greeting.username,
      message: greeting.message,
      x: Math.random() * (canvas.width - 50) + 25,
      y: Math.random() * (canvas.height - 50) + 25,
      vx: (Math.random() - 0.5) * 0.8, // 慢速晃動
      vy: (Math.random() - 0.5) * 0.8,
      size: 30, // 統一大小
    });
  }

  // --- 波紋相關 ---
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
    if (!ctx || !pondCanvas.value) return;
    const canvas = pondCanvas.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 藍色漸層
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#a0d8f0');
    gradient.addColorStop(1, '#79c2e6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function updateRipples() {
    if (!ctx) return;
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

  // --- 繪製文字 (可換行) 的工具函式 ---
  function drawWrappedText(context, text, x, y, maxWidth, lineHeight, padding, bubbleBg, textColor, font) {
    if (!text) return;
    context.font = font;
    context.textBaseline = 'top';

    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    // 1) 計算要換行的行
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = context.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);

    // 2) 算出最寬行
    let maxLineWidth = 0;
    lines.forEach(line => {
      const w = context.measureText(line).width;
      if (w > maxLineWidth) maxLineWidth = w;
    });

    // 泡泡的寬高
    const bubbleWidth = maxLineWidth + padding * 2;
    const bubbleHeight = lines.length * lineHeight + padding * 2;

    // 泡泡的左上角(令泡泡底座在 (x, y))
    const bubbleX = x - bubbleWidth / 2;
    const bubbleY = y - bubbleHeight - 5; // 往上 5px 讓泡泡尖端落在物件上方

    // 3) 繪製圓角矩形背景
    context.fillStyle = bubbleBg;
    const r = 6; // 圓角
    context.beginPath();
    // 左上角
    context.moveTo(bubbleX + r, bubbleY);
    context.lineTo(bubbleX + bubbleWidth - r, bubbleY);
    context.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY, bubbleX + bubbleWidth, bubbleY + r);
    // 右下角
    context.lineTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight - r);
    context.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight, bubbleX + bubbleWidth - r, bubbleY + bubbleHeight);
    // 左下角
    context.lineTo(bubbleX + r, bubbleY + bubbleHeight);
    context.quadraticCurveTo(bubbleX, bubbleY + bubbleHeight, bubbleX, bubbleY + bubbleHeight - r);
    // 左上角
    context.lineTo(bubbleX, bubbleY + r);
    context.quadraticCurveTo(bubbleX, bubbleY, bubbleX + r, bubbleY);
    context.closePath();
    context.fill();

    // 4) 繪製文字
    context.fillStyle = textColor;
    lines.forEach((line, index) => {
      context.fillText(line, bubbleX + padding, bubbleY + padding + index * lineHeight);
    });
  }

  // --- 更新並繪製「暱稱＋訊息＋頭像」的泡泡 ---
  function updateAndDrawAvatars() {
    if (!ctx || !pondCanvas.value) return;
    const canvas = pondCanvas.value;

    pondAvatars.value.forEach(avatar => {
      // 1. 移動
      avatar.x += avatar.vx;
      avatar.y += avatar.vy;

      // 2. 碰撞邊界（簡單反彈）
      //   先假設文字泡泡高度 ~70px
      const bubbleReserve = 70;
      const halfSize = avatar.size / 2;

      if (avatar.x - halfSize < 0) {
        avatar.x = halfSize;
        avatar.vx *= -1;
      } else if (avatar.x + halfSize > canvas.width) {
        avatar.x = canvas.width - halfSize;
        avatar.vx *= -1;
      }

      // 上方考慮泡泡
      if (avatar.y - halfSize - bubbleReserve < 0) {
        avatar.y = halfSize + bubbleReserve;
        avatar.vy = Math.abs(avatar.vy); // 往下反彈
      } else if (avatar.y + halfSize > canvas.height) {
        avatar.y = canvas.height - halfSize;
        avatar.vy *= -1;
      }

      // 3. 繪製泡泡 (avatar + username + message)
      const textContent = `${avatar.avatar} ${avatar.username}\n${avatar.message}`;
      drawWrappedText(
        ctx,
        textContent,
        avatar.x,
        avatar.y - halfSize, // 泡泡錨點在頭像上方
        130,        // 泡泡文字最大寬度
        16,         // 行高
        8,          // 文字邊距
        'rgba(255, 255, 255, 0.85)', // 泡泡底色
        '#333',     // 文字顏色
        '14px sans-serif' // 字體
      );

      // 4. 再繪製頭像 Emoji (在泡泡下方)
      ctx.font = `${avatar.size}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(avatar.avatar, avatar.x, avatar.y);
    });
  }

  // --- 動畫主循環 ---
  function addRandomRipple() {
    if (!pondCanvas.value) return;
    // 1.5% 機率在任一幀生成漣漪
    if (Math.random() < 0.015) {
      const x = Math.random() * pondCanvas.value.width;
      const y = Math.random() * pondCanvas.value.height;
      addRipple(x, y);
    }
  }

  function startAnimation() {
    if (animationId) cancelAnimationFrame(animationId);

    const animate = () => {
      drawPondBackground();
      addRandomRipple();
      updateRipples();
      updateAndDrawAvatars(); // 繪製暱稱+訊息+頭像 的泡泡
      animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  // --- Firebase 監聽 + 生命週期 ---
  onMounted(() => {
    // 監聽 waterdropRef
    onValue(
      waterdropRef,
      (snapshot) => {
        let data = [];
        if (snapshot.exists()) {
          const rawData = snapshot.val();
          if (Array.isArray(rawData)) {
            data = rawData;
            // 補上 id 或 message
            data.forEach((item, idx) => {
              if (!item.id) {
                item.id = `fallback-${item.timestamp || idx}-${Math.random().toString(16).slice(2)}`;
              }
              if (typeof item.message === 'undefined') {
                item.message = '';
              }
            });
          } else if (rawData && typeof rawData === 'object') {
            // 如果拿到的是物件，轉成陣列
            data = Object.entries(rawData).map(([key, val]) => ({
              id: key,
              message: val.message || '',
              ...val,
            }));
          }
        }
        greetingsOnPond.value = data;

        // 同步至畫布
        if (ctx) {
          syncAvatarsFromGreetings();
        }

        // 若偵測到有新留言，就產生一次漣漪
        if (
          greetingsOnPond.value.length > lastGreetingCount.value &&
          pondCanvas.value &&
          ctx
        ) {
          addRipple(
            Math.random() * pondCanvas.value.width,
            Math.random() * pondCanvas.value.height
          );
        }
        lastGreetingCount.value = greetingsOnPond.value.length;
      },
      (error) => {
        console.error("Error fetching data from Firebase:", error);
        greetingsOnPond.value = [];
        pondAvatars.value = [];
      }
    );

    // 若已登入，馬上初始化池塘
    if (isLoggedIn.value) {
      nextTick(() => {
        initPond();
      });
    }
  });

  onBeforeUnmount(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
    window.removeEventListener('resize', resizeCanvas);
  });

  watch(isLoggedIn, (newVal) => {
    if (newVal) {
      nextTick(() => {
        if (!ctx) initPond();
      });
    }
  });

  // 修改：移除類型註解的時間格式化函數
  function formatTime(timestamp) {
    if (!timestamp) return ''
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (60 * 1000))
    const diffHours = Math.floor(diffMs / (60 * 60 * 1000))
    const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000))

    if (diffMins < 60) {
      return `${diffMins} 分鐘前`
    } else if (diffHours < 24) {
      return `${diffHours} 小時前`
    } else {
      return `${diffDays} 天前`
    }
  }
  </script>

  <style scoped>
  .hello-view {
    font-family: sans-serif;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }

  h2, h3 {
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }

  .login-form,
  .greeting-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: -10px;
  }

  input[type="text"],
  textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  textarea {
    min-height: 60px;
    resize: vertical;
  }

  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  button:hover:not(:disabled) {
    background-color: #0056b3;
  }

  .avatar-selection {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  .avatar-selection label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0;
  }
  .avatar-selection input[type="radio"] {
    margin-right: 5px;
  }
  .avatar {
    font-size: 1.5rem;
    display: inline-block;
    margin: 0 5px;
  }

  /* 歡迎訊息區 */
  .welcome-message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eef;
    padding: 10px 15px;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .welcome-message h2 {
    margin: 0;
    text-align: left;
  }
  .welcome-message button {
    background-color: #dc3545;
    font-size: 0.9rem;
    padding: 5px 10px;
  }
  .welcome-message button:hover {
    background-color: #c82333;
  }

  /* 池塘標題 */
  .pond-title {
    border-top: 1px dashed #ccc;
    padding-top: 20px;
    margin-bottom: 10px;
  }

  /* ===== 不規則橢圓形 + RWD + 更大 ===== */
  .pond-container {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;         /* 池塘最大寬度 */
    aspect-ratio: 16 / 9;     /* 高寬比 16:9，會自動 RWD */
    overflow: hidden;
    /* 使用 clip-path 做不規則橢圓形狀 (可自行調整 path 來改形狀) */
    clip-path: path("M 20% 0% C 60% 10%, 100% 10%, 100% 40% C 100% 100%, 40% 100%, 0% 80% C 0% 30%, 0% 0%, 20% 0% Z");
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  }

  /* Canvas 鋪滿容器 */
  .pond-canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* 新增：訊息列表樣式 */
  .messages-title {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px dashed #ccc;
    text-align: center;
    color: #333;
  }

  .messages-list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .message-item {
    background: white;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .message-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }

  .avatar {
    font-size: 1.5rem;
  }

  .username {
    font-weight: bold;
    color: #333;
  }

  .time {
    color: #666;
    font-size: 0.9rem;
    margin-left: auto;
  }

  .message-content {
    color: #444;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  .empty-message {
    text-align: center;
    color: #666;
    font-style: italic;
  }
  </style>


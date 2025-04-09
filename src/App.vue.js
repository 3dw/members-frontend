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

  //- 打招呼和池塘顯示區塊 (如果已登入)
  div(v-else)
    .welcome-message
      h2 Hi, {{ username }} ({{ selectedAvatar }})!
      button(@click="logout") 離開池塘

    //- 發送招呼語表單
    .greeting-form(v-if="!hasGreetedToday")
      textarea(v-model.trim="currentGreeting" placeholder="今天想說些什麼？")
      button(@click="postGreeting" :disabled="!currentGreeting") 向大家打招呼！
    p(v-else) 你今天已經打過招呼了！

    //- 池塘顯示區塊 (文字列表版，保留或自行隱藏)
    h3.pond-title 今日池塘訊息
    .pond
      .greeting-item(v-if="greetingsOnPond.length === 0")
        p 今天池塘很安靜... 快來打聲招呼吧！
      .greeting-item(v-for="(greeting, index) in greetingsOnPond" :key="index")
        .user-info
          span.avatar {{ greeting.avatar }}
          span.username {{ greeting.username }}:
        p.message {{ greeting.message }}

    //- 新增 Canvas，顯示「飄浮水滴」
    h3.pond-title 小水滴漂浮示範
    canvas#pondCanvas(ref="pondCanvas" width="600" height="400")
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick, onBeforeUnmount } from 'vue';
import { onValue, set } from 'firebase/database';
import { bulletinRef } from '@/firebase'; // 與 BulletinBoardView.vue 相同的匯入

// --- 響應式狀態 ---
const isLoggedIn = ref(false);
const inputUsername = ref('');       // 用於登入輸入框
const username = ref('');            // 登入後的使用者名稱
const selectedAvatar = ref('');      // 選擇的頭像 (Emoji 或 URL)
const currentGreeting = ref('');     // 當前輸入的招呼語

// 從 Firebase 同步的留言列表
const greetingsOnPond = ref([]);

// 提供「水滴」動畫用的資料結構
// 每則留言 = 一顆水滴: { id, x, y, vx, vy, radius, message }
const droplets = ref([]);

// 可選的頭像列表 (可以用圖片 URL 替換)
const availableAvatars = ref(['😊', '🚀', '🌟', '☀️', '💧', '🌳']);

// --- 計算屬性 ---
const hasGreetedToday = computed(() => {
  if (!isLoggedIn.value) return false;
  const todayString = new Date().toDateString();
  return greetingsOnPond.value.some(
    (g) => g.username === username.value && g.dateString === todayString
  );
});

// --- 方法 ---
const login = () => {
  if (inputUsername.value && selectedAvatar.value) {
    username.value = inputUsername.value;
    isLoggedIn.value = true;
  }
};

const logout = () => {
  isLoggedIn.value = false;
  username.value = '';
  inputUsername.value = '';
  selectedAvatar.value = '';
  currentGreeting.value = '';
};

// 發送留言 (寫進 Firebase)
const postGreeting = () => {
  if (!currentGreeting.value || !isLoggedIn.value || hasGreetedToday.value) {
    return;
  }
  const now = new Date();
  const newGreeting = {
    username: username.value,
    avatar: selectedAvatar.value,
    message: currentGreeting.value,
    timestamp: now.getTime(),
    dateString: now.toDateString()
  };
  greetingsOnPond.value.push(newGreeting);
  currentGreeting.value = '';

  set(bulletinRef, greetingsOnPond.value)
    .then(() => console.log('留言已寫入 Firebase'))
    .catch((err) => console.error('寫入 Firebase 時發生錯誤:', err));
};

// --- Canvas 相關 ---
const pondCanvas = ref(null);
let ctx = null;          // 2D Context
let animationFrameId = 0;

// 建立新水滴的輔助函式
function createDroplet(msgObj) {
  // 給定每個訊息一個 id (可以用 timestamp + username 來避免重複)
  const id = msgObj.timestamp + '_' + msgObj.username;

  // 隨機位置和速度
  const x = Math.random() * 600;
  const y = Math.random() * 400;
  const vx = (Math.random() - 0.5) * 1.5;  // -0.75 ~ 0.75
  const vy = (Math.random() - 0.5) * 1.5;
  const radius = 25; // 水滴大小，可自行調整

  return {
    id,
    x,
    y,
    vx,
    vy,
    radius,
    message: msgObj.message
  };
}

// 每當 greetingsOnPond 有變化，就更新 droplets
watch(greetingsOnPond, (newVal) => {
  console.log('greetingsOnPond changed:', newVal); // 檢查是否正確拿到資料
  // 先把已存在 droplets 的 id 做個記錄，避免重複新增
  const existingIds = new Set(droplets.value.map(d => d.id));

  // 逐一檢查 Firebase 拿到的留言
  newVal.forEach(g => {
    const dropletId = g.timestamp + '_' + g.username;
    if (!existingIds.has(dropletId)) {
      // 新增一顆水滴
      droplets.value.push(createDroplet(g));
    }
  });

  // 如果要同步刪除已被移除的留言，也可在這裡反向過濾 droplets
  // droplets.value = droplets.value.filter(d => {
  //   return newVal.some(g => (g.timestamp + '_' + g.username) === d.id);
  // });
}, { deep: true });

// 畫面更新 (動畫)
function animate() {
  if (!ctx) return;

  // 清除畫布
  ctx.clearRect(0, 0, 600, 400);

  // 先畫個背景，模擬水面
  ctx.fillStyle = '#EAF7FF'; // 很淡的水色
  ctx.fillRect(0, 0, 600, 400);

  // 更新並繪製每一顆水滴
  for (let droplet of droplets.value) {
    // 移動
    droplet.x += droplet.vx;
    droplet.y += droplet.vy;

    // 邊界檢查 (碰到邊緣就反彈)
    if (droplet.x < droplet.radius || droplet.x > 600 - droplet.radius) {
      droplet.vx *= -1;
    }
    if (droplet.y < droplet.radius || droplet.y > 400 - droplet.radius) {
      droplet.vy *= -1;
    }

    // 繪製圓形
    ctx.beginPath();
    ctx.arc(droplet.x, droplet.y, droplet.radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#66ccff'; // 淡藍色水滴
    ctx.fill();
    ctx.closePath();

    // 在水滴上加上文字
    ctx.fillStyle = '#000';
    ctx.font = '14px sans-serif';
    // 讓文字大約置中
    const textWidth = ctx.measureText(droplet.message).width;
    ctx.fillText(droplet.message, droplet.x - textWidth / 2, droplet.y + 4);
  }

  animationFrameId = requestAnimationFrame(animate);
}

onMounted(() => {
  // 監聽 Firebase
  onValue(bulletinRef, (snapshot) => {
    if (snapshot.exists()) {
      // ★ 如果 Firebase 裡的結構是物件，需用 Object.values() 轉成陣列
      const val = snapshot.val();
      console.log('Firebase 原始資料:', val);
      // 若是物件 (且非陣列)，轉成陣列；否則直接用
      if (typeof val === 'object' && !Array.isArray(val)) {
        greetingsOnPond.value = Object.values(val);
      } else {
        greetingsOnPond.value = val;
      }
    } else {
      greetingsOnPond.value = [];
    }
  });

  // 取得 canvas context，啟動動畫
  nextTick(() => {
    const canvasEl = pondCanvas.value;
    if (canvasEl) {
      ctx = canvasEl.getContext('2d');
      animate();
    }
  });
});

// 在組件卸載時，記得取消動畫
onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId);
});
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

.login-form, .greeting-form {
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

.pond-title {
  border-top: 1px dashed #ccc;
  padding-top: 20px;
}

.pond {
  border: 2px solid #a0d8f0;
  background-color: #eaf7ff;
  padding: 15px;
  border-radius: 8px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.greeting-item {
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.greeting-item .user-info {
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.greeting-item .username {
  font-weight: bold;
  margin-left: 5px;
}

.greeting-item .message {
  margin: 0;
  flex-grow: 1;
  word-break: break-word;
}

#pondCanvas {
  display: block;
  margin: 0 auto;
  border: 2px solid #a0d8f0;
  background-color: #fff;
  border-radius: 8px;
}
</style>

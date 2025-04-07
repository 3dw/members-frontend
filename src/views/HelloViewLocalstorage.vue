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

      //- 池塘顯示區塊
      h3.pond-title 今日池塘訊息
      .pond
        .greeting-item(v-if="greetingsOnPond.length === 0")
          p 今天池塘很安靜... 快來打聲招呼吧！
        .greeting-item(v-for="(greeting, index) in greetingsOnPond" :key="index")
          .user-info
            span.avatar {{ greeting.avatar }}
            span.username {{ greeting.username }}:
          p.message {{ greeting.message }}
          //- 可選：顯示時間
          //- span.timestamp {{ formatTimestamp(greeting.timestamp) }}

  </template>

  <script setup>
  import { ref, onMounted, computed } from 'vue';

  // --- 響應式狀態 ---
  const isLoggedIn = ref(false);
  const inputUsername = ref(''); // 用於登入輸入框
  const username = ref(''); // 登入後的使用者名稱
  const selectedAvatar = ref(''); // 選擇的頭像 (Emoji 或 URL)
  const currentGreeting = ref(''); // 當前輸入的招呼語
  const greetingsOnPond = ref([]); // 池塘上的所有招呼語 [{ username, avatar, message, timestamp, dateString }]

  // 可選的頭像列表 (可以用圖片 URL 替換)
  const availableAvatars = ref(['😊', '🚀', '🌟', '☀️', '💧', '🌳']);

  // --- 本地儲存相關 ---
  const STORAGE_KEY = 'pondGreetings';

  // 載入今天儲存的招呼語
  const loadGreetings = () => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        const allGreetings = JSON.parse(storedData);
        const todayString = new Date().toDateString(); // 獲取今天的日期字串 "Mon Apr 07 2025"
        // 只過濾出今天的訊息
        greetingsOnPond.value = allGreetings.filter(g => g.dateString === todayString);
      } catch (e) {
        console.error("無法解析儲存的招呼語:", e);
        localStorage.removeItem(STORAGE_KEY); // 如果解析失敗，清除損壞的資料
        greetingsOnPond.value = [];
      }
    } else {
      greetingsOnPond.value = [];
    }
  };

  // 儲存招呼語到 localStorage
  const saveGreetings = () => {
    // 注意：為了簡單起見，這裡每次都儲存所有已載入的今日訊息。
    // 更完善的做法可能是讀取舊資料，添加新資料，再存回去，
    // 但由於我們只顯示今日訊息，目前這樣做影響不大。
    localStorage.setItem(STORAGE_KEY, JSON.stringify(greetingsOnPond.value));
  };

  // --- 計算屬性 ---
  // 檢查目前登入的使用者今天是否已經打過招呼
  const hasGreetedToday = computed(() => {
    if (!isLoggedIn.value) return false;
    const todayString = new Date().toDateString();
    return greetingsOnPond.value.some(
      g => g.username === username.value && g.dateString === todayString
    );
  });

  // --- 方法 ---
  const login = () => {
    if (inputUsername.value && selectedAvatar.value) {
      username.value = inputUsername.value;
      isLoggedIn.value = true;
      // 可以在這裡清除輸入框，如果需要的話
      // inputUsername.value = '';
      // selectedAvatar.value = ''; // 如果希望每次登入都重選頭像
    }
  };

  const logout = () => {
    isLoggedIn.value = false;
    username.value = '';
    inputUsername.value = ''; // 清空輸入欄位以便下次登入
    selectedAvatar.value = ''; // 清空選擇
    currentGreeting.value = ''; // 清空可能未送出的訊息
  };

  const postGreeting = () => {
    if (!currentGreeting.value || !isLoggedIn.value || hasGreetedToday.value) {
      return; // 如果沒有訊息、未登入或今天已打過招呼，則不執行
    }

    const now = new Date();
    const newGreeting = {
      username: username.value,
      avatar: selectedAvatar.value,
      message: currentGreeting.value,
      timestamp: now.getTime(), // 儲存時間戳 (毫秒)
      dateString: now.toDateString() // 儲存日期字串，方便比較 "今天"
    };

    greetingsOnPond.value.push(newGreeting); // 加入到畫面顯示的陣列
    currentGreeting.value = ''; // 清空輸入框
    saveGreetings(); // 儲存到 localStorage
  };

  // 可選：格式化時間戳顯示
  // const formatTimestamp = (timestamp) => {
  //   const date = new Date(timestamp);
  //   return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // 只顯示 時:分
  // };

  // --- 生命週期鉤子 ---
  onMounted(() => {
    loadGreetings(); // 組件掛載時載入 localStorage 中的今日招呼語
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
    gap: 15px; /* 增加元素間距 */
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: -10px; /* 讓標籤靠近輸入框 */
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
    flex-wrap: wrap; /* 頭像多時可換行 */
  }

  .avatar-selection label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 0; /* 重置 label 底部邊距 */
  }

  .avatar-selection input[type="radio"] {
    margin-right: 5px;
  }

  .avatar {
    font-size: 1.5rem; /* 放大頭像 Emoji */
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
    text-align: left; /* 取消置中 */
  }
  .welcome-message button {
    background-color: #dc3545; /* 登出按鈕用紅色 */
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
    border: 2px solid #a0d8f0; /* 淡藍色邊框模擬池塘 */
    background-color: #eaf7ff; /* 更淡的藍色背景 */
    padding: 15px;
    border-radius: 8px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    gap: 15px; /* 訊息間的間隔 */
  }

  .greeting-item {
    background-color: #fff;
    padding: 10px 15px;
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    display: flex; /* 讓頭像和訊息水平排列 */
    align-items: flex-start; /* 頂部對齊 */
    gap: 10px;
  }

  .greeting-item .user-info {
      display: flex;
      align-items: center; /* 頭像和名字垂直居中 */
      white-space: nowrap; /* 防止名字換行 */
  }

  .greeting-item .username {
    font-weight: bold;
    margin-left: 5px; /* 頭像和名字間的距離 */
  }

  .greeting-item .message {
    margin: 0; /* 重置段落邊距 */
    flex-grow: 1; /* 讓訊息佔用剩餘空間 */
    word-break: break-word; /* 長單字或連結換行 */
  }

  /* 可選的時間戳樣式 */
  .timestamp {
    font-size: 0.8em;
    color: #888;
    margin-top: 5px;
    text-align: right;
  }
  </style>
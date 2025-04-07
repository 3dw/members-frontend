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
      .greeting-form
        textarea(v-model.trim="currentGreeting" placeholder="想說些什麼？")
        //- 移除了 hasGreetedToday 的限制，因為 Firebase 會處理即時更新
        button(@click="postGreeting" :disabled="!currentGreeting") 向大家打招呼！
      //- p(v-else) 你今天已經打過招呼了！ //- 移除這行，允許多次發言

      //- 池塘顯示區塊
      h3.pond-title 池塘訊息 (即時更新)
      .pond(v-if="isLoading")
        p 正在載入池塘訊息...
      .pond(v-else)
        .greeting-item(v-if="sortedGreetings.length === 0")
          p 池塘很安靜... 快來打聲招呼吧！
        //- 使用 sortedGreetings 進行渲染
        .greeting-item(v-for="(greeting) in sortedGreetings" :key="greeting.id || greeting.timestamp") //- 使用唯一 key
          .user-info
            span.avatar {{ greeting.avatar }}
            span.username {{ greeting.username }}:
          p.message {{ greeting.message }}
          span.timestamp {{ formatTimestamp(greeting.timestamp) }}

  </template>

  <script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  // 導入 Firebase Realtime Database 相關函數和你的 bulletinRef
  import { onValue, set, serverTimestamp as rtdbServerTimestamp } from 'firebase/database'; // Realtime Database 使用 set
  import { bulletinRef } from '@/firebase'; // <--- 確認路徑正確

  // --- 響應式狀態 ---
  const isLoggedIn = ref(false);
  const inputUsername = ref('');
  const username = ref('');
  const selectedAvatar = ref('');
  const currentGreeting = ref('');
  const greetingsOnPond = ref([]); // 從 Firebase 讀取的原始數據
  const isLoading = ref(true); // 添加載入狀態
  const availableAvatars = ref(['😊', '🚀', '🌟', '☀️', '💧', '🌳']);

  // Firebase 監聽器的取消函數
  let unsubscribeListener = null;

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

  const postGreeting = async () => { // 改為 async
    if (!currentGreeting.value || !isLoggedIn.value) {
      return;
    }

    const newGreeting = {
      username: username.value,
      avatar: selectedAvatar.value,
      message: currentGreeting.value,
      // 注意：RTDB 通常不直接用 serverTimestamp() 寫入數組。
      // 我們這裡存儲客戶端時間的 ISO 字符串，與 BulletinBoardView 保持一致。
      // 或者你可以使用 push() 來生成唯一 ID 並允許 Firebase 處理時間戳，但這會改變數據結構。
      timestamp: new Date().toISOString(),
    };

    // **重要：模仿 BulletinBoardView 使用 set 覆蓋整個陣列的模式**
    // 這在多人同時寫入時可能會有問題（後寫入的會覆蓋先寫入的），
    // 但為了符合範例，我們先這樣做。
    // 更好的做法是用 push() 或 transaction()。
    const currentGreetings = Array.isArray(greetingsOnPond.value) ? [...greetingsOnPond.value] : [];
    const updatedGreetings = [...currentGreetings, newGreeting];

    try {
      await set(bulletinRef, updatedGreetings); // 使用 set 寫入整個更新後的陣列
      currentGreeting.value = ''; // 成功後清空輸入框
      console.log("訊息已發送到 Firebase RTDB");
    } catch (error) {
      console.error("發送訊息到 Firebase 時出錯:", error);
      alert("發送失敗，請稍後再試。");
    }
  };

  // --- 計算屬性 ---
  // 添加排序功能，最新的訊息在最前面
  const sortedGreetings = computed(() => {
    // 確保 greetingsOnPond.value 是個陣列
    if (!Array.isArray(greetingsOnPond.value)) {
      return [];
    }
    // 複製陣列以避免修改原始數據
    return [...greetingsOnPond.value].sort((a, b) => {
      // 假設 timestamp 是 ISO 格式字符串
      const dateA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
      const dateB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
      return dateB - dateA; // 降序排列
    });
  });

  // 格式化時間戳顯示 (處理 ISO String)
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) return '無效日期'; // 檢查日期是否有效

      const now = new Date();
      const diff = now.getTime() - date.getTime();
      const diffSeconds = Math.floor(diff / 1000);
      const diffMinutes = Math.floor(diff / (1000 * 60));
      const diffHours = Math.floor(diff / (1000 * 60 * 60));
      const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

      if (diffSeconds < 5) return '剛剛';
      if (diffSeconds < 60) return `${diffSeconds} 秒前`;
      if (diffMinutes < 60) return `${diffMinutes} 分鐘前`;
      if (diffHours < 24) return `${diffHours} 小時前`;
      if (diffDays < 7) return `${diffDays} 天前`;
      // 如果超過一周，可以顯示具體日期
      return date.toLocaleDateString('zh-TW', { year: 'numeric', month: 'numeric', day: 'numeric' });

    } catch (e) {
      console.error("格式化時間戳錯誤:", e);
      return '時間錯誤';
    }
  };


  // --- 生命週期鉤子 ---
  onMounted(() => {
    isLoading.value = true; // 開始載入
    // 設置 Firebase Realtime Database 的監聽器
    unsubscribeListener = onValue(bulletinRef, (snapshot) => {
      const data = snapshot.val();
      // Firebase RTDB 在路徑不存在或為空時返回 null
      // BulletinBoardView 似乎期望數據是一個陣列
      if (Array.isArray(data)) {
        greetingsOnPond.value = data;
      } else if (data === null) {
        greetingsOnPond.value = []; // 如果 Firebase 中沒數據，設為空陣列
        console.log("Firebase 'bulletin' 路徑目前為空。");
      } else {
          // 如果數據不是陣列也不是 null (例如是個物件)，這可能表示數據結構不符預期
          console.warn("從 Firebase 收到的數據不是預期的陣列格式:", data);
          // 可以嘗試轉換，或報錯，或設置為空
          greetingsOnPond.value = [];
      }
      isLoading.value = false; // 載入完成
      console.log("從 Firebase RTDB 更新數據:", greetingsOnPond.value);
    }, (error) => {
      // 監聽錯誤處理
      console.error("監聽 Firebase RTDB 時出錯:", error);
      isLoading.value = false; // 出錯也視為載入結束（雖然是失敗的）
      alert("無法從資料庫載入訊息，請檢查網路連線或稍後再試。");
    });
  });

  onUnmounted(() => {
    // 組件卸載時取消 Firebase 監聽器，防止內存洩漏
    if (unsubscribeListener) {
      unsubscribeListener();
      console.log("Firebase RTDB 監聽器已卸載");
    }
  });

  </script>

  <style scoped>
  /* 樣式基本不變，可以沿用之前的 */
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
      margin-right: 5px; /* 給用戶信息和消息之間一點空間 */
  }

  .greeting-item .username {
    font-weight: bold;
    margin-left: 5px;
  }

  .greeting-item .message {
    margin: 0;
    flex-grow: 1;
    word-break: break-word;
    white-space: pre-wrap; /* 保留換行符 */
  }

  .timestamp {
    font-size: 0.8em;
    color: #888;
    margin-left: auto; /* 將時間戳推到右側 */
    padding-left: 10px; /* 與消息保持一點距離 */
    white-space: nowrap; /* 防止時間換行 */
    align-self: flex-end; /* 在 flex item 內部底部對齊（雖然這裡效果不明顯） */
  }
  </style>
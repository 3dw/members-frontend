<template lang="pug">
  .div.privacy-policy
    h1.ui.header 隱私權政策
    p 請詳閱並同意以下內容

    h2 資料檢視權

    p 歡迎您使用我們的服務！我們非常重視您的隱私權保護，特此說明自主學習促進會會員協作系統(以下簡稱本平台)的互助旗內容是僅對會員公開的。

    p 程式並會需要您的會員Email以登錄。

    p 使用本服務時，請您謹慎考慮哪些資訊是您願意公開於會員平台。我們鼓勵您只分享您願意讓他人知道的資訊。

    p 為了保護您的個人隱私，請不要在互助旗上放置任何敏感或過於完整的個人身份資訊。

    p 為了您的資料安全，本平台提供了資料下載備份的選項。您可以隨時下載您的互助旗資料，以便於自行管理和備份。您也可以在登入後刪除您自己的旗幟。

    h2.ui.header 個人資料備份
    p 請先登入，才能下載個人資料備份。

    button.ui.primary.button(@click="downloadBackup" v-if="user && user.uid")
      | 下載個人資料備份
    button.ui.primary.button(@click="toggleLogin" v-else)
      | 登入
  </template>

  <script>
  export default {
    name: "PrivacyPolicyView",
    props: {
      user: {
        required: false,
        default: () => {
          return {}
        }
      }
    },
    methods: {
      downloadBackup() {
        // Example: Download user data as a JSON file
        const userData = this.user
        const blob = new Blob([JSON.stringify(userData)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = "backup.json";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      },
      loginGoogle(autoredirect, keeploggedin) {
        this.$emit('loginGoogle', autoredirect, keeploggedin);
      },
      toggleLogin() {
        this.$emit('toggleLogin')
      }
    }
  };
  </script>

  <style scoped>
  .privacy-policy {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9; /* 更淺的背景色 */
    border: 1px solid #e0e0e0; /* 更淺的邊框色 */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加陰影 */
  }

  h1.ui.header {
    text-align: center;
    color: #333;
    font-size: 2em;
  }

  h2.ui.header {
    color: #555;
    font-size: 1.5em;
    margin-top: 1.5em;
  }

  p {
    line-height: 1.6;
    margin-bottom: 16px;
    font-size: 1em;
    color: #555;
    text-align: left;
  }

  ul {
    margin-bottom: 16px;
    font-size: 1em;
    color: #555;
    text-align: left;
    padding-left: 1.5em;
  }

  li {
    margin-bottom: 8px;
  }

  button.ui.primary.button {
    display: block;
    width: fit-content;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button.ui.primary.button:hover {
    background-color: #0056b3;
  }

  img {
    width: 100%;
    max-width: 300px;
    margin: 20px auto;
    display: block;
    border-radius: 8px;
  }
  </style>

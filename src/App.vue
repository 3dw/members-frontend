<template lang="pug">
header
  nav.ui.fixed.top.menu
    button.no-border.ui.item(@click="toggleSidebar")
      i.icon.bars
    RouterLink.item.fat-only(to="/")
      i.home.icon
    RouterLink.item(to="/about")
      i.info.icon
      span.fat-only 關於我們
    // RouterLink.item(to="/doc")
      i.book.icon
      span.fat-only 本會
      | 章程
    RouterLink.item(to='/podcast', name="podcast")
      i.vedio.play.icon
      | 影音
      span.fat-only 短講
    RouterLink.item(to="/books")
      i.book.icon
      | 出版品
    RouterLink.item.fat-only(to="/faq")
      i.help.icon
      span 常見
      | 問題
    RouterLink.item(to="/donate")
      i.money.icon
      | 捐款
    RouterLink.item.fat-only(to="/donate_records")
      i.history.icon
      | 芳名錄
    // RouterLink.item(v-if="!uid && !devMode", to="/history")
    //   i.history.icon
    //   | 歷史
    // RouterLink.item(v-if="uid && !devMode",to="/create_faq")
    //   i.plus.icon
    //   | 新增
    //   span.fat-only 問答
    //RouterLink.item.fat-only(v-if="uid", to="/feedback")
      i.magic.icon
      | 回饋
    .right.menu
      button.no-border.ui.item(@click="toggleLogin", v-if="!uid")
        i.user.icon
        | 登入
        span.fat-only / 註冊
      .ui.simple.dropdown.item(v-else)
        img.ui.avatar.image(v-if="photoURL" :src="photoURL" alt="User Avatar" @error="useDefaultAvatar" @load="onImageLoad")
        i.user.icon(v-else)
        i.caret.down.icon
        .menu
          RouterLink.item(to="/profile")
            i.flag.icon
            | 自我介紹
          RouterLink.item(v-if="uid", to="/maps", name="maps")
            i.map.icon
            | 會員地圖
          RouterLink.item(to="/match_time")
            i.calendar.icon
            | 找夥伴
          .divider
          RouterLink.item(to='/faq', name="faq")
            i.help.icon
            | 自學FAQ協作
          // RouterLink.item(v-if="uid", to='/create_faq', name="create-faq")
          //   i.plus.icon
          //   | 新增問答
          // RouterLink.item(v-if="uid", to='/changelog', name="changelog")
          //   i.history.icon
          //   | 變更紀錄
          // .divider
          RouterLink.item(to="/bulletin_board")
            i.comments.icon
            | 會員討論區
          RouterLink.item(v-if="uid", to='/hello', name="HelloView")
            i.handshake.icon
            | 池塘打招呼
          .divider
          RouterLink.item(v-if="uid", to='/githubembeded', name="githubembeded")
            i.linkify.icon
            | 自促會Github開源專案
          RouterLink.item(v-if="uid", to='/privacy-policy', name="privacy")
            i.lock.icon
            | 隱私權政策
          .divider(v-if="uid && devMode")
          RouterLink.item(v-if= "uid && devMode", to='/connection', name="ConnectionView")
            i.handshake.icon
            | 接力顯示板
          RouterLink.item(v-if="uid && devMode", to='/notes', name="NotesView")
            i.handshake.icon
            | 數位便利貼牆
          RouterLink.item(v-if="uid && devMode", to='/troubletree', name="TroubleTreeView")
            i.handshake.icon
            | 煩惱樹屋
          .divider
          button.no-border.ui.item(v-if="uid", @click="logout")
            i.sign-out.icon
            | 登出
.small-spacer
.ui.sidebar.vertical.menu#side-menu(:class="{'hidden': !sidebarVisible}")
  RouterLink.item(to='/', exact='', name="home")
    i.home.icon
    | 首頁
  RouterLink.item(to='/admin', name="admin", v-if="uid && user && user.isAdmin")
    i.cogs.icon
    | 管理
  RouterLink.item(to='/about', name="about")
    i.info.icon
    | 關於我們

  RouterLink.item(to='/donate', name="donate")
    i.money.icon
    | 捐款支持
  RouterLink.item(to="/donate_records")
    i.history.icon
    | 芳名錄

  RouterLink.item(to='/podcast', name="podcast")
    i.vedio.play.icon
    | 影音短講
  RouterLink.item(to='/books', name="books")
    i.book.icon
    | 本會出版品
  RouterLink.item(to='/action', name="action")
    i.users.icon
    | 修法行動
  RouterLink.item(to='/yearly_report', name="doc")
    i.file.icon
    | 年度工作報告
  RouterLink.item(to='/doc', name="doc")
    i.book.icon
    | 本會章程
  RouterLink.item(to='/history', name="history")
    i.history.icon
    | 自學修法及本會歷史
  RouterLink.item(to='/join-us', name="join-us")
    i.user.icon
    | 入會申請
  RouterLink.item(to='/faq', name="faq")
    i.help.icon
    | 常見問題
  RouterLink.item(to='/friend-sites', name="friend-sites")
    i.linkify.icon
    | 友站連結
  RouterLink.item.fat-only(to='/feedback', name="feedback")
    i.magic.icon
    | 回饋
  //- RouterLink.item(to='/slido', name="slidoMeeting")
  //-   i.linkify.icon
  //-   | slido會員大會
  a.item(href="https://sites.google.com/view/autoalearn/%E9%A6%96%E9%A0%81", target="_blank", rel="noopener noreferrer")
    i.linkify.icon
    | 舊版網站
  RouterLink.item(to='/slido', name="slidoMeeting")
    i.question.icon
    | Slido(會員大會使用)
.ui.sidebar.bg(:class="{'hidden': !sidebarVisible}", @click="toggleSidebar")
.ui.container#main-container
  RouterView(
    @toggleLogin="toggleLogin",
    @locate="locate",
    :zoom="zoom",
    :center="center",
    :uid="uid",
    :isInApp="isInApp",
    :user="user",
    :users="users",
    :photoURL="photoURL",
    :email="email",
    :emailVerified="emailVerified",
    :devMode="devMode"
  )
Login(
  v-if="showLogin"
  :showLogin="showLogin"
  :isInApp="false"
  @toggleLogin="toggleLogin",
  @logout="logout",
  @registerWithEmail="registerWithEmail",
  @loginWithEmail="loginWithEmail",
  @resendVerificationEmail="resendVerificationEmail"
)
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { set, push, ref, onValue, get, remove } from 'firebase/database'; // 從firebase/database導入onValue函式用於資料即時讀取
import { getAuth, EmailAuthProvider,
    setPersistence,
    browserLocalPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification,
    inMemoryPersistence
 } from 'firebase/auth'
import { app, usersRef, database } from './firebase'; // 導入Firebase相關配置和參考

import InApp from 'detect-inapp'; // 導入InApp以偵測瀏覽器內部環境
import Login from './components/Login.vue'

const inApp = new InApp(window.navigator.userAgent);
  // 初始假設為 InApp 庫的偵測結果
const actualInApp = inApp.isInApp;

const auth = getAuth(app); // 獲取Firebase身份驗證實例



export default defineComponent({
  name: 'App',
  components: {
    Login
  },
  data() {
    const obj:any = {};
    const obj1:any = {};
    return {
      // 使用修正後的 actualInApp
      isInApp: actualInApp, // 檢測是否在應用內部
      showLogin: false,
      sidebarVisible: false,
      uid: '',
      users: obj,
      user: obj1,
      photoURL: '',
      email: '',
      emailVerified: false,
      devMode: false,
      zoom: 7,
      center: [23.5330, 121.0654]
    }
  },
  watch: {
    // 監聽路由變化
    '$route'() {
      // 路由變化時關閉側邊欄
      this.sidebarVisible = false;
    }
  },
  mounted() {
    const vm = this;
    auth.onAuthStateChanged((user) => {
      if (user) {
        vm.uid = user.uid;
        vm.email = user.email || '';
        vm.photoURL = user.photoURL || 'https://we.alearn.org.tw/logo-new.png';
        vm.emailVerified = user.emailVerified;
        vm.updateUserData(user);
      } else {
        vm.uid = '';
        vm.email = '';
        vm.photoURL = '';
        vm.emailVerified = false;
      }
    });
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible
    },
    logout () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this; // 儲存當前Vue實例
      auth.signOut().then(function() {
        vm.user = null; // 清除用戶資料
        vm.users = {}; // 清除所有用戶資料
        vm.uid = ''; // 清除用戶ID
        vm.photoURL = ''; // 清除用戶頭像URL
        vm.$nextTick().then(() => {
          vm.$router.push('/'); // 導航回首頁
        })
      });
    },
    async registerWithEmail(normalRegister_email: string, normalRegister_password: string, normalRegister_keeploggedin: boolean) {
      if (!normalRegister_password || typeof normalRegister_password !== 'string') {
        alert('接收的密碼無效，請確認輸入');
        return;
      }

      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, normalRegister_email, normalRegister_password);
        const user = userCredential.user;

        if (user && user.email) {
          this.email = user.email;
          this.uid = user.uid;
          this.photoURL = 'https://we.alearn.org.tw/logo-new.png';

          const pvdata = [{
            displayName: this.email?.split('@')[0] || 'Unknown',
            email: this.email,
            photoURL: this.photoURL
          }];
          this.user = { email: this.email, photoURL: this.photoURL, providerData: pvdata };

          const userRef = ref(database, 'users/' + this.uid);
          const snapshot = await get(userRef);
          if (!snapshot.exists()) {
            await set(userRef, {
              email: this.email,
              name: this.email?.split('@')[0] || 'Unknown',
              connect_me: this.email,
              photoURL: this.photoURL,
              login_method: 'email'
            });
          }

          await sendEmailVerification(user);
          alert('驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。');
          this.logout();
        } else {
          console.error('User or user email is undefined after registration');
          alert('註冊過程中發生錯誤，請稍後再試。');
        }
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          alert('此電子郵件已被使用，請使用其他電子郵件或嘗試登入。');
        } else {
          console.error("註冊失敗：", error);
          alert("註冊失敗：" + error.message);
        }
      }
    },
    async loginWithEmail(autoredirect: boolean, normalRegister_email: string, normalRegister_password: string, normalRegister_keeploggedin: boolean) {
      try {
        if (normalRegister_keeploggedin) {
          await setPersistence(auth, browserLocalPersistence);
        } else {
          await setPersistence(auth, inMemoryPersistence);
        }
        const userCredential = await signInWithEmailAndPassword(auth, normalRegister_email, normalRegister_password);
        const user = userCredential.user;

        if (!user.emailVerified) {
          alert('您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。');
          this.resendVerificationEmail()
          this.logout();
          return;
        }

        this.emailVerified = true;
        console.log('登入成功：', user);
        this.updateUserData(user);

        // 強制更新視圖
        this.$forceUpdate();

        // 使用 nextTick 確保視圖更新完成
        await this.$nextTick();

        if (autoredirect && user.emailVerified) {
          this.$nextTick().then(() => {
            this.$router.push('/profile');
          });
        }
      } catch (error: any) {
        console.error("登入失敗：", error);
        let errorMessage = "登入失敗：";
        if (error.message.includes('auth/wrong-password')) {
          errorMessage = "密碼錯誤，請檢查後再試。";
        } else if (error.message.includes('auth/user-not-found')) {
          errorMessage = "帳號不存在，請確認您的電子郵件地址。";
        } else if (error.message.includes('auth/invalid-email')) {
          errorMessage = "無效的電子郵件地址，請重新輸入。";
        } else if (error.message.includes('auth/too-many-requests')) {
          errorMessage = "嘗試次數過多，請稍後再試。";
        } else {
          errorMessage += error.message;
        }
        alert(errorMessage);
      }
    },
    resendVerificationEmail() {
      const user = getAuth().currentUser;
      if (user) {
        sendEmailVerification(user).then(() => {
          console.log('驗證郵件已重新發送。');
        }).catch((error) => {
          console.error('重新發送驗證郵件失敗：', error);
          // alert('重新發送驗證郵件失敗，請稍後再試。');
        });
      }
    },
    updateUserData(user: any) {
      if (!user) {
        console.error('User is undefined in updateUserData');
        return;
      }
      this.email = user.email || null;
      this.uid = user.uid;
      this.photoURL = user.photoURL ? decodeURI(user.photoURL) : "https://we.alearn.org.tw/logo-new.png";
      this.emailVerified = user.emailVerified;

      const pvdata = user.providerData || [{
        displayName: this.email?.split('@')[0] || 'Unknown',
        email: this.email,
        photoURL: this.photoURL
      }];

      this.updateUserInfo(pvdata);
    },

    locate: function (h:any, gotoMap: boolean) {
      if (h && h.latlngColumn) {
        const coordinates = h.latlngColumn.split(',').map(Number);
        if (coordinates.length === 2 && !isNaN(coordinates[0]) && !isNaN(coordinates[1])) {
          this.center = coordinates;
          this.zoom = 10;
          console.log("更新位置到:", this.center);

          // 使用 nextTick 確保子組件接收到最新的 props
          this.$nextTick().then(() => {
            console.log('中心位置已更新並傳遞給子組件');
          });

          if (gotoMap) {
            console.log('前往地圖頁面');
            this.$router.push('/maps');
          }
        } else {
          console.error("無效的座標格式:", h.latlngColumn);
        }
      } else {
        console.error("無法定位：缺少座標資訊");
      }
    },

    updateUserInfo(pvdata: any[]) {
      if (this.users && this.uid && this.users[this.uid]) {
        this.user = { ...this.users[this.uid], providerData: pvdata };
        if (this.user.latlngColumn) {
          this.locate(this.user, false);
        }
      } else {
        this.fetchUserData(pvdata);
      }
    },

    async fetchUserData(pvdata: any[]) {
      try {
        onValue(usersRef, (snapshot) => {
          const data = snapshot.val();
          this.users = data;
          if (this.uid && this.users && this.users[this.uid]) {
            this.user = { ...this.users[this.uid], providerData: pvdata };
            // console.log(this.user.photoURL);
            if (this.user.photoURL && this.user.photoURL != 'undefined') {
              this.photoURL = this.user.photoURL;
            }
//
//            if (this.user.latlngColumn) {
//              this.locate(this.user, false);
//            }
          } else {
            this.user = { providerData: pvdata };
          }
        }, (error) => {
          this.user = { providerData: pvdata };
          console.error("Error fetching users:", error);
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
  }
})

</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  z-index: 1000 !important;
}

nav a.router-link-exact-active {
  color: black !important;
  font-weight: bold;
  background-color: hsla(160, 100%, 37%, 1) !important;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.no-border {
  border: none !important;
}

.ui.sidebar {
  transition: transform .3s ease, opacity .3s ease, visibility .3s ease !important;
  z-index: 1000;
  position: fixed;
  top: 0 !important;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  opacity: 1;
  visibility: visible;
}

.ui.sidebar.bg {
  z-index: 2 !important; /* 設定一個低值 */
  background-color: rgba(180, 180, 180, 0.62); /* 確保有背景色 */
  width: 100vw;
  cursor: pointer;
}

.ui.sidebar.hidden {
  opacity: 0;
  visibility: hidden !important;
  transition: all 0s linear !important;
  transform: translateX(-100%); /* 隱藏時向左滑動 */
}

</style>

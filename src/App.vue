<template lang="pug">
header
  nav.ui.fixed.top.menu
    button.no-border.ui.item(@click="toggleSidebar")
      i.icon.bars
    RouterLink.item(to="/")
      i.home.icon
    RouterLink.item(to="/about")
      i.info.icon
      | 關於我們
    .right.menu
      button.no-border.ui.item(@click="toggleLogin")
        i.user.icon
        | 登入
.small-spacer
.ui.sidebar.vertical.menu#side-menu(:class="{'hidden': !sidebarVisible}")
  RouterLink.item(to='/', exact='', name="home")
    i.home.icon
    | 首頁
  RouterLink.item(to='/about', name="about")
    i.info.icon
    | 關於我們
.ui.sidebar.bg(:class="{'hidden': !sidebarVisible}", @click="toggleSidebar")
.ui.container
  RouterView(@toggleLogin="toggleLogin")
Login(
  v-if="showLogin"
  :showLogin="showLogin"
  :isInApp="false"
  @toggleLogin="toggleLogin"
)
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import InApp from 'detect-inapp'; // 導入InApp以偵測瀏覽器內部環境
import Login from './components/Login.vue'

const inApp = new InApp(window.navigator.userAgent);
  // 初始假設為 InApp 庫的偵測結果
const actualInApp = inApp.isInApp;


export default defineComponent({
  name: 'App',
  components: {
    Login
  },
  data() {
    return {
      // 使用修正後的 actualInApp
      isInApp: actualInApp, // 檢測是否在應用內部
      showLogin: false,
      sidebarVisible: false
    }
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible
    }
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

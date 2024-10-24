
<template>
  <header>
    <nav class="ui fixed top menu">
      <RouterLink to="/" class="item">Home</RouterLink>
      <RouterLink to="/about" class="item">About</RouterLink>
    </nav>
  </header>
  <div class="small-spacer"></div>
  <div class="ui container">
    <RouterView @toggleLogin="toggleLogin"/>
  </div>
  <Login v-if="showLogin" :showLogin="showLogin" :isInApp="false" @toggleLogin="toggleLogin"  />
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
      showLogin: false
    }
  },
  methods: {
    toggleLogin() {
      this.showLogin = !this.showLogin
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
  color: var(--color-text) !important;
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

</style>

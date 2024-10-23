import './assets/main.css';
// Add this line to import Semantic UI CSS
import 'semantic-ui-css/semantic.min.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
//# sourceMappingURL=main.js.map
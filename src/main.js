import { createApp, reactive } from 'vue';
import DefaultTheme from './themes/default/Default';
import App from './App';
import router from './router';
import store from './store';

const app = createApp(App).use(store).use(router);

app.config.globalProperties.$globals = reactive({});
app.config.globalProperties.$globals.theme = DefaultTheme;

app.mount('#app');

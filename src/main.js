import { createApp } from "vue";
import App from "./App.vue";
import LoadScript from "vue-plugin-load-script";
import router from './router/index';

createApp(App).use(router).mount("#app");

App.use(LoadScript);

import { createApp } from "vue";
import App from "./App.vue";
import LoadScript from "vue-plugin-load-script";


createApp(App).mount("#app");
App.use(LoadScript);

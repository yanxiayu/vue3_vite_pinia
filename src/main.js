import { createApp } from "vue";
import { createPinia } from "pinia";
// 引入pinia插件，实现数据的持久化存储
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
// 引入初始化样式文件
import "@/styles/common.scss";
// 引入懒加载指令插件
import { lazyPlugin } from "@/directives/index.js";
// 引入全局组件
import { componentPlugin } from "@/components/index.js";

const app = createApp(App);
const pinia = createPinia();
// 注册持久化插件
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);
app.mount("#app");

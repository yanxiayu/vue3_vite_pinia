import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// 引入初始化样式文件
import "@/styles/common.scss";

// useIntersectionObserver用于判断元素是否在视口区域
import { useIntersectionObserver } from "@vueuse/core";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");

// 定义全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    // el:指令绑定的那个元素 -> img
    // binding：binding.value 指令等于号后面绑定的表达式的值 -> 图片url
    // console.log(el, binding.value);
    useIntersectionObserver(
      // 监听的对象 target -> el
      el,
      // isIntersecting值为布尔值，监听当前监听的el是否进入视口区域
      ([{ isIntersecting }]) => {
        // console.log(isIntersecting);
        if (isIntersecting) {
          // 进入视口区域，img.src = url 会触发默认事件，请求图片资源，发送网络请求
          el.src = binding.value
        }
      }
    );
  },
});

// 定义懒加载插件

// useIntersectionObserver用于判断元素是否在视口区域
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el:指令绑定的那个元素 -> img
        // binding：binding.value 指令等于号后面绑定的表达式的值 -> 图片url
        // console.log(el, binding.value);
        const { stop } = useIntersectionObserver(
          // 监听的对象 target -> el
          el,
          // isIntersecting值为布尔值，监听当前监听的el是否进入视口区域
          ([{ isIntersecting }]) => {
            // console.log(isIntersecting);
            if (isIntersecting) {
              // 进入视口区域，img.src = url 会触发默认事件，请求图片资源，发送网络请求
              el.src = binding.value;
              stop()
            }
          }
        );
      },
    });
  },
};

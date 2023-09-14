// 把components中的所有组件都进行全局化注册
// 通过插件的方式
import ImageView from "./ImageView/index.vue";
import Sku from "./XtxSku/index.vue";

export const componentPlugin = {
  // 固定的install方法，有一个固定的参数app
  install(app) {
    // 可通过app.进行开发
    // app.compontent("组件名字",组件配置对象)
    app.component("XtxImageView", ImageView);
    app.component("XtxSku", Sku);
  },
};

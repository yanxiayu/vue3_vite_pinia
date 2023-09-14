// createRouter：创建router实例对象
// createWebHistory：创建路由的工作模式history

import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          // 当为默认的时候，路径可以置空。当页面访问的路径是 / 的时候，Home页面也会默认渲染
          path: "",
          component: Home,
        },
        {
          path: "category/:id",
          component: Category,
        },
      ],
    },
    {
      path: "/login",
      component: Login
    },
  ],
});

export default router;

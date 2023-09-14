// 封装分类数据业务相关代码
import { onBeforeRouteUpdate } from "vue-router";
import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export function useCategory() {
  // 定义响应式数据，根据接口文档判断数据类型
  const categoryData = ref({});
  // 通过useRoute获取路由参数，route实例对象，包含路由的配置信息
  const route = useRoute();
  // 调用接口获取数据
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id); // params与定义路由时的传参相关
    categoryData.value = res.result;
  };
  onMounted(() => {
    // 一开始调用请求没有传递参数
    getCategory();
  });

  // 解决路由缓存方案2：当路由参数发生变化的时候，可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // console.log("路由变化了");
    // 存在问题：在最新的路由参数请求最新的分类数据
    getCategory(to.params.id);
    // console.log(to);
  });

  return {
    categoryData,
  };
}

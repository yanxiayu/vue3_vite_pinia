// 封装轮播图相关的业务代码
import { getBannerAPI } from "@/apis/home.js";
import { ref, onMounted } from "vue";

export function useBanner() {
  const bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    bannerList.value = res.result;
  };

  onMounted(() => {
    getBanner();
  });

  return {
    bannerList,
  }
}

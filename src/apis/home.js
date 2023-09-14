import httpInstance from "@/utils/http";

// 获取banner接口
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}

//获取新鲜好物
export function findNewAPI() {
  return httpInstance({
    url: "/home/new",
  });
}

// 获取人气推荐接口
export function findHotAPI() {
  return httpInstance({
    url: "/home/hot",
  });
}

// 获取所有商品模块
export function getGoodsAPI() {
  return httpInstance({
    url: "/home/goods",
  });
}

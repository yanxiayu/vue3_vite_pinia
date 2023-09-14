import httpInstance from "@/utils/http";

// 获取banner接口
export function getBannerAPI() {
  return httpInstance({
    url: "/home/banner",
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

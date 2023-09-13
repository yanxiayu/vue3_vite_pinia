import httpInstance from "@/utils/http";

// 获取banner接口
export function getBannerAPI() {
  return httpInstance({
    url:'/home/banner',
  })
}
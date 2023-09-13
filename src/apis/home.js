import httpInstance from "@/utils/http";

// 获取banner接口
export function getBannerAPI() {
  return httpInstance({
    url:'/home/banner',
  })
}

//获取新鲜好物
export function findNewAPI() {
  return httpInstance({
    url:'/home/new'
  })
}
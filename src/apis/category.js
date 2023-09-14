// 因为http封装的axios是默认导出，所以这里可以自己命名
import request from "@/utils/http";

export function getCategoryAPI(id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}
// 因为http封装的axios是默认导出，所以这里可以自己命名
import request from "@/utils/http";

// 获取分类
export function getCategoryAPI(id) {
  return request({
    url: "/category",
    params: {
      id,
    },
  });
}

// 获取二级分类 分类id
export function getCategoryFilterAPI(id) {
  return request({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};

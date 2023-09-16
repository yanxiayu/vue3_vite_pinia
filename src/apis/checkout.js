// 封装结算页的接口
import request from "@/utils/http";

// 生成订单-结算页
export function getCheckInfoAPI() {
  return request({
    url: "/member/order/pre",
  });
}

// 创建订单
export function createOrderAPI(data) {
  return request({
    url: "/member/order",
    method: 'POST',
    data 
  });
}

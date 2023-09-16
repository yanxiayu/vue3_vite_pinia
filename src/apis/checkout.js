// 封装结算页的接口
import request from "@/utils/http";

// 生成订单-结算页
export function getCheckInfoAPI() {
  return request({
    url: "/member/order/pre",
  });
}
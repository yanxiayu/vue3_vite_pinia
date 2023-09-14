import request from '@/utils/http'

export function getDetailAPI(id) {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}
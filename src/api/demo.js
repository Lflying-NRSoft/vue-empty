import request from '@/utils/request'

export function getList() {
  return request({
    url: '/url',
    method: 'get'
  })
}
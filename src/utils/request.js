// 首先导入 axios
import axios from 'axios'
import router from '@/router'
import { Message, } from 'element-ui'

// 自己创建一个axios对象
const request = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? process.env.VUE_APP_BASE_API : process.env.VUE_APP_SERVER_URL,
  timeout: 10000   // 请求超时，10秒
})

// 请求拦截器
request.interceptors.request.use(config => {
  // let token = localStorage.getItem('_authing_token')
  // if(token) {
  //   config.headers.Authorization = token
  // }
  // 在发送请求之前做些什么
  config.headers.Authorization = '12345'
  return config;
}, function (error) {
  // 处理请求错误
  return Promise.reject(error);
});

// 相应拦截器
request.interceptors.response.use(response => {
  // 在2xx范围内的任何状态代码都会触发此功能
  // 处理响应数据
  if (response.data && response.data.success === false) {
    Message({
      message: response.data.message,
      type: 'error',
      showClose: true,
      dangerouslyUseHTMLString: true,
      duration: 3000,
      customClass: 'zZindex'
    })
  } else if (response.data && response.data.error) {
    Message({
      message: response.data.error.code + '  ' + response.data.error.msg + '  ' + response.data.error.url,
      type: 'error',
      showClose: true,
      dangerouslyUseHTMLString: true,
      duration: 3000,
      customClass: 'zZindex'
    })
  }
  return response.data;
}, (error) => {
  // 任何超出2xx范围的状态代码都会触发此功能
  // 处理响应错误
  // 暂时没处理
  if(error.response.status == 402 || error.response.status == 403) { // 403 token超时
    authenticationClient.logout()
    router.push('/login')
    Message({
      message:'登录超时，请重新登录',
      type:'error',
      showClose: true,
      duration: 3000,
      customClass: 'zZindex'
    })
  }else if (error.response.status === 404) {
    Message({
      message: '404 路由找不到！ ' + error.response.data.message,
      type: 'error',
      showClose: true,
      duration: 3000,
      customClass: 'zZindex'
    })
  } else if (error.response.status === 504) {
    Message({
      message: '网络连接错误' + ':' + error.response.data,
      type: 'error',
      showClose: true,
      duration: 3000,
      customClass: 'zZindex'
    })
  } else {
    Message({
      message: error.response.data.msg || error.response.data.exception || error.response.data || error.response || error.response.data.message || error,
      type: 'error',
      showClose: true,
      duration: 3000,
      customClass: 'zZindex'
    })
  }
  return Promise.reject(error);
});

export default request  // 导出自定义创建的 axios 对象
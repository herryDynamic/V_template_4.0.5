import axios from 'axios'// 引用官方的axios库，用于我们创建自己封装的axios
import store from '../store'
import { Notify } from 'vant' //引用vant组件中的Toast 用于弹出提示框
import router from '../router' //引用router，用于在某些错误情况下跳转路由

//设置axios的基础url，用于标识项目的地址
// axios.defaults.baseURL = 'http://192.168.22.126:8118/integral-web'

axios.defaults.baseURL = process.env.VUE_APP_BACKEND_URL

/*
 * request的请求拦截器:请求前的操作
 */
axios.interceptors.request.use(config => {
  store.state.isShowLoading = true // 加载中动画显示
  store.state.isShowLoadFailed=false  //加载失败页面关闭


  //调取登录token
  config.headers.Authorization = localStorage.getItem("gotoken")
  localStorage.getItem("gotoken")//store.getToken()

  return config
}, error => { Promise.reject(error) })

/**
  * response接收拦截器：接收后的操作
  */
// 
axios.interceptors.response.use(response => {

  store.state.isShowLoading = false // 加载中动画关闭

  //此处表示我们的请求让服务器正确的接收了，并且返回了数据（状态码 200）
  // 
  return response
}, error => {
  //此处表示服务器没有正确的处理我们的请求，然后给我们返回了错误的数据信息
  //status 表示 错误的http状态码
  if (!error.response) {
    // Notify({ type: 'warning', duration: 1000, message: '服务器出现问题，请稍后重试！' });
    // router.push({ name: 'login' });
    store.state.isShowLoadFailed=true  //加载失败页面显示
    store.state.isShowLoading = false // 加载中动画关闭
  }
  const status = error.response.status
  switch (status) { // 其他情况补充处理
    case 500:
      Notify({ type: 'warning', duration: 1000, message: '服务器响应出现问题，请稍后重试！' });
      break;
    case 400:
      Notify({ type: 'warning', duration: 1000, message: '服务器无法理解请求参数，请稍后重试！' });
      break;
    case 401:
      Notify({ type: 'warning', duration: 1000, message: '访问资源未授权，请登陆后重试！' });
      router.push({ name: 'login' });
      break;
    case 403:
      Notify({ type: 'warning', duration: 1000, message: '请求资源暂时不可用，请登陆后重试！' });
      router.push({ name: 'login' });
      break;
    case 404:
      Notify({ type: 'warning', duration: 1000, message: '请求资源暂不存在，请稍后重试！' });
      break;
  }
  return Promise.reject(error)
}
)
export default axios

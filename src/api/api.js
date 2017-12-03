import axios from 'axios'

// 全局配置
const BASE = '' //"http://112.74.33.139:8080"

// 拦截所有响应
axios.interceptors.response.use((res) => {
  if (res.data.code === 1) {
    console.log('未登录,响应码为：',res.data);
  } else if (res.data.code !== 0) {
    console.log('请求出错，请求错误码为：', res.data)
  }
  return res
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.data = JSON.stringify(config.data)
  config.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


// 登录接口
export const LoginTest = params => { return axios.get(`${BASE}/api/test_login`)}
// 获取用户信息接口
export const getUserInfo = params => { return axios.get(`${BASE}/api/get_userInfo`)}
// 获取商品列表接口(page,page)
export const getGoods = params => { return axios.get(`${BASE}/api/get_goods_by_page?page=${params.page}&pageSize=${params.pageSize}`) }
// 兑换商品接口(goodsId)
export const exchangeGoods = params => { return axios.post(`${BASE}/api/exchange_good `, params) }
// 获取微信jssdk配置参数接口(url)
export const getSdkConfig = params => { return axios.get(`${BASE}/api/js_sdk_config `, params) }
// 赚取积分(获取文章列表)接口
export const getArticles = params => { return axios.get(`${BASE}/api/get_article_list `) }
// 获取兑换记录
export const getRecords = params => { return axios.get(`${BASE}/api/exchange_list `) }




const axios = require('axios')

// var _baseUrl = 'https://bird.ioliu.cn/v1?url=https://api.21cake.com'

var _baseUrl = '/api'

// 获取首页数据
export function queryIndexData (param) {
  const url = _baseUrl + '/' + param
  return axios.get(url).then(res => Promise.resolve(res.data))
}

// 获取分类数据
export function queryGallery (param) {
  const url = _baseUrl + '/' + param
  return axios.get(url).then(res => Promise.resolve(res.data))
}

// 获取商品规格
export function queryGoodsSize (param) {
  const url = _baseUrl + '/' + param
  return axios.get(url).then(res => Promise.resolve(res.data))
}

// 获取商品详情
export function queryGoodsDetails(param) {
  const url = _baseUrl + '/' + param
  return axios.get(url).then(res => Promise.resolve(res.data))
}
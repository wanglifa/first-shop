import request from '/untils/request.js'
const url = {
  Carousels: '/index/carousels',
  RecommendProduct: '/index/items/rec',
  newList: '/index/items/new'
}
const host = 'https://www.imoocdsp.com'
for (let key in url) {
  if(url.hasOwnProperty(key)){
        url[key] = host + url[key]
    }
}
export default {
  carousels() {
    return request(url.Carousels)
  },
  recommendProduct() {
    return request(url.RecommendProduct)
  },
  newList() {
    return request(url.newList)
  }
}
import request from '/untils/request.js'
const url = {
  Carousels: '/index/carousels',
  RecommendProduct: '/index/items/rec',
  newList: '/index/items/new',
  cats: '/cats'
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
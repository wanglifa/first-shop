import request from '/untils/request.js'
const url = {
  cats: '/cats',
  search: '/items/search',
  searchByCat: '/items/searchByCat',
  searchById: '/items/searchById'
}
export default {
  cats() {
    return request(url.cats)
  },
  search(data) {
    return request(url.search,'post', data,  'application/x-www-form-urlencoded')
  },
  searchByCat(data) {
    return request(url.searchByCat, 'post', data,  'application/x-www-form-urlencoded')
  },
  searchById(data) {
    return request(url.searchById, 'post', data, 'application/x-www-form-urlencoded')
  }
}
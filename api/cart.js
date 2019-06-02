import request from '/untils/request.js'
const url = {
  QueryItems: '/item/queryItems',
  
}
export default {
  QueryItems(data) {
    return request(url.QueryItems, 'post', data, 'application/x-www-form-urlencoded')
  },

}
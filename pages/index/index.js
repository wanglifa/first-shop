import index from '/api/index.js'
Page({
  data: {
    carousels: [],
    newItemList: [],
    recommendProduct: [],
    msg: '你好'
  },
  onReady() {
    index.carousels().then(
      (res => {
        this.setData({carousels: res.data})
      })
    )
    index.recommendProduct().then(
      res => {
        this.setData({recommendProduct: res.data})
      }
    )
    index.newList().then(
      res => {
        console.log(res.data)
        this.setData({newItemList: res.data})
      }
    )
  }
});

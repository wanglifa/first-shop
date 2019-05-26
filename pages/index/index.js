const app = getApp()
import index from '/api/index.js'
Page({
  data: {
    carousels: []
  },
  onReady() {
    index.carousels().then(
      (res => {
        this.setData({carousels: res.data})
      })
    )
    index.recommendProduct().then(
      res => {
        console.log(res)
      }
    )
    index.newList().then(
      res => {
        console.log(res)
      }
    )
  }
});

import index from '/api/index.js'
Page({
  data: {
    carousels: [],
    newItemList: [],
    recommendProduct: [],
    msg: '你好'
  },
  onPullDownRefresh () {
    this.initData()
  },
  onReady() {
    this.initData()
  },
  initData() {
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
  },
  showItem(e) {
    const {itemId} = e.target.dataset
    my.navigateTo({
      url: `/pages/query/item/item?id=${itemId}`
    })
  },
  showItemList(e) {
    const {item} = e.target.dataset
    console.log(item.type)
    if(item.type === 1) {
      my.navigateTo({
        ulr: `/pages/query/item/item?id=${item.itemId}`
      })
    }
  }
});

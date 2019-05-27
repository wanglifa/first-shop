import category from '/api/category.js'
Page({
  data: {
    cats: []
  },
  onLoad() {},
  onReady() {
    this.initData()
  },
  initData() {
    category.cats().then(
      res => {
        console.log(res.data)
        this.setData({
          cats: res.data
        })
      }
    )
  },
  searchItems(e) {
    const { value } = e.detail
    if (value.trim() !== '') {
      my.navigateTo({
        url: '/pages/query/list/list?searchType=word&itemName=' + value
      })
    }
  }
});

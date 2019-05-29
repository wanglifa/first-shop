import category from '/api/category.js'
Page({
  data: {
    headerImages: [],
    item: {},
    itemContentArr: []
  },
  onLoad(params) {
    const {id} = params
    console.log(id)
    category.searchById({itemId: id}).then(res => {
      console.log(res.data)
      const {headerImages} = res.data 
      this.setData({
        headerImages: JSON.parse(headerImages),
        item: res.data,
        itemContentArr: JSON.parse(res.data.content)
      })
    })
  },
});

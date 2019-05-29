import category from '/api/category.js'
Page({
  data: {
    titleName: "",
    itemList: ''
  },
  onLoad(params) {
    const {catName, searchType, catId} = params
    
    if (searchType === 'cat') {
      category.searchByCat({catId}).then(res => {
        this.setData({
          titleName: catName,
          itemList: res.data
        })
      })
    } else if (searchType === 'word') {
      category.search({itemName}).then(
        res => {
          this.setData({
            titleName: '搜索结果',
            itemList: res.data
          })
        }
      )
    }
  },
});

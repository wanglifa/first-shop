import category from '/api/category.js'
Page({
  data: {},
  onLoad(params) {
    const {itemName, searchType, catId} = params
    
    if (searchType === 'cat') {
      category.searchByCat({catId}).then(res => {
        console.log(res)
      })
    } else if (searchType === 'word') {
      category.search({itemName}).then(
        res => {
          console.log(res)
        }
      )
    }
  },
});

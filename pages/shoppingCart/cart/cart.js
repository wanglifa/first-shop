const app = getApp()
import cart from '/api/cart.js'
Page({
  data: {
    emptyHidden: false,
    fullHidden: true,
    cartArray: [],
    itemIds: '',
    cartArrayData: [],
    finalCartItemList: [],
    total: '0.00',
    count: 0,
    isAllChecked: false,
    visibleAll: 'unselect',
    checkListArr: []
  },
  onLoad() {
    
  },
  // 每次页面显示都重新请求购物车接口获取新的商品
  onShow() {
    // 从缓存中拿数据
    this.setData({
      cartArray:  my.getStorageSync({
        key: 'cartArray', // 缓存数据的key
      }).data
    })
    // 先判断是否有缓存的数据，如果没有就等于一个空数组
    if(this.data.cartArray && this.data.cartArray.length > 0) {
      this.setData({
        emptyHidden: true,
        fullHidden: false
      })
      this.getItemIds()
      this.getCartData()
    }
  },
  getItemIds() {
    this.setData({
      itemIds: this.data.cartArray.map(item => {
        return item.itemId
      }).join()
    })
  },
  getCartData() {
    cart.QueryItems({
      itemIds: this.data.itemIds
    }).then(res => {
      this.setData({
        cartArrayData: res.data
      })
      this.getNewArray()
    })
  },
  // 得到整合后的新数组
  getNewArray() {
    this.setData({
      finalCartItemList: this.data.cartArray.map((item,index) => {
        return {...item, ...this.data.cartArrayData[index], isSelect: 0}
      })
    })
    console.log(this.data.finalCartItemList) 
  },
  // 跳转到首页
  helpYourself() {
      my.switchTab({
          url: '/pages/index/index'
      })
  },
  checkAllBox() {
    this.setData({
      isAllChecked: !this.data.isAllChecked
    })
    var copy = []
    if (this.data.checkListArr.length !== this.data.finalCartItemList.length) {
      copy = this.data.finalCartItemList
      this.setData({
        visibleAll: 'select',
        finalCartItemList: this.data.finalCartItemList.map(item => {
          item.isSelect = 1
          return item
        })
      })
    } else {
      copy = []
      this.setData({
        visibleAll: 'unselect',
        finalCartItemList: this.data.finalCartItemList.map(item => {
          item.isSelect = 0
          return item
        })
      })
    }
    this.setData({
      checkListArr: copy
    })
    this.getTotal()
  },
  getTotal() {
    this.setData({
      total: (this.data.checkListArr.reduce((prev,current) => {
        return prev + current.priceDiscount * current.counts
      },0)/100).toFixed(2)
    })
  },
  touchItem(e) {
    const {item,index} = e.target.dataset
    var copy = this.data.finalCartItemList
    var newCheckArr = this.data.checkListArr
    if (this.data.finalCartItemList[index].isSelect === 1) {
      copy[index].isSelect = 0
      newCheckArr = this.data.checkListArr.filter(item1 => {
        return item1.itemId !== item.itemId
      })
      this.setData({
        visibleAll: 'unselect'
      })
    }else {
      copy[index].isSelect = 1
      newCheckArr.push(item)
    }
    if (newCheckArr.length === copy.length) {
      this.setData({
        visibleAll: 'select'
      })
    }
    this.setData({
      finalCartItemList: copy,
      checkListArr: newCheckArr
    })
    this.getTotal()
  }
});

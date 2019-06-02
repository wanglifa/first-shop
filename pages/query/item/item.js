import category from '/api/category.js'
Page({
  data: {
    headerImages: [],
    item: {},
    itemContentArr: [],
    animationInfo: {},
    animationOpacity: 0,
    cartIco: 'cart-empty',
    cartAddList: [],
    index: -1
  },
  onLoad(params) {
    const {id} = params
    category.searchById({itemId: id}).then(res => {
      const {headerImages} = res.data 
      this.setData({
        headerImages: JSON.parse(headerImages),
        item: res.data,
        itemContentArr: JSON.parse(res.data.content)
      })
    })
  },
  onShow() {
    // 创建动画
    var animation = my.createAnimation({
      duration: 500
    })
    this.animation = animation
    this.setData({
      // 导出动画效果到页面
      animationInfo: animation.export()
    })
  },
  addToCart() {
    this.setData({
      animationOpacity: 1
    })
    this.showAddToCartAnimation()
    this.cartItemIncrease()

  },
  cartItemIncrease() {
    const itemId = this.data.item.id
    let cartArray = my.getStorageSync({
      key: 'cartArray', // 缓存数据的key
    }).data
    // 先判断是否有缓存的数据，如果没有就等于一个空数组
    if(!cartArray) {
      cartArray = []
    }
    // 把当前的对象赋值给这个数组
    let cartItem = {itemId,counts:1}
    cartArray.forEach((item,index) => {
      if (item.itemId === cartItem.itemId) {
        this.setData({
          index
        })
      }
    })
    if (this.data.index > -1) {
      cartArray[this.data.index].counts+=1
    } else {
      cartArray.push(cartItem)
    }
    

    my.setStorageSync({
      key: 'cartArray', // 缓存数据的key
      data: cartArray, // 要缓存的数据
    });

  },
  showAddToCartAnimation() {
    // 旋转的同时在水平方向移动
    this.animation.rotate(-180).translateX('370rpx').step()
    this.setData({
      animationInfo: this.animation.export()
    })

    // 复原动画
    setTimeout(() => {
      // 这里因为需要先将动画的小圆点透明度变为0，然后再还原动画，所以不能同时设置
      this.setData({
        animationOpacity: 0,
        cartIco: 'cart-full'
      })
      this.animation.rotate(0).translateX(0).step({
        duration: 0
      })
      // 再透明度变为0后再还原动画
      setTimeout(() => {
        this.setData({
          animationInfo: this.animation.export()
        })
      },550)
    },600)
  }
});

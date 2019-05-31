import category from '/api/category.js'
Page({
  data: {
    headerImages: [],
    item: {},
    itemContentArr: [],
    animationInfo: {},
    animationOpacity: 0,
    cartIco: 'cart-empty'
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

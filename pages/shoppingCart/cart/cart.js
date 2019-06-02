Page({
  data: {
    emptyHidden: false,
  },
  onLoad() {
    
  },
  // 跳转到首页
  helpYourself() {
      my.switchTab({
          url: '/pages/index/index'
      })
  }
});

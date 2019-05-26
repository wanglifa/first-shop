App({
  name: 'lifa',
  age: 18,
  body: {
    leg: 120,
    eyes: 'big'
  },
  baseUrl: 'https://www.imoocdsp.com',
  make() {
    console.log('aaa')
  }
  // onLaunch(options) {
  //   // 第一次打开
  //   // options.query == {number:1}
  //  console.log('第一次打开')
  // },
  // onShow(options) {
  //   // 从后台被 scheme 重新打开
  //   console.log('页面展示')
  // },
  // onHide() {
  //   console.log('页面隐藏')
  // },
  // onError() {
  //   console.log('页面报错')
  // }
});

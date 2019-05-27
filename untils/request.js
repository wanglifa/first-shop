const app = getApp()
export default function request(url, method='post', data={}, headers='application/json') {
  return new Promise((resolve, reject) => {
    let option = {
      url: app.baseUrl + url,
      method,
      headers: {'content-type': headers},
      data
    }
    my.showLoading({
      content: '疯狂加载中...'
    })
    my.request({
      ...option,
      dataType: 'json',
      success: (res) => {
          if(res.data.status === 200) {
            resolve(res.data)
          } else {
            reject(res.data)
          }
      },
      fail: () => {
        reject('失败')
      },
      complete: () => {
        my.hideLoading()
      }
    })
  })
}
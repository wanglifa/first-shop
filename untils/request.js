export default function request(url, method='post', data={}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method,
      data
    }
    my.request({
      ...option,
      success: (res) => {
          resolve(res.data)
      },
      fail: () => {
        reject('失败')
      }
    })
  })
}
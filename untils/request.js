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
          if(res.data.status === 200) {
            resolve(res.data)
          } else {
            reject(res.data)
          }
      },
      fail: () => {
        reject('失败')
      }
    })
  })
}
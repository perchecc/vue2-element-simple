import { Toast } from 'vant'

/**
 * 通过高德插件AMap.Geolocation 获取定位
 * @param {*} callback 
 */
export const getAppLocation = callback => {
  // callback({ longitude: '118.78016', latitude: '31.96945' })
  AMap.plugin('AMap.Geolocation', function () {
    const geolocation = new AMap.Geolocation({
      // 是否使用高精度定位，默认：true
      enableHighAccuracy: true,
      // 设置定位超时时间，默认：无穷大
      timeout: 10000,
      // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
      buttonOffset: new AMap.Pixel(10, 20),
      //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      zoomToAccuracy: true,
      //  定位按钮的排放位置,  RB表示右下
      buttonPosition: 'RB'
    })

    geolocation.getCurrentPosition(function (status, result) {
      if (status == 'complete') {
        const data = result.position
        const lat = data.lat
        const lng = data.lng
        callback({ longitude: lng, latitude: lat })
      } else {
        // callback({
        //   longitude: '119.92952161834413',
        //   latitude: '30.402114085627606'
        // })
        callback({
          longitude: '118.741301',
          latitude: '31.938236'
        })
        console.log(result) // 定位出错
      }
    })
  })
}

// 经纬度返解
export const getAddressByAxis = (lng, lat) => {
  let resultCall
  var url =
    'https://restapi.amap.com/v3/geocode/regeo?key=5c9afca30204841b7935520b70615dc6' +
    '&extensions=base&batch=false&location=' +
    lng +
    ',' +
    lat
  // eslint-disable-next-line no-undef
  $.ajax({
    url: url,
    async: false,
    success: result => {
      if (Number(result.status) === 1) {
        resultCall = result
      } else {
        Toast('暂未获取到位置信息')
      }
    }
  })
  return resultCall
}

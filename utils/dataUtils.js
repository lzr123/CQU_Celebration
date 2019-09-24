function validateInputStr(input_str) {
  if ((typeof(input_str) == undefined) || (input_str === "") || (input_str == null)) {
    wx.showToast({
      title: "请填写车牌号",
      icon: "none",
      duration: 3000
    })
    return false
  } else {
    return true
  }
}

function dumpVehicleData(e, page) {
  var brand = page.data.vehicle_brand[e.detail.value.vehicle_brand]
  var license = e.detail.value.vehicle_id
  var color = e.detail.value.vehicle_color_idx == 5 ? e.detail.value.vehicle_color_other : page.data.vehicle_color[e.detail.value.vehicle_color_idx]
  var driver_name = e.detail.value.driver_name
  var driver_sex = e.detail.value.driver_gender == "male" ? 1 : 0
  var driver_tel = e.detail.value.driver_tel

  var data = null

  if (!validateInputStr(license)) {
    wx.showToast({
      title: "请输入车牌号",
      icon: "none",
      duration: 2000
    })
  } else if (!validateInputStr(color)) {
    wx.showToast({
      title: "请选择车辆颜色",
      icon: "none",
      duration: 2000
    })
  } else if (!validateInputStr(driver_name)) {
    wx.showToast({
      title: "请输入司机名字",
      icon: "none",
      duration: 2000
    })
  } else if (!validateInputStr(driver_tel)) {
    wx.showToast({
      title: "请输入司机电话",
      icon: "none",
      duration: 2000
    })
  } else {
    var data = {
      "brand": brand,
      "license": license,
      "color": color,
      "driver_name": driver_name,
      "driver_sex": driver_sex,
      "driver_tel": driver_tel
    }
  }

  return data

}

function dumpVisitorData(e, page) {
  var company = e.detail.value.visitor_unit
  var level = e.detail.value.visitor_level == 4 ? e.detail.value.visitor_level_other : page.data.visitor_level[e.detail.value.visitor_level]
  var retinues = e.detail.value.visitor_count
  var arrive_datetime = [e.detail.value.visitor_arrive_date, 
                      e.detail.value.visitor_arrive_time].join(' ')
  var leave_datetime = [e.detail.value.visitor_leave_date,
                    e.detail.value.visitor_leave_time].join(' ')
  var arrive_flight = e.detail.value.visitor_arrive_flight
  var leave_flight = e.detail.value.visitor_leave_flight
  var hotel = e.detail.value.visitor_hotel_idx == 5 ? e.detail.value.visitor_hotel_other : page.data.hotel_list[e.detail.value.visitor_hotel_idx]

  var greeter_number = e.detail.value.contactor_ID
  var greeter_name = e.detail.value.contactor_name
  var greeter_sex = e.detail.value.contactor_gender == 'male' ? 1 : 0
  var greeter_company = e.detail.value.contactor_unit
  var greeter_tel = e.detail.value.contactor_tel

  var data = null

  if (!validateInputStr(company)) {
    wx.showToast({
      title: '请输入来宾单位',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(level)) {
    wx.showToast({
      title: '请选择或输入来宾级别',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(retinues)) {
    wx.showToast({
      title: '请输入来宾人数',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(arrive_datetime)) {
    wx.showToast({
      title: '请输入来宾到达日期时间',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(leave_datetime)) {
    wx.showToast({
      title: '请输入来宾离开日期时间',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(arrive_flight)) {
    wx.showToast({
      title: '请输入来宾到达航班/列车',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(leave_flight)) {
    wx.showToast({
      title: '请输入来宾离开航班/列车',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(hotel)) {
    wx.showToast({
      title: '请输入来宾住宿信息',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(greeter_number)) {
    wx.showToast({
      title: '请输入联系人工号',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(greeter_name)) {
    wx.showToast({
      title: "请输入联系人名字",
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(greeter_company)) {
    wx.showToast({
      title: '请输入联系人单位',
      icon: 'none',
      duration: 2000
    })
  } else if (!validateInputStr(greeter_tel)) {
    wx.showToast({
      title: '请输入联系人电话',
      icon: 'none',
      duration: 2000
    })
  } else {
    data = {
      company: company,
      level: level,
      retinues: retinues,
      arrive_datetime: arrive_datetime,
      leave_datetime: leave_datetime,
      arrive_flight: arrive_flight,
      leave_flight: leave_flight,
      hotel: hotel,

      greeter_number: greeter_number,
      greeter_name: greeter_name,
      greeter_sex: greeter_sex,
      greeter_company: greeter_company,
      greeter_tel: greeter_tel
    }
  }

  return data
}

module.exports = {
  validateInputStr: validateInputStr,
  dumpVehicleData: dumpVehicleData,
  dumpVisitorData: dumpVisitorData
}
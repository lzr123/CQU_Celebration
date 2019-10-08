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
  } else {

    data = {
      company: company,
      level: level
    }

    if (retinues.length != 0) {
      data.retinues = retinues
    }

    if (arrive_datetime.length != 0) {
      data.arrive_datetime = arrive_datetime
    }
    
    if (leave_datetime.length != 0) {
      data.leave_datetime = leave_datetime
    }     
    
    if (arrive_flight.length != 0) {
      data.arrive_flight = arrive_flight
    }

    if (leave_flight.length != 0) {
      data.leave_flight = leave_flight
    }

    if (hotel.length != 0) {
      data.hotel = hotel
    }

    if (greeter_number.length != 0) {
      data.greeter_number = greeter_number
    }

    if (greeter_name.length != 0) {
      data.greeter_name = greeter_name
    }

    if (greeter_company.length != 0) {
      data.greeter_company = greeter_company
    }

    if (greeter_tel.length != 0) {
      data.greeter_tel = greeter_tel
    }

  }

  data.greeter_sex = greeter_sex

  return data
}

module.exports = {
  validateInputStr: validateInputStr,
  dumpVehicleData: dumpVehicleData,
  dumpVisitorData: dumpVisitorData
}
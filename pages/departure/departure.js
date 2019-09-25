// pages/departure/departure.js
var util = require("../../utils/util.js")
var network = require("../../utils/network.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    vehicle_brand: [
      "奥迪", "大众", "长安", "商务", "考斯特"
    ],


    visitor_data: null,

    visitor_info: null,

    select_start_date: "",
    select_start_time: "",

    select_end_date: "",
    select_end_time: "",
    select_brand_idx: 0,

    available_vehicles: null
  },

  bindSearchVehicleSubmit: function(e) {

    var self = this

    if (typeof(this.data.visitor_info) != 'null') {
      
      var start_time = this.data.select_start_date + ' ' + this.data.select_start_time
      var end_time = this.data.select_end_date + ' ' + this.data.select_end_time
      var brand = this.data.vehicle_brand[this.data.select_brand_idx]

      var query_data = {
        query_type: "time",
        start_time: start_time,
        end_time: end_time,
        brand: brand
      }

      network.searchCarCond(query_data, self)
    }
  },

  bindSearchVisitorSubmit: function(e) {

    var self = this
    var company = e.detail.value.company
    var data = null

    if ((e.detail.value.company != '') && (typeof(e.detail.value.comapny) != undefined)) {
      network.searchVisitor(self)

      setTimeout(function () {

        for (var i = 0; i < self.data.visitor_data.length; i++) {

          if (self.data.visitor_data[i].company === company) {
            data = self.data.visitor_data[i]
            break
          }
        }

        var arrive = data.arrive_datetime.split(' ')
        var arrive_date = arrive[0]
        var arrive_time = arrive[1]

        var leave = data.arrive_datetime.split(' ')
        var leave_date = leave[0]
        var leave_time = leave[1]

        data = {
          id: data.id,
          unit: data.company,
          count: data.retinues,
          level: data.level,
          arrival_date: arrive_date,
          arrival_time: arrive_time,
          arrival_flight: data.arrive_flight,
          leave_date: leave_date,
          leave_time: leave_time,
          leave_flight: data.leave_flight
        }

        self.setData({
          visitor_info: data
        })

      }, 1500)

    }
    
  },

  bindStartDateChange: function(e) {
    this.setData({
      select_start_date: e.detail.value
    })
  },

  bindStartTimeChange: function(e) {
    this.setData({
      select_start_time: e.detail.value
    })
  },

  bindEndDateChange: function(e) {
    this.setData({
      select_end_date: e.detail.value
    })
  },

  bindEndTimeChange: function(e) {
    this.setData({
      select_end_time: e.detail.value
    })
  },

  bindVehicleBrandChange: function(e) {
    this.setData({
      select_brand_idx: e.detail.value
    })
  },

  bindDispathSubmit: function(e) {
    
    var vehicle_list = e.detail.value.vehicle_dispatch

    for(var i = 0; i < vehicle_list.length; i++) {

      var car_id = this.data.available_vehicles[i].id
      var guest_id = this.data.visitor_info.id

      var data = {
        car_id: car_id,
        guest_id: guest_id,
        start_time: this.data.select_start_date + ' ' + this.data.select_start_time,
        back_time: this.data.select_end_date + ' ' + this.data.select_end_time
      }

      network.addDispatch(data)

      setTimeout(function () {}, 1000)

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    var crt_datetime = util.formatTime(new Date())
    var crt_split_time = crt_datetime.split(' ')
    var crt_date = crt_split_time[0]
    var crt_time = crt_split_time[1].split(':').slice(0, 2).join(':')

    this.setData({
      select_start_date: crt_date,
      select_start_time: crt_time,

      select_end_date: crt_date,
      select_end_time: crt_time
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
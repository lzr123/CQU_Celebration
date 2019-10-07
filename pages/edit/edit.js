// pages/edit/edit.js
var util = require("../../utils/util.js")
var network = require("../../utils/network.js")
var dataUtils = require("../../utils/dataUtils.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

    data_types: [
      {
        value: "vehicle",
        checked: true,
        label: "车辆"
      },
      {
        value: "visitor",
        checked: false,
        label: "来宾"
      }
    ],
    vehicle_brand: [
      "奥迪", "大众", "长安", "商务", "考斯特"
    ],
    vehicle_capacity: [
      3, 3, 3, 5, 20
    ],
    vehicle_color: [
      "咖色", "黑色", "银灰", "白色", "红色", "其他"
    ],

    visitor_level: [
      "副厅级", "正部级", "副部级", "以下", "其他"
    ],

    hotel_list: [
      "融汇丽笙酒店", "科苑酒店", "丽苑酒店", "上泉坊酒店", "不住宿", "其他"
    ],

    input_value: "",

    select_type: "vehicle",

    select_brand_idx: 0,
    select_color_idx: 0,


    select_level_idx: 0,
    select_hotel_idx: 0,
    arrival_date: "",
    arrival_time: "",
    leave_date: "",
    leave_time: ""
  },

  bindTypeChange: function(e) {
    this.setData({
      select_type: e.detail.value
    })
  },

  bindVehicleBrandChange: function(e) {
    this.setData({
      select_brand_idx: e.detail.value
    })
  },

  bindVehicleColorChange: function(e) {
    this.setData({
      select_color_idx: e.detail.value
    })
  },

  /**
   * submit button click callback
   */
  bindFormSubmit: function(e) {

    var self = this
  
      
    if (this.data.select_type == "vehicle") {
      var vehicle_data = dataUtils.dumpVehicleData(e, self)

      if (vehicle_data != null) {

        network.addCar(vehicle_data)

      }
    } else if (this.data.select_type == "visitor") {

      var visitor_data = dataUtils.dumpVisitorData(e, self)

      if (visitor_data != null) {

        console.log(visitor_data)

        network.addVisitor(visitor_data)
      }
    }

    this.setData({
      input_value: "",
      select_brand_idx: 0,
      select_color_idx: 0,

      select_hotel_idx: 0,
      select_level_idx: 0
    })
  },

  /**
   * visitor level picker callback
   */
  bindVisitorLevelChange: function(e) {
    this.setData({
      select_level_idx: e.detail.value
    })
  },

  /**
   * arrival date picker callback
   */
  bindArrivalDateChange: function(e) {
    this.setData({
      arrival_date: e.detail.value
    })
  },

  /**
   * arrival time picker callback
   */
  bindArrivalTimeChange: function(e) {
    this.setData({
      arrival_time: e.detail.value
    })
  },

  /**
   * leave date picker callback
   */
  bindLeaveDateChange: function(e) {
    this.setData({
      leave_date: e.detail.value
    })
  },

  /**
   * leave time picker callback
   */
  bindLeaveTimeChange: function(e) {
    this.setData({
      leave_time: e.detail.value
    })
  },

  /**
   * visitor hotel picker callback
   */
  bindVisitorHotelChange: function(e) {
    this.setData({
      select_hotel_idx: e.detail.value
    })
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
    var crt_datetime = util.formatTime(new Date()).split(' ')
    var crt_date = crt_datetime[0]
    var crt_time = crt_datetime[1].split(':').slice(0, 2).join(':')
    
    this.setData({
      arrival_date: crt_date,
      arrival_time: crt_time,
      leave_date: crt_date,
      leave_time: crt_time
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
// pages/visitor_detail/visitor_detail.js
var global = require("../../utils/global.js")
var network = require("../../utils/network.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

    visitor_level: global.visitor_level,
    hotel_list: global.hotel_list,


    arrive_date: "",
    arrive_time: "",
    leave_date: "",
    leave_time: "",

    visitor_data: {
      id: "",
      company: "",
      level: "",
      select_level_idx: "",
      retinues: 0,
      arrive_datetime: "",
      leave_datetime: "",

      arrige_flight: "",
      leave_flight: "",
      hotel: "",
      select_hotel_idx: "",
      
      greeter_number: "",
      greeter_name: "",
      greeter_sex: "",
      greeter_company: "",
      greeter_tel: ""
    }

  },

  bindFormSubmit: function(e) {
    var self = this

    console.log(e)

    wx.showModal({
      title: "警告",
      content: "确认修改记录？",
      showCancel: true,
      cancelText: "取消",
      confirmText: "确定",

      success: function(res) {
        if (res.confirm == 1) {
          var detail = e.detail.value

          var data = {
            company: detail.visitor_unit,
            level: detail.visitor_level == 4 ? detail.visitor_level_other : self.data.visitor_level[detail.visitor_level],
            retinues: detail.visitor_count,
            arrive_datetime: detail.visitor_arrive_date + ' ' + detail.visitor_arrive_time,
            leave_datetime: detail.visitor_leave_date + ' ' + detail.visitor_leave_time,
            arrive_flight: detail.visitor_arrive_flight,
            leave_flight: detail.visitor_leave_flight,
            hotel: detail.visitor_hotel_idx == 5 ? detail.visitor_hotel_other : this.data.hotel_list[detail.visitor_hotel_idx],

            greeter_number: detail.contactor_ID,
            greeter_name: detail.contactor_name,
            greeter_sex: detail.contactor_gender == 'male' ? 1 : 0,
            greeter_company: detail.contactor_unit,
            greeter_tel: detail.contactor_tel
          }

          network.updateVisitor(self.data.visitor_data.id, data, self)

          wx.navigateBack({
            delta: 1
          })
        }
      },

      fail: function(res) {

      }
    })


  },

  bindDeleteTap: function(res) {
    var self = this

    wx.showModal({
      title: '警告',
      content: '确认删除该条记录？',
      showCancel: true,
      cancelText: "取消",
      confirmText: "确定",

      success: function(res) {
        if (res.confirm == 1) {
          network.deleteVisitor(self.data.visitor_data.id)

          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  },

  bindVisitorLevelChange: function(e) {
    var data = this.data.visitor_data

    data.select_level_idx = e.detail.value

    this.setData({
      visitor_data: data
    })
  },

  bindVisitorHotelChange: function(e) {
    var data = this.data.visitor_data

    data.select_hotel_idx = e.detail.value

    this.setData({
      visitor_data: data
    })
  },

  bindArrivalDateChange: function(e) {
    this.setData({
      arrive_date: e.detail.value
    })
  },

  bindArrivalTimeChange: function(e) {
    this.setData({
      arrive_time: e.detail.value
    })
  },

  bindLeaveDateChange: function(e) {
    this.setData({
      leave_date: e.detail.value
    })
  },

  bindLeaveTimeChange: function(e) {
    this.setData({
      leave_time: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data_item = JSON.parse(options.item)

    var item = data_item.item

    var level_idx = 4
    var hotel_idx = 5

    for(var i = 0; i < this.data.visitor_level.length; i++) {
      if (this.data.visitor_level[i] === item.level) {
        level_idx = i
      }
    }

    for(var i = 0; i < this.data.hotel_list.length; i++) {
      if (this.data.hotel_list[i] === item.hotel) {
        hotel_idx = i
      }
    }

    var arrive = item.arrive_datetime.split(' ')
    var leave = item.leave_datetime.split(' ')

    var arrive_date = arrive[0]
    var arrive_time = arrive[1].split(':').slice(0, 2).join(':')

    var leave_date = leave[0]
    var leave_time = leave[1].split(':').slice(0, 2).join(':')

    this.setData({
      visitor_data: {
        id: item.id,
        company: item.company,
        level: item.level,
        select_level_idx: level_idx,
        retinues: item.retinues,
        arrive_datetime: item.arrive_datetime,
        leave_datetime: item.leave_datetime,
        arrive_flight: item.arrive_flight,
        leave_flight: item.leave_flight,
        hotel: item.hotel,
        select_hotel_idx: hotel_idx,

        greeter_number: item.greeter_number,
        greeter_name: item.greeter_name,
        greeter_sex: item.greeter_sex,
        greeter_company: item.greeter_company,
        greeter_tel: item.greeter_tel
      },

      arrive_date: arrive_date,
      arrive_time: arrive_time,

      leave_date: leave_date,
      leave_time: leave_time
    })
    
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
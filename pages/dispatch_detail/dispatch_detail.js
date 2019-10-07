// pages/dispatch_detail/dispatch_detail.js
var network = require("../../utils/network.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dispatch_info: null,
    id: null
  },

  bindDeleteTap: function(e) {
    var self = this

    if (typeof(this.data.id) != 'null') {
      wx.showModal({
        title: '警告',
        content: '确认删除该条记录？',
        showCancel: true,
        cancelText: "取消",
        confirmText: "确定",

        success: function (res) {

          if (res.confirm == 1) {
            network.deleteDispatch(self.data.id)

            wx.navigateBack({
              delta: 1
            })
          }
        },
          

        fail: function (res) {

        }
      })
    }

    
  },

  bindFormSubmit: function(e) {
    
    var self = this

    var data = {
      car_id: this.data.car_id,
      guest_id: this.data.guest_id,
      start_time: this.data.dispatch_info.start_date + ' ' + this.data.dispatch_info.start_time,
      back_time: this.data.dispatch_info.back_date + ' ' + this.data.dispatch_info.back_time
    }

    if (typeof (this.data.id) != 'null') {
      wx.showModal({
        title: '警告',
        content: '确认修改该条记录？',
        showCancel: true,
        cancelText: "取消",
        confirmText: "确定",

        success: function (res) {
          
          if (res.confirm == 1) {
            network.updateDispatch(self.data.id, data)

            wx.navigateBack({
              delta: 1
            })
          }
        },

        fail: function (res) {

        }
      })
    }

  },

  bindBackTimeChange: function(e) {
    
    var dispatch_info = this.data.dispatch_info

    dispatch_info.back_time = e.detail.value

    this.setData({
      dispatch_info: dispatch_info
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var dispatch_data = JSON.parse(options.item)

    var start_time = dispatch_data.start_time
    var back_time = dispatch_data.back_time

    var start_date = start_time.split(' ')[0]
    var start_time = start_time.split(' ')[1].split(':').slice(0, 2).join(':')

    var back_date = back_time.split(' ')[0]
    var back_time = back_time.split(' ')[1].split(':').slice(0, 2).join(':')
    
    var car_info = dispatch_data.car_info
    var guest_info = dispatch_data.guest_info

    var data = {
      company: guest_info.company,
      retinues: guest_info.retinues,
      level: guest_info.level,
      greeter_name: guest_info.greeter_name,
      greeter_tel: guest_info.greeter_tel,
      start_date: start_date,
      start_time: start_time,
      back_date: back_date,
      back_time: back_time,
      license: car_info.license,
      driver_name: car_info.driver_name,
      driver_tel: car_info.driver_tel,
      brand: car_info.brand
    }

    this.setData({
      dispatch_info: data,
      id: dispatch_data.id,
      car_id: car_info.id,
      guest_id: guest_info.id
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
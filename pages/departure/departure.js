// pages/departure/departure.js
var util = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitor_info: {
      unit: "北京大学",
      count: 3,
      level: "正厅级",
      arrival_date: "2019-10-10",
      arrival_time: "10:10",
      arrival_flight: "CA6826",
      leave_date: "2019-10-13",
      leave_time: "11:02",
      leave_flight: "G1950"
    },
    current_date: "",
    select_date: "",
    current_time: "",
    select_time: ""
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
      current_date: crt_date,
      current_time: crt_time,
      select_date: crt_date,
      select_time: crt_time
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
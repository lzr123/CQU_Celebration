// pages/query/query.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentDate: "",
    currentTime: "",
    selectDate: "",
    selectTime:"",

    result_items: [
      {vehicle_id: "渝B31234", driver_name: "李若菡", departure_time: "13:04", return_time: "15:17", dest: "机场T3"}
    ]
  },

  /**
   * 日期选择器回调
   */
  bindDatePickerChange: function(e) {
    
    this.setData({
      selectDate: e.detail.value
    })

  },

  /**
   * 时间选择器回调
   */
  bindTimePickerChange: function(e) {
    
    this.setData({
      selectTime: e.detail.value
    })
  },

  /**
   * 重置按钮回调
   * 将时间选择器重置为当前时间
   */
  resetBtnClicked: function (e) {
    var crtDateTime = util.formatTime(new Date()).split(' ')

    var crtDate = crtDateTime[0]

    var crtTime = crtDateTime[1].split(":")
    crtTime = crtTime.slice(0, 2).join(":")

    this.setData({
      currentDate: crtDate,
      currentTime: crtTime,
      selectDate: crtDate,
      selectTime: crtTime
    })
      
  },

  /**
   * 查询按钮回调
   * 通过网络获取查询数据并填表
   */
  searchBtnClicked: function(e) {
    // --- TODO ---
    // get result list by request
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
    var crtDateTime = util.formatTime(new Date()).split(' ')

    var crtDate = crtDateTime[0]

    var crtTime = crtDateTime[1].split(":")
    crtTime = crtTime.slice(0, 2).join(":")

    this.setData({
      currentDate: crtDate,
      currentTime: crtTime,
      selectDate: crtDate,
      selectTime: crtTime
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
    
    // --- TODO ---
    // update result list by request
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
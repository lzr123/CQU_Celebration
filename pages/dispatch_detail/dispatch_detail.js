// pages/dispatch_detail/dispatch_detail.js
var network = require("../../utils/network.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dispatch_info: null
  },

  bindDeleteTap: function(e) {
    var self = this

    wx.showModal({
      title: '警告',
      content: '确认删除该条记录？',
      showCancel: true,
      cancelText: "取消",
      confirmText: "确定",

      success: function(res) {
        network.deleteDispatch(self.dispatch_info.id)

        wx.navigateBack({
          delta: 1
        })
      },

      fail: function(res) {

      }
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
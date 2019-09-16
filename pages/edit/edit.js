// pages/edit/edit.js
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
        value: "driver",
        checked: false,
        label: "司机"
      },
      {
        value: "visitor",
        checked: false,
        label: "来宾"
      }
    ],
    vehicle_area_list: [
      "渝A", "渝B", "渝C", "渝F", "渝G", "渝H"
    ],
    select_type: "车辆",
    vehicleID_area:  "渝A"
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
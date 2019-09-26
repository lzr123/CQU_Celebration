// pages/management/management.js
var network = require("../../utils/network.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data_types: [
      {
        value: 'dispatch',
        checked: false,
        label: '调派'
      },
      {
        value: 'vehicle',
        checked: true,
        label: '车辆'
      },
      {
        value: 'visitor',
        checked: false,
        label: '来宾'
      }
    ],

    vehicle_brand: [
      "奥迪", "大众", "长安", "商务", "考斯特", "全部"
    ],

    network_cond: true,

    select_type: "vehicle",

    vehicle_data: null,
    select_vehicle_brand_idx: 5,

    visitor_data: null,

    dispatch_data: null
    

  },

  bindVehicleBrandChange: function(e) {
    this.setData({
      select_vehicle_brand_idx: e.detail.value
    })
  },

  bindTypeChange: function(e) {
    this.setData({
      select_type: e.detail.value,
      vehicle_data: null,
      visitor_data: null,
      dispatch_data: null
    })
  },

  bindSearchTap: function(e) {

    var self = this

    if (this.data.network_cond == true) {

      if (this.data.select_type === 'vehicle') {
        network.searchCar(this)
      } else if (this.data.select_type === 'visitor') {
        network.searchVisitor(this)
      } else if (this.data.select_type === 'dispatch') {
        network.searchDispatch(this)

      }
      
    }
  },

  bindTabelRowTap: function(e) {

    var data = null

    if (this.data.select_type === "vehicle") {

      var data = {
        type: this.data.select_type,
        item: this.data.vehicle_data[e.currentTarget.dataset.itemId]
      }

      wx.navigateTo({
        url: "/pages/vehicle_detail/vehicle_detail?item=" + JSON.stringify(data)
      })
    } else if (this.data.select_type === "visitor") {

      var data = {
        type: this.data.select_type,
        item: this.data.visitor_data[e.currentTarget.dataset.itemId]
      }

      wx.navigateTo({
        url: "/pages/visitor_detail/visitor_detail?item=" + JSON.stringify(data)
      })
    } else if (this.data.select_type === 'dispatch') {

      var data = this.data.dispatch_data[e.currentTarget.dataset.itemId]

      wx.navigateTo({
        url: '/pages/dispatch_detail/dispatch_detail?item=' + JSON.stringify(data)
      })
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
    var self = this

    if (this.data.network_cond == true) {

      if (this.data.select_type === 'vehicle') {
        network.searchCar(this)
      } else if (this.data.select_type === 'visitor') {
        network.searchVisitor(this)
      } else if (this.data.select_type === 'dispatch') {
        network.searchDispatch(this)

      }

    }

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
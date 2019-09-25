// pages/detail/detail.js
var global = require("../../utils/global.js")
var network = require("../../utils/network.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vehicle_brand: global.vehicle_brand,
    vehicle_color: global.vehicle_color,
    vehicle_capacity: global.vehicle_capacity,
    visitor_level: global.visitor_level,
    hotel_list: global.hotel_list,

    delete_tap: false,


    data_type: "vehicle",
    data_item: null,

    vehicle_data: {
      id: "",
      brand: "",
      select_brand_idx: 0,
      crt_license: "",
      select_color_idx: 0,
      driver_name: "",
      driver_sex: "",
      driver_tel: ""
    }



  },

  /**
   * brand selector callback
   */
  bindVehicleBrandChange: function (e) {

    var data = this.data.vehicle_data

    data.select_brand_idx = e.detail.value
    data.brand = this.data.vehicle_brand[e.detail.value]

    this.setData({
      vehicle_data: data
    })
  },

  /**
   * bind vehicle color selector callback
   */
  bindVehicleColorChange: function (e) {
    
    var data = this.data.vehicle_data

    data.select_color_idx = e.detail.value
    data.color = this.data.vehicle_color[e.detail.value]

    this.setData({
      vehicle_data: data
    })
  },


  bindFormSubmit: function(e) {
    var self = this

    wx.showModal({
      title: "警告",
      content: "确认修改记录？",
      showCancel: true,
      cancelText: "取消",
      confirmText: "确定",
      success: function(res) {
        if (res.confirm == 1) {
          if (self.data.data_type === 'vehicle') {

            var data = {
              brand: self.data.vehicle_brand[e.detail.value.vehicle_brand],
              license: e.detail.value.vehicle_id,
              color: self.data.vehicle_data.select_color_idx == 5 ? e.detail.value.vehicle_color_other : self.data.vehicle_data.color,
              driver_name: e.detail.value.driver_name,
              driver_sex: e.detail.value.driver_gender === 'male' ? 1 : 0,
              driver_tel: e.detail.value.driver_tel
            }

            network.updateCar(self.data.vehicle_data.id, data, self)
            
            wx.navigateBack({
              delta: 1
            })
          }
        }
      }
    })
  },


/**
 * data item delete callback
 */
  bindDeleteTap: function(e) {

    var self = this
    
    wx.showModal({
      title: '警告',
      content: '确认删除该条记录？',
      showCancel: true,
      cancelText: "取消",
      confirmText: "确定",
      success: function(res) {
        if (res.confirm == 1) {

          if (self.data.data_type === "vehicle") {

            network.deleteCar(self.data.vehicle_data.id)
            wx.navigateBack({
              delta: 1
            })
          } else if (self.data.dat_type === "visitor") {

          }

        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data_item = JSON.parse(options.item)
    var data_type = data_item.type
    var item = data_item.item

    if(data_type === "vehicle") {
      var brand_idx = 0
      var color_idx = 5

      for(var i = 0; i < this.data.vehicle_brand.length; i++) {
        if (this.data.vehicle_brand[i] === item.brand) {
          brand_idx = i;
        }
      }

      for(var i = 0; i < this.data.vehicle_color.length; i++) {
        if (this.data.vehicle_color[i] === item.color) {
          color_idx = i;
        }
      }

      var color = color_idx == 5 ? item.color : this.data.vehicle_color[color_idx]

      this.setData({
        data_type: data_type,
        vehicle_data: {
          id: item.id,
          brand: this.data.vehicle_brand[brand_idx],
          select_brand_idx: brand_idx,
          license: item.license,
          select_color_idx: color_idx,
          color: color,
          driver_name: item.driver_name,
          driver_sex: item.driver_sex == 1 ? "male" : "female",
          driver_tel: item.driver_tel
        }
      })

    }
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
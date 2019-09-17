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
        value: "contactor",
        checked: false,
        label: "联系人"
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



    select_type: "vehicle",

    select_brand_idx: 0,
    select_color_idx: 5,
    vehicle_ID: "",
    color: "",
    driver_name: "",
    driver_gender: "",
    driver_tel: "",


    select_level_idx: 4,
    select_hotel_idx: 5,

    select_level: "",
    select_hotel: ""
  },

  /**
   * 数据类型选择按钮回调
   */
  bindTypeChange: function(e) {
    this.setData({
      select_type: e.detail.value,
      select_brand_idx: 0,
      select_color_idx: 5,

      vehicle_ID: "",
      brand: "",
      color: "",
      driver_name: "",
      driver_gender: "",
      driver_tel: ""

    })
  },

  /**
   * 车辆品牌选择器回调
   */
  bindVehicleBrandChange: function (e) {
    
    var brand_idx = e.detail.value * 1

    this.setData({
      select_brand_idx: e.detail.value * 1,
      brand: this.data.vehicle_brand[brand_idx]
    })

    console.log(this.data)
  },

  /**
   * 车牌号输入回调
   */
  bindVehicleIDInput: function (e) {

    this.setData({
        vehicle_ID: e.detail.value,
    })

    console.log(this.data)
  },

  /**
   * 车辆颜色选择器回调
   */
  bindVehicleColorChange: function(e) {
    var color_idx = e.detail.value*1
    this.setData({
      select_color_idx: e.detail.value*1,
      color: this.data.vehicle_color[color_idx]
    })
  },

  /**
   * 司机名字输入回调
   */
  bindDriverNameInput: function(e) {
    var name = e.detail.value

    this.setData({
      driver_name: name
    })

    console.log(this.data)
  },
  
  /**
   * 司机性别回调
   */
  bindDriverGenderChange: function(e) {
    var gender = e.detail.value

    this.setData({
      driver_gender: gender == "female"?"女":"男"
    })

    console.log(this.data)
  },

  bindDriverTelChange: function(e) {
    
    this.setData({
      driver_tel: e.detail.value
    })

    console.log(e)
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
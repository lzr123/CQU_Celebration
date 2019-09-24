function checkNetworkCondition(page) {

  wx.getNetworkType({
    success: function(res) {

      console.log(res)
      if((res.networkType === "none") || (res.networkType === "unknown")) {
        wx.showToast({
          title: "请检查网络连接",
          icon: "none",
          duration: 2000
        })

        page.setData({
          network_cond: false
        })

      } else {
        page.setData({
          network_cond: true
        })
      }
    },
    failed: function(res) {
      wx.showToast({
        title: "无法获取网络状态",
        icon: "none", 
        duration: 2000
      })

      page.setData({
        network_cond: false
      })
    }
  })
}

function addCar(data) {
  var self = this

  wx.request({
    url: 'http://dispatch.ihackin.cn/api/cars',
    method: 'POST',
    data: data,
    header: {
      "Content-Type": "application/json"
    },
    success: function(res) {
      self.result = res

      if (res.statusCode == 200) {
        wx.showToast({
          title: "添加成功",
          icon: "none",
          duration: 500
        })
      } else {
        wx.showToast({
          title: '参数错误',
          icon: 'none',
          duration: 1000
        })
      }
      
    },
    fail: function(res) {
      self.result = res

      wx.showToast({
        title: '添加失败',
        icon: "none",
        duration: 500
      })
    }
  })

}

function addVisitor(data) {

  console.log(data)

  wx.request({
    url: 'http://dispatch.ihackin.cn/api/guests',
    method: "POST",
    data: data,
    header: {
      "Content-Type": "application/json"
    },
    success: function(res) {

      console.log(res)
      if (res.statusCode == 200) {
        wx.showToast({
          title: "添加成功",
          icon: "none",
          duration: 500
        })
      } else {
        wx.showToast({
          title: '参数错误',
          icon: 'none',
          duration: 1000
        })
      }

    },
    fail: function (res) {

      wx.showToast({
        title: '添加失败',
        icon: "none",
        duration: 500
      })
    }
  })

}

function searchCar(page) {

  wx.request({
    url: "http://dispatch.ihackin.cn/api/cars",
    method: "GET",
    data: {
      "query_type": "all"
    },
    success: function(res) {

      var vehicle_data = res.data

      console.log(res)

      if (page.data.select_vehicle_brand_idx != 5) {
        vehicle_data = vehicle_data.filter(a => a.brand == page.data.vehicle_brand[page.data.select_vehicle_brand_idx])
      } 

      page.setData({
        vehicle_data: vehicle_data
      })
    },
    fail: function(res) {
      console.log(res)
      wx.showToast({
        title: '获取车辆列表失败',
        icon: 'none',
        duration: 2000
      })
    }
  })
  
}

function deleteCar(id) {
  wx.request({
    url: "http://dispatch.ihackin.cn/api/cars/" + id,
    method: "DELETE",
    success: function(res) {
      wx.showToast({
        title: '删除成功',
        icon: 'none',
        duration: 1000
      })
    },
    fail: function(res) {
      wx.showToast({
        title: '删除失败',
        icon: 'none',
        duration: 1000
      })
    }
  })
}

function updateCar(id, data, page) {

  console.log(data)
  console.log(id)

  wx.request({
    url: "http://dispatch.ihackin.cn/api/cars/" + id,
    method: "PUT",
    data: data,
    header: {
      "Content-Type": "application/json"
    },
    success: function(res) {
      console.log(res)
    },

    fail: function(res) {
      wx.showToast({
        title: '更新失败',
        icon: 'none',
        duration: 1000
      })
    }
  })
}

function searchVisitor(page) {

  wx.request({
    url: 'http://dispatch.ihackin.cn/api/guests',
    method: 'GET',
    success: function(res) {
      page.setData({
        visitor_data: res.data
      })
    },
    fail: function(res) {
      wx.showToast({
        title: '获取来宾列表失败',
        icon: 'none',
        duration: 2000
      })
    }
  })
}

module.exports = {
  checkNetworkCondition: checkNetworkCondition,

  addCar: addCar,
  searchCar: searchCar,
  deleteCar: deleteCar,
  updateCar: updateCar,

  addVisitor: addVisitor,
  searchVisitor: searchVisitor
}
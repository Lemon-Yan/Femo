// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var data = {
      "datas": [ 
        {
          "id": 3,
          "imgurl": "../../images/position.png", 
          "title": "售后服务"
        },
        {
          "id": 1,
          "imgurl": "../../images/position.png", 
          "title": "邀请"
        },
        {
          "id": 1,
          "imgurl": "../../images/position.png", 
          "title": "设置"
        },
        {
          "id": 1,
          "imgurl": "../../images/position.png", 
          "title": "帮助中心"
        }
      ]
    };
    //console.log(data.datas);

    that.setData({
      jiuData: data.datas
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
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '肥猫小程序', 
      path: 'pages/share/share',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  }
})
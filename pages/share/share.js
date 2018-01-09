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
  onShareAppMessage: function () {
  
  }
})
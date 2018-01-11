// pages/feedBack/feedBack.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "txtAccount": 0,  //备注字数初始化
    "uhide": false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //备注中获取输入的字数
  bindNumber: function (e) {
    this.setData({
      txtAccount: e.detail.value.length
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //提交请求
  submit: function () {
    var that = this;
    // wx.showToast({
    //   title: '提交成功',
    //   icon: 'success',
    //   duration: 2000
    // })
    that.setData({
      uhide: true
    });

    setTimeout(function () {
      that.setData({
        uhide: false
      });
    }, 1500);
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
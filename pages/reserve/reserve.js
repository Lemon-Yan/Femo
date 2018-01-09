// pages/reserve/reserve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "reserveDate": "请选择日期",//设置预约日期默认值
    "txtAccount": 0  //备注字数初始化
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;


  },
  //获取输入值
  bindNameInput: function (e) {
    this.setData({
      Name: e.detail.value
    })
  },
  //日期选择
  bindDateChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      reserveDate: e.detail.value
    })
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
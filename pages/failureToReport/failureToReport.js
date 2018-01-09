// pages/failureToReport/failureToReport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "txtAccount": 0,  //备注字数初始化

    latitude: 29.876220,
    longitude: 121.536280,
    markers: [{
      latitude: 29.876220,
      longitude: 121.536280,
      name: '浙江省宁波市海曙区中山西路布政巷16号'
    }]
    
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
  //多选框
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  //打开所在位置
  openLocation: function (e) {
    wx.openLocation({
      longitude: 121.536280,
      latitude: 29.876220,
      name: '科创大厦11楼1102',
      address: '浙江省宁波市海曙区中山西路布政巷16号'
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
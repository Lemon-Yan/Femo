// pages/mapLookCar/mapLookCar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 29.876220,
    longitude: 121.536280, 
    markers: [{ 
      latitude: 29.876220,
      longitude: 121.536280,
      name: '浙江省宁波市海曙区中山西路布政巷16号1122' 
    }],
    controls: [{
      id: 1,
      iconPath: "../../images/cPosition.png",
      position: {
        left: 20,
        top: 400 - 50,
        width: 35,
        height: 35
      },
      clickable: true
    }]
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
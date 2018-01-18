// pages/carRental/carRental.js
var Comm = require("../../utils/common.js");
var Config = require('../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: Config.imgPath  //图片前缀
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options.productDetailId);
    //商品详情id
    that.setData({
      productDetailId: options.productDetailId
    }) 
     
    //车辆配置信息
    var leaseCarprice = Config.leaseCarprice + "?productDetailid=" + options.productDetailId;
    Comm.Request(leaseCarprice, "get", "", function (res) {
      //console.log(JSON.parse(res.data)[0].leasepriceId); 
      wx.setStorageSync('carConfigInfo', JSON.parse(res.data)[0]);
      that.setData({
        carConfigData: JSON.parse(res.data)[0]
      })
    })
  }, 
  //打开预约页面
  openReserve: function (event) {
    //console.log(event); 
    wx.navigateTo({
      url: '../reserve/reserve?carDetailId=' + event.target.dataset.carid
    })
  },
  //跳转到更多配置页面
  moreConfig: function () {
    //console.log(333);
    wx.navigateTo({
      url: '../moreConfig/moreConfig'
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
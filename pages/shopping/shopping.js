// pages/shopping/shopping.js
var Comm = require("../../utils/common.js");
var Config = require('../../config.js');
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

    //微信用户openid   
    var userInfoOpenId = wx.getStorageSync('UserInfoOpenId');
    //console.log("UserInfoOpenId:" + JSON.stringify(userInfoOpenId));
    if (!userInfoOpenId) { 
      app.getUserOpenId(function (res) {
        userInfoOpenId = wx.getStorageSync('UserInfoOpenId');
      })
    }

   //var userCoupon = Config.userCoupon + "?startrow=1&endrow=10&wxuserId=" + userInfoOpenId.wxuserId;
    var userCoupon = Config.userCoupon + "?startrow=1&endrow=10&wxuserId=1"; 
    //console.log(userCoupon);
    //获取用户优惠券
    Comm.Request(userCoupon, "get", "", function (res) {
      //console.log(JSON.parse(res.data).list);
      that.setData({
        youhuiData: JSON.parse(res.data).list
      })
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
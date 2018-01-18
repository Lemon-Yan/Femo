// pages/depositPay/depositPay.js
var Comm = require("../../utils/common.js");
var Config = require('../../config.js');
var app = getApp();
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
    //生成时间戳
    var timestamp = (new Date()).valueOf();
    console.log(timestamp);

    //获取32位随机字符串
    var cc = Comm.randomString(32);
    console.log(cc);

    //微信用户openid   Feimo:wxd193898f79130912
    var UserInfoOpenId = wx.getStorageSync('UserInfoOpenId');
    //console.log("UserInfoOpenId:" + JSON.stringify(UserInfoOpenId));
    if (!UserInfoOpenId) {
      //获取用户openid
      app.getUserOpenId(function (res) {
        console.log("my::::::" + res);
      })
    }

  },

  pay: function () {
    wx.vibrateShort();

    var payUrl = "";
    wx.request({
      url: payUrl,
      method: "get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //调用支付
        wx.requestPayment({
          'timeStamp': '',  //时间戳
          'nonceStr': '',   //随机字符串
          'package': '',    //统一下单接口返回的 prepay_id
          'signType': 'MD5', //签名类型，默认为MD5
          'paySign': '',     //签名
          'success': function (res) {

          },
          'fail': function (res) {

          }

        })
      }
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

  },

}) 
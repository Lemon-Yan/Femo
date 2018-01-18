// pages/feedBack/feedBack.js
var Comm = require("../../utils/common.js");
var Config = require('../../config.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "txtAccount": 0  //备注字数初始化 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //var UserInfoOpenId=wx.getStorageSync('UserInfoOpenId');
    that.setData({
      wxuserId: wx.getStorageSync('UserInfoOpenId').wxuserId
    })

    //console.log(UserInfoOpenId.wxuserId);
  },
  //备注中获取输入的字数
  bindNumber: function (e) {
    this.setData({
      feedBackContent: e.detail.value,
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
    //提交用户反馈  
    var feedBackCon = that.data.feedBackContent;
    if (!feedBackCon) {
      wx.showToast({
        title: '请输入内容',
        icon: 'loading',
        duration: 1000
      })
      return false;
    }
    var addInformation = Config.addInformation + "?informationTitle=&informationContent=" + feedBackCon + "&wxuserId=" + that.data.wxuserId + "&informationType=1";
    //console.log(addInformation);  
    Comm.Request(addInformation, "get", "", function (res) {
      //console.log(res);
      //提示语的使用方法
      that.setData({
        is_modal_Hidden: true,
        is_modal_icon: 'success', //成功和失败提示语，支持success和warm
        is_modal_title: '提交成功',
        is_modal_desc: '感谢您提出宝贵的意见!'
      })
      setTimeout(function () {
        wx.navigateBack();
      }, 2000);
    })
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
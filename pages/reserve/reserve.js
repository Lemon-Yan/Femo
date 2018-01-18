// pages/reserve/reserve.js
var Comm = require("../../utils/common.js");
var Config = require('../../config.js');
var app = getApp();
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
    //设置车辆详情id
    that.setData({
      carDetailId: options.carDetailId
    })
    //获取用户openid
    app.getUserOpenId(function (res) {
      that.setData({
        wxuserId: res.wxuserId
      })
    })

  },
  //获取用户姓名
  bindNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  //获取用户手机号
  bindPhoneInput: function (e) {
    this.setData({
      userPhone: e.detail.value
    })
  },
  //日期选择
  bindDateChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      reserveDate: e.detail.value
    })
  },
  //备注中获取输入的字数和备注
  bindNumber: function (e) {
    this.setData({
      userInputRemarks: e.detail.value,
      txtAccount: e.detail.value.length
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //提交
  submit: function (e) {
    var that = this;
    if (!that.data.userName) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'loading',
        duration: 1000
      })
      return false;
    } else if (!that.data.userPhone) {
      wx.showToast({
        title: '请输入手机号码！',
        icon: 'loading',
        duration: 1000
      })
      return false;
    } else if (!that.data.reserveDate) {
      wx.showToast({
        title: '请选择日期！',
        icon: 'loading',
        duration: 1000
      })
      return false;
    }
    var addWxuserreserve = Config.addWxuserreserve + "?reserveUsername=" + that.data.userName + "&reserveContent=" + that.data.userInputRemarks + "&wxuserId=" + that.data.wxuserId + "&productDetailid=" + that.data.carDetailId + "&reserveTempTime=" + that.data.reserveDate + "&reserveUsertelephone=" + that.data.userPhone;
    //console.log(addWxuserreserve); 
    //添加预约
    Comm.Request(addWxuserreserve, "get", "", function (res) {
      //console.log(res);
      //提示语的使用方法
      that.setData({
        is_modal_Hidden: true,
        is_modal_icon: 'success', //成功和失败提示语，支持success和warm
        is_modal_title: '预约成功',
        is_modal_desc: '恭喜您，预约成功！'
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
//app.js
var Comm = require("utils/common.js");
var Config = require('config.js');
var app = getApp();
//console.log(Config.getLunboUrl);
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);  
  }, 
  globalData: {
    userInfo: null,
    openId: null
  },

  //获取用户信息
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function (res) {
          wx.setStorageSync('UserInfo', res.userInfo);
          that.globalData.userInfo = res.userInfo;
          typeof cb == "function" && cb(that.globalData.userInfo);
        }
      })
    }
  },

  //获取用户openId
  getUserOpenId: function (cb) {
    var self = this
    if (self.globalData.openid) {
      cb(self.globalData.openid)
    } else {
      wx.login({
        success: function (data) {
          //console.log(data.code + "...data.code"); //用户openid  
          //添加用户openid
          var addUserUrl = Config.addUser + "?openid=" + data.code + "&nickname=" + self.globalData.userInfo.nickName;
          //console.log(addUserUrl); 
          wx.request({
            url: addUserUrl,
            method: "get",
            success: function (res) {
              //console.log('添加用户信息', res);
              var openIdUrl = Config.getUserId + "?openid=" + data.code;  //获取用户openid
              //console.log(openIdUrl);
              //获取openid
              wx.request({
                url: openIdUrl,
                method: "get",
                success: function (ops) {
                  //console.log('拉取openid成功', ops.data);
                  wx.setStorageSync('UserInfoOpenId', ops.data);
                  self.globalData.openid = ops.data
                  cb(self.globalData.openid)
                }
              })

            }
          })
          //addUser 
        },
        fail: function (err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          //cb(err)
        }
      })
    }
  },


})

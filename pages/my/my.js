// pages/my/my.js
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
    var that = this;

    var UserInfo = wx.getStorageSync('UserInfo');
    //console.log(UserInfo);
    that.setData({
      avatarUrl: UserInfo.avatarUrl,
      nickName: UserInfo.nickName
    })
    //获取用户信息
    // app.getUserInfo(function (res) {
    //   console.log(res); 
    //   that.setData({
    //     avatarUrl: res.avatarUrl,
    //     nickName: res.nickName
    //   })
    // });
    //获取用户openid
    // app.getUserOpenId(function(res){
    //   console.log("my::::::"+res); 
    // })

    var data = {
      "datas": [
        {
          "id": 2,
          "imgurl": "../../images/userInfo.png",
          "pageUrl": "../memberCenter/memberCenter",
          "title": "个人信息"
        },
        {
          "id": 1,
          "imgurl": "../../images/youhuiquan.png",
          "pageUrl": "../shopping/shopping",
          "title": "优惠券"
        },
        {
          "id": 3,
          "imgurl": "../../images/saleService.png",
          "pageUrl": "../afterSale/afterSale",
          "title": "售后服务"
        },
        {
          "id": 1,
          "imgurl": "../../images/about.png",
          "pageUrl": "../aboutUs/aboutUs",
          "title": "关于我们"
        },
        {
          "id": 1,
          "imgurl": "../../images/help.png",
          "pageUrl": "../helpCenter/helpCenter",
          "title": "帮助中心"
        },
        {
          "id": 1,
          "imgurl": "../../images/email.png",
          "pageUrl": "../feedBack/feedBack",
          "title": "意见反馈"
        }
      ]
    };
    //console.log(data.datas);

    that.setData({
      jiuData: data.datas
    })
  },
  //打开拨打客服热线模态框
  openModal: function () {
    var servicePhone = "400-889-2502";
    wx.showModal({
      title: '提示',
      content: '确定拨打客服热线：' + servicePhone,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          //拨打电话
          wx.makePhoneCall({
            phoneNumber: servicePhone,
            success: function () {
              console.log("成功拨打电话")
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
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

  }
})
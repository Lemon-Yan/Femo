// pages/scenicCar/scenicCar.js
var Comm = require("../../utils/common.js");
var Config = require('../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath: Config.imgPath,  //图片前缀
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "cp": "浙B66666",
          "cx": "江淮IEV7S"
        },
        {
          "id": 1,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "cp": "浙B66666",
          "cx": "江淮IEV7S"
        },
        {
          "id": 3,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "cp": "浙B66666",
          "cx": "江淮IEV7S"
        },
        {
          "id": 4,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "cp": "浙B66666",
          "cx": "江淮IEV7S"
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
    })
   
    var scenicName = options.scenicName ? options.scenicName : "舟山";
    //console.log(scenicName);
    //获取景点介绍
    Comm.Request(Config.getLunboUrl + scenicName , "get", "", function (res) {
      //console.log(JSON.parse(res.data)[0].classificationRimgList); 
      that.setData({
        scenicJieshao: JSON.parse(res.data)[0].classificationRimgList[0]
      })
    })
     
     //请求车辆信息，根据区域名称
    //console.log(options.scenicName);  
    var getPositionUrl = Config.getPositionUrl + "?area=" + options.scenicName;
    //var getPositionUrl = Config.getPositionUrl + "?area";
    //console.log(getPositionUrl);
    wx.request({
      url: getPositionUrl,
      method: "get",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(JSON.parse(res.data));
        that.setData({
          carInfoData2: JSON.parse(res.data)
        })
      }
    })

  },

  //导航到目的地
  navBtn: function (event){
    //console.log(event);  
    wx.openLocation({
      longitude: event.target.dataset.longitude ||121.536280,
      latitude: event.target.dataset.latitude ||29.876220,
      name: event.target.dataset.name,
      address: event.target.dataset.address
    })
  },

  //打开预约页面
  openReserve: function (event) {
    //console.log(event); 
    wx.navigateTo({
      url: '../reserve/reserve?carDetailId=' + event.target.dataset.carid
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
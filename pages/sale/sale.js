// pages/sale/sale.js
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
    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "lc": "180km",
          "csjg": "3门4座两厢",
          "cdsc": "快充0.5~1.5h，慢充6h"
        },
        {
          "id": 1,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "lc": "180km",
          "csjg": "3门4座两厢",
          "cdsc": "快充0.5~1.5h，慢充6h"
        },
        {
          "id": 3,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "lc": "180km",
          "csjg": "3门4座两厢",
          "cdsc": "快充0.5~1.5h，慢充6h"
        },
        {
          "id": 4,
          "imgurl": "../../images/car.png",
          "price": "6.18万",
          "lc": "180km",
          "csjg": "3门4座两厢",
          "cdsc": "快充0.5~1.5h，慢充6h"
        }
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data.datas
    })


    //获取预售广告图
    Comm.Request(Config.getLunboUrl + "预售", "get", "", function (res) {
      //console.log(JSON.parse(res.data)[0]);
      that.setData({
        saleGuanggao: JSON.parse(res.data)[0].classificationRimgList[0]
      })
    })

    //预售车辆信息 
    var saleCarprice = Config.saleCarprice + "?lease_state=1";
    Comm.Request(saleCarprice, "get", "", function (res) {
      //console.log(res.data); 
      that.setData({
        saleCarInfo: res.data
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
//index.js
//获取应用实例
var app = getApp();
var common = require("../../utils/common.js");
var config = require('../../config');

Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },

  onLoad: function () {
    var that = this;

    var data = {
      "datas": [
        {
          "id": 2,
          "imgurl": "../../images/lunbo.png"
        },
        {
          "id": 1,
          "imgurl": "../../images/haibao.png"
        }, 
        {
          "id": 3,
          "imgurl": "../../images/a3.jpg"
        }, 
        {
          "id": 4,
          "imgurl": "../../images/a4.jpg"
        }
      ]
    };
    //console.log(data.datas);

    that.setData({
      lunboData: data.datas
    }) 


    var data2 = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/car.png",
          "price": "0.3元/分+0.3元/公里（6元起步）",
          "dianliang": "99%(预估178.2公里）",
          "juli": "0.6km",
          "position": "宁波市海曙区布政巷16号" 
        },
        {
          "id": 1,
          "imgurl": "../../images/car.png",
          "price": "0.3元/分+0.3元/公里（6元起步）",
          "dianliang": "99%(预估178.2公里）",
          "juli": "0.6km",
          "position": "宁波市海曙区布政巷16号" 
        },
        {
          "id": 3,
          "imgurl": "../../images/car.png",
          "price": "0.3元/分+0.3元/公里（6元起步）",
          "dianliang": "99%(预估178.2公里）",
          "juli": "0.6km",
          "position": "宁波市海曙区布政巷16号" 
        } 
      ]
    };
    //console.log(data.datas);
    //设置车辆展示信息
    that.setData({
      carInfoData: data2.datas
    })  



    //获取轮播图数据
    //  common.Request(config.getLunboUrl, "get", "", function (res) {
    //    console.log("轮播图数据集：....." + JSON.stringify(res));
    //   //  that.setData({
    //   //    lunboData: res.data.data.lunbo
    //   //  })
    //  })
  }

})

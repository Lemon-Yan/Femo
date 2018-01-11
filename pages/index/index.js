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
    //提示语的使用方法
    that.setData({
      is_modal_Hidden: false,
      is_modal_icon: 'warn', //成功和失败提示语，支持success和warm
      is_modal_title: '预约失败',
      is_modal_desc: '网络异常,请稍后再试！'
    })

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

    // console.log(config.getLunboUrl);
    // //console.log(config.host);
    // //获取轮播图数据
    // common.Request(config.getLunboUrl, "get", "", function (res) {
    //   console.log("轮播图数据集：....." + JSON.parse(res)); 
    //   //  that.setData({
    //   //    lunboData: res.data.data.lunbo
    //   //  })
    // })

  }

})

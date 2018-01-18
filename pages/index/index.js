//index.js
//获取应用实例
//var app = getApp();
var Comm = require("../../utils/common.js");
var Config = require('../../config.js');
var app = getApp();
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200,
    imgPath: Config.imgPath,  //图片前缀
    uhide: false
  },

  onLoad: function () {
    var that = this;
    //获取用户信息
    app.getUserInfo(function (res) {
      //console.log(res); 
    });
    
    //提示语的使用方法
    that.setData({
      is_modal_Hidden: true,
      is_modal_icon: 'success', //成功和失败提示语，支持success和warm
      is_modal_title: '预约成功',
      is_modal_desc: '恭喜您，预约成功！'
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

    //获取轮播图数据
    Comm.Request(Config.getLunboUrl+"首页", "get", "", function (res) {
      //console.log(JSON.parse(res.data)[0].classificationRimgList); 
      that.setData({
        lunboData2: JSON.parse(res.data)[0].classificationRimgList
      })
    })

    //获取当前位置经纬度
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //console.log("获取当前经纬度：" + JSON.stringify(res));
        //发送请求通过经纬度反查地址信息  
        var searchUserPosition = Config.searchUserPosition + res.latitude + "," + res.longitude + "&key=2QIBZ-SU26P-NDLDF-LAUHX-YRUYZ-5YFNW&get_poi=1";
        Comm.Request(searchUserPosition, "get", "", function (ops) {
          //console.log("地图：" + JSON.stringify(ops));  
          //根据区域查询车辆信息
          var getPositionUrl = Config.getPositionUrl + "?area=" + ops.data.result.address_component.district;
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

        })
      }
    })

  },

  //切换隐藏和显示景区租车
  toggleBtn: function () { 
    var that = this;
    var toggleBtnVal = that.data.uhide;
    if (toggleBtnVal) {
      that.setData({
        uhide: false
      })
    } else {
      that.setData({
        uhide: true
      })
    }

  }



})

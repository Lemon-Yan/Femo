// pages/lease.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this; 
    var lunboData = {
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
      lunboData: lunboData.datas
    }) 
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
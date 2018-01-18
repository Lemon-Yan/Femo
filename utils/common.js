/**
 * 公共js文件
 * 使用方法：
 * 1、在需要使用的js顶部引用：var common = require("../../utils/common.js");
 * 2、使用： common.Request(_url, "post", "", function (res) { 
    that.setData({
      lunboData: res.data.data.lunbo
    })
  });
 */

var common = {
  Request: function (_url, method, data, callBack) {
    //console.log(_url + ":" + method + ":" + data+":"+callBack); 
    wx.request({
      url: _url,
      method: method,
      data: {
        data
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log('success:' + res);
        callBack(res);
      },
      fail: function (res) {
        //console("error res=" + res.data);
      }
    })
  },
  //获取32位随机字符串
  randomString: function (len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }

};

module.exports = common
/**
 * 小程序配置文件
 */

var host = "www.cnfemo.com/FeMoDemo"; 

var config = {

  // 下面的地址配合Server 工作
  host, 

  getLunboUrl: `https://${host}/ClassificationRimg/selectAll?startrow=1&endrow=10&classificationName=`, //首页--获取轮播图数据
  getPositionUrl: `https://${host}/LeaseCarprice/selectAllById?area`,  //根据区域查询车辆信息
  searchUserPosition: `https://apis.map.qq.com/ws/geocoder/v1/?location=`,     //过经纬度反查地址信息 
  imgPath: `https://${host}`,   //图片地址前缀
  addWxuserreserve: `https://${host}/WxUserReserve/addWxuserreserve`,     //客户预约 

  getUserId: `https://${host}/WxUser/selectuser`,  //获取用户openid
  addUser: `https://${host}/WxUser/wx/addwxuser`,  //添加用户openid
  leaseCarprice: `https://${host}/LeaseCarprice/selectAllById`,  //租赁--长租
  saleCarprice: `https://${host}/Productdetail/selectByid`,     //预售
  addInformation: `https://${host}/Information/addInformation`,     //用户反馈 

  questionUrl: `https://${host}/Question/selectAll?startrow=1&endrow=50`,     //帮助中心
  questionUrl: `https://${host}/Question/selectAll?startrow=1&endrow=50`,     //优惠券
   
};

module.exports = config

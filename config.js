/**
 * 小程序配置文件
 */

var host = "www.cnfemo.com"

var config = {

  // 下面的地址配合Server 工作
  host,

  //首页--获取轮播图数据
  getLunboUrl: `https://${host}/FeMoDemo/ClassificationRimg/selectAll?startrow=1&endrow=10&classificationName=首页`
   
};

module.exports = config

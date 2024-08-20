/*************************************

B612相机
下载地址：https://t.cn/A6OnDkXP
下载地址：https://t.cn/A6OjOeJY
下载地址：https://t.cn/A6OmacYG
下载地址：https://t.cn/A6Omaf2D

**************************************

[rewrite_local]
^https?:\/\/(purchase-.*-api|user-kaji-api)\.(yiruikecorp|b612kaji|tianyancam)\.com\/v\d\/purchase\/subscription\/subscriber\/status url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/4gexj.js

[mitm]
hostname = purchase-*-api.*.com, user-kaji-api.b612kaji.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const Foodie = 'https://purchase-foodiecn-api.yiruikecorp.com';
const qingtu = 'https://purchase-qingtu-api.b612kaji.com';
const B612xj = 'https://user-kaji-api.b612kaji.com';
const tianyan = 'https://purchase-tianyan-api.tianyancam.com';

//Foodie
if ($request.url.indexOf(Foodie) != -1){
  id = "com.linecorp.Foodiecn.subscribe.oneyear";
}

//轻图
if ($request.url.indexOf(qingtu) != -1){
  id = "com.photovision.camera.subscribe.plan.oneyear";
}

//B612相机
if ($request.url.indexOf(B612xj) != -1){
  id = "com.campmobile.snowcamera.vip.oneyear";
}

//甜盐相机
if ($request.url.indexOf(tianyan) != -1){
  id = "com.yiruike.sodacn.subscribe.oneyear";
}

chxm1023 = {  "result" : {    "products" : [      {        "managed" : false,        "status" : "ACTIVE",        "startDate" : 1666666666666,        "productId" : (id),        "expireDate" : 4092599349000      }    ],    "activated" : true  }};

$done({body : JSON.stringify(chxm1023)});
/******************************

脚本功能：甜盐相机——解锁会员
下载地址：https://is.gd/QcGrYH

*******************************

[rewrite_local]

^http[s]?:\/\/purchase-tianyan-api.tianyancam.com/v1/purchase/subscription/subscriber/status url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/tianyancam.js

[mitm] 

hostname = purchase-tianyan-api.tianyancam.com


********************************/

var objc = JSON.parse($response.body);

    objc = {"result":{"activated":true,"products":[{"productId":"com.yiruike.sodacn.subscribe.oneyear","startDate":1673549875000,"expireDate":4674154670000,"managed":false,"status":"ACTIVE"}]}}
$done({body : JSON.stringify(objc)});
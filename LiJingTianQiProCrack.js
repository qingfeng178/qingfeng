/***********************************

> 应用名称：莉景天气

[rewrite_local]
  
# > 莉
^https?:\/\/ljwapi\.baichuan\.tech\/(VIP\/GetState|Login\/Device|User\/GetPrivateUsers|Vip\/GetVipType) url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/LiJingTianQiProCrack.js


[mitm]
 
hostname = ljwapi.baichuan.tech


***********************************/
















































var body = $response.body.replace(/vipType":0/g, 'vipType":2').replace(/isVIP":false/g, 'isVIP":true')
$done({ body });
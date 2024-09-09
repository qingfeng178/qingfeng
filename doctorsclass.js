/*******************************

脚本功能：医课——解锁VIP
下载地址：https://is.gd/JHgQlH

*******************************

[rewrite_local]

^http[s]?:\/\/www.doctorsclass.com url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/doctorsclass.js

[mitm] 

hostname = www.doctorsclass.com

*******************************/

var body = $response.body.replace(/vip":null/g,'vip":true')
.replace(/is_free":\d+/g,'is_free":1')
.replace(/fee":"\d+.00"/g,'fee":"0.00"')
.replace(/shelf":\d/g,'shelf":1')
.replace(/showWord":\d/g,'showWord":1')
.replace(/type":\d/g,'type":1')
.replace(/vip":\w+/g,'vip":true')
.replace(/vip_expire":\d+/g,'vip_expire":459987654321')
.replace(/nick_name":".*?"/g,'nick_name":"清风"')
$done({ body });
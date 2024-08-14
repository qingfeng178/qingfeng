**************************************

[rewrite_local]
^https?:\/\/yopu\.co\/api\/user\/info url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/youpuma.js

[mitm]
hostname = yopu.co

*************************************/


var qf = JSON.parse($response.body);

qf.level = 1;
qf.isMember = true;
qf.adsDisabled = true;
qf.adsDisabledTill = 4092599349000;

$done({ body: JSON.stringify(qf)});
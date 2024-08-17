

/*************************************q

项目名称：有谱么
下载地址：https://t.cn/A60Vxtkh




**************************************

[rewrite_local]
^https?:\/\/yopu\.co\/api\/user\/info url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/youpuma.js

[mitm]
hostname = yopu.co

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.level = 1;
chxm1023.isMember = true;
chxm1023.adsDisabled = true;
chxm1023.adsDisabledTill = 4092599349000;

$done({ body: JSON.stringify(chxm1023)});

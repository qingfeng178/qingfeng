/*************************************

古文岛

**************************************

[rewrite_local]
^https?:\/\/app\.guwendao\.net\/api\/user\/getVip url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/guwendao.js

[mitm]
hostname = app.guwendao.net

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.svip = "/Date(4092599349000)/";

$done({body : JSON.stringify(chxm1023)});
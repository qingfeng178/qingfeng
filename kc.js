/*************************************

项目功能：

**************************************

[rewrite_local]
^https://cdnapi\.qianmaschool\.com/course url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/kc.js

[mitm]
hostname = cdnapi.qianmaschool.com

*************************************/

var chxm1023 = JSON.parse($response.body);

// 遍历所有课程，批量设置为试学+解锁
if (chxm1023.data && Array.isArray(chxm1023.data)) {
    chxm1023.data.forEach(function(item) {
        item.isTrial = true;
        item.accessible = true;
    });
}

$done({body : JSON.stringify(chxm1023)});
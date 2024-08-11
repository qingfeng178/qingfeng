/*

西窗烛

[rewrite_local]
^https?:\/\/lchttpapi\.xczim\.com\/1.1\/users url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/xichuangzhu.js

[MITM]
hostname = lchttpapi.xczim.com

*/
var guding = JSON.parse($response.body);
guding.username = "闲鱼清风";
guding.membership = true;
guding.lifetimeMembership = true;
$done({ body: JSON.stringify(guding) });

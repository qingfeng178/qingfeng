***********************

[rewrite_local]
^https://dqbam2jv6gg9m.cloudfront.net/index.php/jsapi/paywall url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/ftzww.js
[mitm] 
hostname = *.cloudfront.net

*******************************/
var qf = JSON.parse($response.qf);

qf = {"paywall":0,"premium":1,"standard":1,"addon":0};

$done({ qf: JSON.stringify(qf) });
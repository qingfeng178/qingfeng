/*

博树

[rewrite_local]
^https?:\/\/api\.(busuu|boshu)\.(com|cn)\/users\/me url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/boshu.js
[MITM]
hostname = api.busuu.com, api.boshu.cn

*/
var qf = JSON.parse($response.body);
qf.data.access = {"tier": "plus"};
$done({ body: JSON.stringify(qf) });

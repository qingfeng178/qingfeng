/*

博树

[rewrite_local]
^https?:\/\/api\.(busuu|boshu)\.(com|cn)\/users\/me url script-response-body 

[MITM]
hostname = api.busuu.com, api.boshu.cn

*/
var qf = JSON.parse($response.body);
qf.data.access = {"tier": "plus"};
$done({ body: JSON.stringify(qf) });
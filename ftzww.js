***********************

[rewrite_local]
^https:\/\/.*\.cloudfront\.net\/index\.php\/jsapi\/paywall url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/ftzww.js
[mitm] 
hostname = *.cloudfront.net

*******************************/
var qf = JSON.parse($response.body);
qf = {
  "paywall": 0,
  "premium": 1,
  "expire": "4092599349",
  "standard": 1,
  "v": 2099,
  "campaign_code": "",
  "latest_duration": "yearly",
  "addon": 0
};
$done({ body: JSON.stringify(qf) });
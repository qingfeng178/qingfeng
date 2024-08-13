**************************************1db1

[rewrite_local]
^https:\/\/api-.*\.meitu\.com\/(.+\/user\/vip_info|user\/show) url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/qf.js

[mitm]
hostname = api-*.meitu.com

*************************************/


var qf = JSON.parse($response.body);
const vip = '/user/vip_info';
const user = '/user/show';

if ($request.url.indexOf(vip) != -1){
qf.data.trial_period_invalid_time = 4092599349000;
qf.data.current_order_invalid_time = 4092599349000;
qf.data.valid_time = 4092599349000;
qf.data.invalid_time = 4092599349000;
qf.data.use_vip = true;
qf.data.have_valid_contract = true;
qf.data.derive_type_name = "普通会员";
qf.data.in_trial_period = true;
qf.data.is_vip = true;
}

if ($request.url.indexOf(user) != -1){
qf.data.vip_type = 1;
qf.data.vip_icon = "https://xximg1.meitudata.com/6948531818264286440.png";
qf.data.follower_count = 999000;
qf.data.fan_count = 999000;
qf.data.favorites_count = 999000;
qf.data.be_like_count = 999000;
}

$done({body : JSON.stringify(qf)});

/******************************

脚本功能：疯狂背单词+解锁VIP
下载地址：https://is.gd/HMnW3n

*******************************

[rewrite_local]

^http[s]?:\/\/api.fengkuangapp.com\/account\/grant\/detail\/info\/ url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/fengkuangapp.js

[mitm] 

hostname = api.fengkuangapp.com

*******************************/

var body = JSON.parse($response.body);

body.data.vip_info = {
      "auto_buy": 1,
      "status": 1,
      "finish_date": "9999-10-18 16:56:11",
      "finish_date_ios": "2023.10.18",
      "pre_date": "2023-10-15 16:56:12",
      "buy_status": 1,
      "vip_type": 2,
      "last_buy_date": "2023-10-15 16:56:12",
      "pre_status": 0,
      "days": 999999
    }
$done({ body: JSON.stringify(body) });

/*************************************

项目名称：格志日记
下载地址：https://t.cn/A6oDgPyl

**************************************

[rewrite_local]
^https?:\/\/diary-id\.sumi\.io\/api\/profile url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/gezhi.js

[mitm]
hostname = diary-id.sumi.io

*************************************/


var chxm1023 = JSON.parse($response.body);

  chxm1023.data["inserted_at"] = "2023-08-01T05:53:45.839474";
  chxm1023.data["expires_at"] = "2099-09-09T09:09:09.000000";
  chxm1023.data["has_stripe_account"] = true;
  chxm1023.data["membership_status"] = "premium";
  chxm1023.data["db_version"] = 1;
  chxm1023.data["active_device_ids"] = ["io.sumi.GridDiary.pro.annually"];

$done({body : JSON.stringify(chxm1023)});
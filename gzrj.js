/*

‎格志日记

[rewrite_local]
^https?:\/\/diary-id\.sumi\.io\/api\/profile url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/gzrj.js

[MITM]
hostname = diary-id.sumi.io

*/
var qf = JSON.parse($response.body);
guding.data = {
    "inserted_at": "2023-07-21T16:10:42.933157",
    "email_is_valid": true,
    "id": "6",
    "expires_at": "6666-06-06T06:06:06.000000",
    "has_stripe_account": true,
    "name": "清风",
    "email": "qffqfq",
    "membership_status": "premium",
    "db_version": 1,
    "active_device_ids": [
    ]
  };
$done({ body: JSON.stringify(qf) });

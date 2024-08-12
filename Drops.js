/*************************************

项目名称：Drops-点滴学习语言

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/Drops.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/qingfeng178/qingfeng/main/Drops.js

[mitm]
hostname = api.revenuecat.com

*************************************/


const qf = {};
const qf1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "premium";
const appid = "forever_unlimited_time_discounted_80_int";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  qf.headers = $request.headers;
} else if (qf1 && qf1.subscriber) {
  qf1.subscriber.subscriptions = qf1.subscriber.subscriptions || {};
  qf1.subscriber.entitlements = qf1.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  qf1.subscriber.entitlements[(name)] = (data);
  qf1.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "qf",	"Telegram": "qf",	"warning": "仅供学习，禁止转载或售卖",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  qf.body = JSON.stringify(qf1);
}

$done(qf);
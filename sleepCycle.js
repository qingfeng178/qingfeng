2、打开软件 > 过引导教程 > 登录账号 > 继续订阅 > 付款时取消并关闭程序 > 重新打开软件即可

********************************/

[mitm]
hostname = ch.sleepcycle.com

[rewrite_local]
https:\/\/ch\.sleepcycle\.com\/api\/v1\/subscription\/get$ url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/sleepCycle.js

********************************/

let obj=JSON.parse($response.body);let requestUrl=$request.url;if(/^https:\/\/ch\.sleepcycle\.com\/api\/v1\/subscription\/get?/.test(requestUrl)){let list=["online-backup","smart-alarm","sleep-aid","analysis","snore","sleep-notes","premium-sounds","user-sounds","wake-up-mood","heart-rate","weather","health-kit","google-fit","statistics","philips-hue","home-kit","weekly-report","auto-sleep-tracking","sleep-training","ambient-light","sound-volume","syndicate","sleep-gpt",];obj.subscription.product_id="com.lexwarelabs.goodmorning.premium";obj.subscription.transaction_id="6666666666666666";obj.subscription.package_id="premium";obj.subscription.features_rich=list.map((i)=>{let objs={source:"subscription",name:i,source_value:"premium",expire_date:7956886942,};return objs});obj.subscription.features=list;obj.subscription.expire_date=7956886942}$done({body:JSON.stringify(obj)});
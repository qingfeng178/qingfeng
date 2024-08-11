/*************************************
qf hbxs
**************************************

[rewrite_local]
https?:\/\/.*\.ihuaben\.com\/(api\/userinfo|book\/app\/(vipReadWaitSeconds|book)|function\/bookservice\/authorInfo) url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/huabenxiaoshuo.js

[mitm]
hostname = *.ihuaben.com

*************************************/


var qf = JSON.parse($response.body);
const user = /api\/userinfo/;
const yuedu = /book\/app\/vipReadWaitSeconds/;
const authorinfo = /function\/bookservice\/authorInfo/;
const book = /book\/app\/book/;

if(user.test($request.url)){
   qf["isPaymentMember"] = true;
   qf["isMember"] = true;
   qf["testGroup"] = "D";
   qf["isContractAuthor"] = true;
   qf["memberEndTime"] = "2099-09-09 09:09:09";
   qf["isRealNameCertification"] = true;
}

if(yuedu.test($request.url)){
   qf.hpFee = 1;
   qf.isDimeMemberExperinceAvailable = true;
}

if(authorinfo.test($request.url)){
   qf.authorInfo["userStatus"] = 1;
   qf.authorInfo["isMember"] = true;
}

if(book.test($request.url)){
   qf.book.marks.isMember = true;
}

$done({body : JSON.stringify(qf)});
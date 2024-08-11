

/*******************************

脚本名称:解螺旋

/*******************************


^http[s]?:\/\/(app.helixlife.cn|api.helixlife.cn)\/api\/v1\/(user/overviews|user/users/profile|edu/trainings|edu/courses)\/*

url script-response-body https://raw.githubusercontent.com/qingfeng178/qingfeng/main/jieluoxuan.js



[mitm]
hostname = app.helixlife.cn,api.helixlife.cn



*******************************/

var body = $response.body;
var url = $request.url;

if (url.indexOf("/api/v1/edu") != -1) {

body = body.replace(/"is_free":false/g, '"is_free":true').replace(/"is_vip":false/g, '"is_vip":true').replace(/"success":false/g,'"success":true')
.replace(/"code":\d+/g,'"code":20000')
.replace(/"message":".*?"/g,'"message":"已解锁视频"');
}



var obj = JSON.parse(body);
const vip = '/api/v1/user';
if (url.indexOf(vip) != -1) {

obj.data.roles = [{


"role_name": "用户",


"level_code": "LEVEL_PAID",


"role_code": "ROLE_USER",


"icon": null,


"level_name": "付费用户",


"ended_at": null

}, {


"role_name": "会员",


"level_code": "LEVEL_LIFETIME",


"role_code": "ROLE_MEMBER",


"icon": "https://static.helixlife.cn/V4/image/member/end.png",


"level_name": "终身会员",


"ended_at": null

}];
}

body = JSON.stringify(obj);

$done({ body });

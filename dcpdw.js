/**
 * @name 脚本名称 (如: 某App会员破解)
 * @desc 模拟VIP权限和过期时间
 */

let body = $response.body;

if (body) {
    // 将 is_vip":0 或类似数字替换为 1
    body = body.replace(/"is_vip":\d+/g, '"is_vip":1');
    
    // 将 vip_time 替换为 2099年
    body = body.replace(/"vip_time":"[^"]*"/g, '"vip_time":"2099-12-31 23:59:59"');
    
    $done({ body });
} else {
    $done({});
}
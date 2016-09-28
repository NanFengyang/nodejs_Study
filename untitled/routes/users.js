var express = require('express');
var userdao = require("../dao/UserDao");
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    var userdaoshow = "userdao.addUser()";//调用
    res.send({
        code: 200,
        msg: "数据请求陈宫",
        content: userdaoshow
    });
});
/* post users listing. */
router.post('/', function (req, res, next) {
    var hanr = req.header("token")//验证header
    console.log("hanr:" + hanr)//输出
    if (hanr == "123456789") {
        console.log("token验证通过")//输出
        res.send({
            code: 200,
            msg: "数据请求成功",
            user: {
                name: "莫少雪",
                sex: "女",
                email: "2511575099@qq.com"
            }
        })
    } else {
        console.log("token验证失败")//输出
        res.send("token失效")
    }
});
module.exports = router;

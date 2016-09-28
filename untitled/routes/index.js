var express = require('express');
var router = express.Router();
var app = express();
/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    res.render('mytext');
});

router.post('/', function (req, res, next) {
    res.send({status: "请求数据"});
});
module.exports = router;

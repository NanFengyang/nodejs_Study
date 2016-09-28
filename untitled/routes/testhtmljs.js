/**
 * Created by Administrator on 2016/9/28.
 */
var express = require('express');
var routes = express.Router();

routes.get('/', function (req, res, next) {
    res.render('test');
});
routes.post('/', function (req, res, next) {
    res.send("POST方法");
});
routes.put('/', function (req, res, next) {
    res.send("PUT方法");
});
routes.delete('/', function (req, res, next) {
    res.send("delete方法");
});
module.exports = routes;

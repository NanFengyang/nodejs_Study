/**
 * Created by Administrator on 2016/9/13.
 */
function addUser() {
    console.log("开始进入方法");
    var show;
    for (var i = 0; i < 10; i++) {
        show = (i * i);
        console.log("计算sum:" + show)
    }
}
module.exports = addUser();//必须使用

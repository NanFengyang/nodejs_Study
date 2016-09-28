/**
 * Created by Administrator on 2016/9/28.
 */
var User = {
    username: "莫少雪",
    userage: 25,
    userimgpath: "./images/img1.png",
    userborth: "2003/11/22"
};
/**
 *button点击效果
 */
var isClick = true;
function mybuttonclick() {
    var showtest;
    if (isClick) {
        showtest = "你点击我干啥呢？？？我又没有惹你。";
    } else {
        showtest = "特么的，都告诉你了，别在点击了。还要点击";
    }
    document.getElementById("click_p").innerHTML = showtest;
    isClick = !isClick;
    User.username = "小峰峰";
    User.username = "老姐诗诗";
    alert("名字：" + User.username + "-头像地址：" + User.username);
}


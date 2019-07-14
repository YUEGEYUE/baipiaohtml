// 关浩延

$(document).ready(function(){
    var obj;
    obj=JSON.parse('[{ "playVolume":"100", "commentVolume":10000, "videoTitle":"白漂测试","videoPic":"./img/背景图.PNG" },{ "playVolume":"180", "commentVolume":100, "videoTitle":"白漂测试2","videoPic":"./img/top.png" }]');
    $("#vcard").append(setc(obj));
    function setc(data){
        var c ="<div "+ 'class='+'"card ghy_card_size ghy_noborder"'+">"+
        "<div "+ 'class='+'"card-body ghy_nopadding"'+">"+
        "<div "+ 'class='+'"card img-fluid ghy_noborder"'+">"+
        "<img "+ 'class='+'"ghy_card_size"'+'src='+data[1].videoPic
        +" alt"+'='+data[1].videoTitle+">"+
        "<div "+ 'class='+'"card-img-overlay ghy_text_overflow ghy_color"'+">"+
        "<i "+ 'class='+'"fa fa-play-circle fa-lg"'+">"+"</i>"+"："+data[1].playVolume+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
        "<i "+ 'class='+'"fa fa-list-alt fa-lg"'+">"+"</i>"+"："+data[1].commentVolume+"</br>"+
        data[1].videoTitle+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>";
        return c;
    }
    

});

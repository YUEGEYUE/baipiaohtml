// 关浩延

$(document).ready(function(){
    var obj;
    obj=JSON.parse('{ "playVolume":"100", "commentVolume":10000, "videoTitle":"白漂测试","videoPic":"https://static.runoob.com/images/mix/img_avatar.png" }');
    $("#vcard").append(setc(obj));
    function setc(data){
        var c ="<div "+ 'class='+'"card ghy_card_size ghy_noborder"'+">"+
        "<div "+ 'class='+'"card-body ghy_nopadding"'+">"+
        "<div "+ 'class='+'"card img-fluid ghy_noborder"'+">"+
        "<img "+ 'class='+'"ghy_card_size"'+'src='+data.videoPic
        +" alt"+'='+data.videoTitle+">"+
        "<div "+ 'class='+'"card-img-overlay ghy_text_overflow ghy_color"'+">"+
        "<i "+ 'class='+'"fa fa-play-circle fa-lg"'+">"+"</i>"+"："+data.playVolume+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
        "<i "+ 'class='+'"fa fa-list-alt fa-lg"'+">"+"</i>"+"："+data.commentVolume+"</br>"+
        data.videoTitle+
        "</div>"+
        "</div>"+
        "</div>"+
        "</div>";
        return c;
    }
    

});

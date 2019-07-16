// 关浩延


    var ghy_obj;
    
    ghy_obj=JSON.parse('[{ "playVolume":"100", "commentVolume":10000, "videoTitle":"白漂测试","videoPic":"./img/背景图.PNG" },{ "playVolume":"180", "commentVolume":100, "videoTitle":"白漂测试2","videoPic":"./img/top.png" },{ "playVolume":"6660", "commentVolume":105, "videoTitle":"白漂测试3333333333","videoPic":"./img/more_circle.png" }]');
    for(var i = 0;i < 12;i++){
        $(".vcard").append(setc(ghy_obj[i%3]));
    }
    
    function setc(data){
        var c ="<div "+'id= "'+ i +'"class='+'"card d-inline-flex ghy_card_size ghy_noborder ghy_margin"'+">"+
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
    



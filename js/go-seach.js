$(document).ready(function () {
    // <p id="vcard"></p>

    var j = JSON.parse('{ "playVolume":"100", "commentVolume":10000, "videoTitle":"白漂测试","videoPic":"https://static.runoob.com/images/mix/img_avatar.png" }');
    for (var i = 0; i < 24; i++) {

        $("#vcard").append(setc(j));


    }


    // function setc(data){
    //     var c ="<div "+ 'class='+'"card ghy_card_size ghy_noborder"'+">"+
    //     "<div "+ 'class='+'"card-body ghy_nopadding"'+">"+
    //     "<div "+ 'class='+'"card img-fluid ghy_noborder"'+">"+
    //     "<img "+ 'class='+'"ghy_card_size"'+'src='+data.videoPic
    //     +" alt"+'='+data.videoTitle+">"+
    //     "<div "+ 'class='+'"card-img-overlay ghy_text_overflow ghy_color"'+">"+
    //     "<i "+ 'class='+'"fa fa-play-circle fa-lg"'+">"+"</i>"+"："+data.playVolume+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+
    //     "<i "+ 'class='+'"fa fa-list-alt fa-lg"'+">"+"</i>"+"："+data.commentVolume+"</br>"+
    //     data.videoTitle+
    //     "</div>"+
    //     "</div>"+
    //     "</div>"+
    //     "</div>";
    //     return c;
    // }
    function setc(da) {
        var d =

            "<div class='d-flex flex-wrap bg-light col-md-3'>" +
            "<div class='card'>" +
            "<img class='ghy_card_size' src='./../img/abendstimmung-4315445__340.jpg' style='width:100% ' alt=da.videoTitle>" +
            "<div class='card-img-overlay ghy_text_ovejrflow ghy_color'>" +
            "<i class='fa fa-play-circle fa-lg'></i>" + ':' + da.playVolume +
            "<i class='fa fa-list-alt fa-lg'> </i>" + ':' + da.commentVolume + '</br>' +
            "</div>" +

            "</div>" +
            "</div>";

        return d;

    }

});





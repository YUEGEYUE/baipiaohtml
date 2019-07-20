function tvshow(){
    $.ajax({
        type: "post",
        url: SERVERCOM+"/api/v1/videos",
        data: {videoType:'tv'},
        dataType: "json",
        success: function (response) {
            var le=0;
            response.data.length>12 ? le=12:le=response.data.length;
            for(var i=0;i<le;i++){
                $("#tv-vcard").append(setc(response.data[i]));
            }
        }
    });
}
function filmshow(){
    $.ajax({
        type: "post",
        url: SERVERCOM+"/api/v1/videos",
        data: {videoType:'film'},
        dataType: "json",
        success: function (response) {
            var le=0;
            response.data.length>12 ? le=12:le=response.data.length;
            for(var i=0;i<le;i++){
                $("#film-vcard").append(setc(response.data[i]));
            }
        }
    });
}
function animeshow(){
    $.ajax({
        type: "post",
        url: SERVERCOM+"/api/v1/videos",
        data: {videoType:'anime'},
        dataType: "json",
        success: function (response) {
            var le=0;
            response.data.length>12 ? le=12:le=response.data.length;
            for(var i=0;i<le;i++){
                $("#anime-vcard").append(setc(response.data[i]));
            }
        }
    });
}
function mvshow(){
    $.ajax({
        type: "post",
        url: SERVERCOM+"/api/v1/videos",
        data: {videoType:'mv'},
        dataType: "json",
        success: function (response) {
            var le=0;
            response.data.length>12 ? le=12:le=response.data.length;
            for(var i=0;i<le;i++){
                $("#mv-vcard").append(setc(response.data[i]));
            }
        }
    });
}
function adshow(){
    $.ajax({
        type: "post",
        url: SERVERCOM+"/api/v1/videos",
        data: {videoType:'ad'},
        dataType: "json",
        success: function (response) {
            var le=0;
            response.data.length>12 ? le=12:le=response.data.length;
            for(var i=0;i<le;i++){
                $("#ad-vcard").append(setc(response.data[i]));
            }
        }
    });
}
$(document).ready(function () {
    CMAP = getCmap();
    if (CMAP != null) {
        $("#message").css("display", "inline");
        $("#lbf-userpic").attr("href", "./loge/personal.html");
        if (CMAP.get("userPic") == 'http://localhost/BaiPiao-PHP/' ||
            CMAP.get("userPic") == null) {
            // alert('dd');
            $("#lbf-userpic").find("img").attr("src", "./img/mrt.jpg");
        } else {
            $("#lbf-userpic").find("img").attr("src", CMAP.get("userPic"));
        }
    } else {
        
        $("#lbf-userpic").attr("href", "./loge/login.html");
        $("#lbf-userpic").find("img").attr("src", "./img/mrt.jpg");
    }
    tvshow();
    filmshow();
    animeshow();
    mvshow();
    adshow();

    getnotification2id("");
    

    $('#lbf-exit-but').click(function () { 
        removeCmap();
        removeHISTORY_VIEW();
        location.reload();
    });

    $("#tt1").mouseenter(function () {
        $("#tt1").click();
    });
    $("#lbf-secbut").click(function () { 
        location.href='./loge/go-seach.html?keyword='+$("#search").val();
        
    });
});


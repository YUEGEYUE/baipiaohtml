$(document).ready(function () {
    CMAP = getCmap();
    $("#lbf-ed-username").text(CMAP.get('userName'));
    if (CMAP.get('userPic') == null || CMAP.get('userPic') == 'http://localhost/BaiPiao-PHP/') {
        $("#lbf-ed-pic").find("img").attr("src", "./img/mrt.jpg");
    }else{
        $("#lbf-ed-pic").find("img").attr("src", CMAP.get('userPic'));
    }

});
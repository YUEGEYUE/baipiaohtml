$(document).ready(function () {
    CMAP = getCmap();
    if (CMAP != null) {
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
    $("#tt1").mouseenter(function () {
        $("#tt1").click();


    });
});



$(document).ready(function () {
    const dp = new DPlayer({container: document.getElementById('dplayer')});
    

    $.ajax({
        type: "post",
        url: "http://172.16.56.161:10009/audit_video_api/video_info_id.php",
        data: {videoId:GetQueryString("vid")},
        dataType: "json",
        success: function (response) {
            alert(response);
            // dp.switchVideo({
            //     url:response.videoUrl,
            //     pic:response.videoUrlPic
            // },{
            //     id:response.id
            // });
        }
    });
});






window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

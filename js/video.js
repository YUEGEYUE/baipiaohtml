
$(document).ready(function () {
    const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {},
        danmaku: {
            id: 'notest',
            api: DANMUKEURL,
        }
    });



    $.ajax({
        type: "post",
        url: "http://172.16.56.161:10009/audit_video_api/video_info_id.php",
        data: { videoId: GetQueryString("vid") },
        dataType: "json",
        success: function (response) {
            //  alert(response[0].videoUrl);
            $("#y_title").text(response[0].videoTitle);
            $("#y_summary-info").text(response[0].videoIntroduction);
            dp.switchVideo({
                url: SERVERCOM + "/" + response[0].videoUrl,
                pic: SERVERCOM + "/" + response[0].videoPic
            }, {
                    id: '' + response[0].videoId,
                    api: DANMUKEURL,
                });
            getcom();
        }
    });



    $('#lbf_sendcombut').click(function () {
        // e.preventDefault();
        if($("#lbf_comment").val()==""){
            alert('填写评论');
            return false;
        }else if(CMAP==null){
            alert('登录评论');
            location.href="./../loge/login.html";
            return false;
        }else {
            $.ajax({
                type: "post",
                url: SERVERCOM+'/api/v1/comment',
                data: {
                    userId:CMAP.get('userId'),
                    videoId:GetQueryString("vid"),
                    comment:$("#lbf_comment").val()
                },
                dataType: "json",
                error:function(re){
                    alert('发送失败');
                },
                success: function (response) {
                    $("#lbf_comshomw").children("span").remove();
                    comui(
                        {
                            comment:$("#lbf_comment").val(),
                            userId:CMAP.get('userId')
                        }
                    );

                    $.post("172.16.56.161:10009/audit_video_api/video_volume_add.php", 
                        {
                            requirement:'commentVolume'
                        },
                        function (data, textStatus, jqXHR) {
                            alert("发送成功");
                        },
                    );
                }
            });
        }
    });
});


function getcom() {
    $.ajax({
        type: "post",
        url: SERVERCOM + "/api/v1/comments",
        data: { videoId: GetQueryString("vid") },
        dataType: "json",
        error: function (re) {
            $("#lbf_comshomw").append("<span>没有评论</span>");
        },
        success: function (response) {

            for (var i = 0; i < response.data.length; i++)
                $("#lbf_comshomw").append(comui(response.data[0]));


        }
    });
}

function comui(da) {
    var t =
        "<div class='card bg-light text-dark'>" +
        "<div class='card-body'>" +
        "<blockquote class='blockquote'>" +
        "<p>" + da.comment + "</p>" +
        "<footer class='blockquote-footer'>" + da.userId + "</footer>" +
        "</blockquote>" +
        "</div>" +
        "</div>";
    return t;
}



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

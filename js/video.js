
$(document).ready(function () {
    var lockst = 0;
    CMAP = getCmap();
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
        url: SERVERCOM2 + "/audit_video_api/video_info_id.php",
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
    HISTORY_VIEW = getHISTORY_VIEW();
    if (HISTORY_VIEW != null) {
        HISTORY_VIEW.forEach(function (k, v) {
            if (v[0] == GetQueryString("vid")) {
                dp.seek(v[1]);
            }
        }, HISTORY_VIEW);
    }

    dp.on('play', function () {
        if (lockst == 0) {
            $.post(SERVERCOM2 + "/audit_video_api/video_volume_add.php",
                {
                    requirement: 'playVolume',
                    videoId: GetQueryString("vid")
                },
                function (data, textStatus, jqXHR) {
                    // alert("发送成功");
                },
            );
            lockst = 1;
        }
    });
    dp.on('progress', function () {
        // console.log(dp.video.currentTime);

        var d = new Date();
        var hiske=$("#y_summary-info").text();
        var hisva = Array(
            GetQueryString("vid"),
            dp.video.currentTime,
            d.toLocaleDateString() + " " + d.toLocaleTimeString()
        );
        HISTORY_VIEW.set(hiske,hisda);
        saveHISTORY_VIEW();
    });
    dp.on('danmaku_send', function () {
        $.post(SERVERCOM2 + "/audit_video_api/video_volume_add.php",
            {
                requirement: 'danmukeVolume',
                videoId: GetQueryString("vid")
            },
            function (data, textStatus, jqXHR) {
                alert("弹幕发送成功");
            },
        );
    });

    $('#lbf_sendcombut').click(function () {
        // e.preventDefault();
        if (CMAP == null) {
            alert('请登录评论');
            location.href = "./../loge/login.html";
            return false;
        }
        if ($("#lbf_comment").val() == "") {
            alert('填写评论');
            return false;
        } else {
            $.ajax({
                type: "post",
                url: SERVERCOM + '/api/v1/comment',
                data: {
                    userId: CMAP.get('userId'),
                    videoId: GetQueryString("vid"),
                    comment: $("#lbf_comment").val()
                },
                dataType: "json",
                error: function (re) {
                    alert('发送失败');
                },
                success: function (response) {
                    $("#lbf_comshomw").children("span").remove();
                    $("#lbf_comshomw").append(
                        comui(
                            {
                                comment: $("#lbf_comment").val(),
                                userId: CMAP.get('userId')
                            }
                        ));

                    $.post(SERVERCOM2 + "/audit_video_api/video_volume_add.php",
                        {
                            requirement: 'commentVolume',
                            videoId: GetQueryString("vid")
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

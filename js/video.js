
$(document).ready(function () {
    var lockst = 0;
    var vidtitle;
    var vidpic;
    CMAP = getCmap();
    if(CMAP==null){
        $("#lbf_down_but").hide();
    }
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
            $.post(SERVERCOM2 + "/audit_video_api/user_id_to_info.php",
                { userId: response[0].userId },
                function (data, textStatus, jqXHR) {
                    if(data[0].userPic!=null)
                        $("#up_pic").attr("src", SERVERCOM + "/" + data[0].userPic);
                    else
                    $("#up_pic").attr("src", './../img/mrt.jpg');
                    $("#y_u-name").text(data[0].userName);
                },

            );
            $("#lbf_down_but").attr('href', SERVERCOM+"/"+response[0].videoUrl);
            $("#lbf_down_but").attr('download', response[0].videoTitle);
            $("#y_title").text(response[0].videoTitle);
            $("#y_summary-info").text(response[0].videoIntroduction);
            vidtitle = response[0].videoTitle;
            vidpic = SERVERCOM + "/" + response[0].videoPic;
            dp.switchVideo({
                url: SERVERCOM + "/" + response[0].videoUrl,
                pic: SERVERCOM + "/" + response[0].videoPic
            }, {
                    id: '' + response[0].videoId,
                    api: DANMUKEURL,
                });
            getcom();
            hisseek();
        }
    });


    function hisseek() {
        HISTORY_VIEW = getHISTORY_VIEW();
        if (HISTORY_VIEW != null) {

            HISTORY_VIEW.forEach(function (value, key, map) {
                if (value[0] == GetQueryString("vid")) {
                    dp.seek(value[2]);

                }
            });
        } else {
            HISTORY_VIEW = new Map();
        }
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

        var hisva = Array(
            GetQueryString("vid"),
            vidpic,
            dp.video.currentTime,
            d.toLocaleDateString() + " " + d.toLocaleTimeString()
        );
        HISTORY_VIEW.set(vidtitle, hisva);
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
                                userId: CMAP.get('userId'),
                                userPic: CMAP.get('userPic'),
                                userName: CMAP.get('userName')
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
            var pic;
            for (var i = 0; i < response.data.length; i++) {
                if(response.data[i].userPic==SERVERCOM+"/"){
                    pic='./../img/mrt.jpg'
                }else{
                    pic=SERVERCOM + "/" +response.data[i].userPic
                }
                $("#lbf_comshomw").append(
                    comui({
                        userName: response.data[i].userName,
                        comment: response.data[i].comment,
                        userPic: pic,
                    }));
            }



        }
    });
}

function comui(da) {
    var t =
        "<div class='card bg-light text-dark'>" +
        "<div class='card-body'>" +
        "<blockquote class='blockquote'>" +
        "<p>" + da.comment + "</p>" +
        "<footer class='blockquote-footer'>" +
        "<img src='" +  da.userPic + "' class='rounded' alt='Cinque Terre' style='width:48px;height:48px; ' > " +
        da.userName +
        "</footer>" +
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

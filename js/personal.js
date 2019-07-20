$(document).ready(function () {
    CMAP = getCmap();
    $("#lbf-ed-username").text(CMAP.get('userName'));
    if (CMAP.get('userPic') == null || CMAP.get('userPic') == "http://172.16.56.161:10007/") {
        $("#lbf-ed-pic").attr("src", "./img/mrt.jpg");
    } else {
        $("#lbf-ed-pic").attr("src", CMAP.get('userPic'));
    }

    sethis();
    getuserup();
    getnotification2id("lbf_noti");
    $("#userPic").change(function () {
        // $("#lbf-ed-pic").attr("src",$("#userPic")[0].files[0]);
        var files = this.files;
        var file = files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var urlsrc = this.result;
            $("#lbf-ed-pic").attr('src', urlsrc);
        }

    });
    $("#userPicbut").click(function (e) {
        var formData = new FormData();
        formData.append('userPic', $("#userPic")[0].files[0]);
        formData.append('userId', CMAP.get('userId'));
        $(this).attr("disabled", "disabled");
        $("#userPic").attr("disabled", "disabled");
        $.ajax({
            url: SERVERCOM + '/api/v1/avatar',
            type: 'post',
            data: formData,
            dataType: "json",
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            error: function (e) {
                console.log(e.responseText);
                alert("上传失败");
                location.reload();
            },
            success: function (res) {
                console.log(res.data);
                alert("上传成功");
                CMAP.set('userPic', res.data.userPic);
                $("#lbf-ed-pic").attr("src", res.data.userPic);
                saveCmap();
                location.reload();
            }
        });

    });


    function sethis() {
        $("#lgl_recode").children().remove();
        HISTORY_VIEW = getHISTORY_VIEW();
        if (HISTORY_VIEW == null) {
            return false;
        } else {
            HISTORY_VIEW.forEach(function (value, key, map) {
                $("#lgl_recode").append(hiscard(key, value));
            });
        }
    }
    function hiscard(k, v) {
        var c =
            "<div class='card bg-light text-dark hisc '    vidid='" + v[0] + "'>" +
                "<div class='card-body'>" +
                    "<div style='float:left; height:100px;' class='col-2'>" +
                        "<img style=' max-height:100%;margin:auto;' src='" + v[1] + "'/>" +
                    "</div>" +
                    "<h3 class='col-4' style='float:left;'>" + k + "</h3>" +
                    "<span class='col-2' style='float:left;'>看到" + v[2] + "秒</span>" +
                    "<h5 class='col-2' style='float:left;'>" + v[3] + "</h5>" +
                "</div>" +
            "</div>";
        return c;
    }
    $(document).on("click", ".hisc", function () {
        location.href = "./../vid/video.html?vid=" + $(this).attr("vidid");
    });

    function getuserup(){
        $("#lgl_upload").children().remove();
        $.post(SERVERCOM2+"/audit_video_api/video_info_by_userid.php", 
            {userId:CMAP.get('userId')},
            function (data, s) {
                if(data.length>0&&data!='Error Respond'){
                    for(var i=0;i<data.length;i++){
                        $("#lgl_upload").append(upcard(data[i]));
                    }
                }
            },
        );
    }

    function upcard(da) {
        var ccolor;
        var ts;
        da.videoStatus == 1 ? ccolor = "bg-success" : ccolor = "bg-warning";
        da.videoStatus == 1 ? ts = "" : ts = "审核中";
        var c =
            "<div class='card "+ccolor+" text-dark   lbf_upc' vidid='"+da.videoId+"'  vidsts='"+da.videoStatus+"'>" +
                "<div class='card-body'>" +
                    "<div style='float:left; height:100px;' class='col-2'>" +
                        "<img style=' max-height:100%;margin:auto;' src='" + SERVERCOM + "/" + da.videoPic + "'/>" +
                    "</div>" +
                    "<h1 class='col-6' style='float:left;'>" + da.videoTitle + "</h1>" +
                    "<h5 class='col-4' style='float:left;'>"+ts+"</h5>" +
                "</div>" +
            "</div>";
        return c;
    }
    $(document).on("click", ".lbf_upc", function () {
        if($(this).attr("vidsts")=='1')
            location.href = "./../vid/video.html?vid=" + $(this).attr("vidid");
        else
            return false;
    });
});
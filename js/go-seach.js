
function getserchdata(kw) {
    $("#lbf-sea-vcard").children().remove();
    $.ajax({
        type: "post",
        url: SERVERCOM + "/api/v1/videos",
        data: { videoTitle: kw },
        dataType: "json",
        success: function (response) {
            // alert("response.data.length:"+response.data.length);
            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    $("#lbf-sea-vcard").append(setc(response.data[i]));
                }
            } else {
                da = null;
                alert("没有找到视频");
            }

        }
    });

}

$(document).ready(function () {
    // alert(GetQueryString("keyword"));
    if (GetQueryString("keyword") != "") {
        getserchdata(GetQueryString("keyword"));
    }
    $("#yfm_seabut").click(function (e) {
        if ($("#yfm_seainput").val() == "") {
            alert("请输入搜索词");
        } else {
            getserchdata($("#yfm_seainput").val());
        }


    });

    $("#yfm_seainput").keyup(function (e) { 
        if(e.keyCode==13||e.keyCode==100){
            if ($("#yfm_seainput").val() == "") {
                alert("请输入搜索词");
            } else {
                getserchdata($("#yfm_seainput").val());
            }
        }
        else
            return false;
    });

    $("#yfm_seainput").keydown(function (e) { 
        if(e.keyCode==13||e.keyCode==100){
            return false;
        }
            
    });
});

// yfm



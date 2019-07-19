
function getserchdata(kw) {
    alert(kw);
    var da;
    // var fo=new FormData();
    // fo.append('videoTitle',kw);
    $.ajax({
        type: "post",
        url: SERVERCOM + "/api/v1/videos",
        data: { videoTitle: kw },
        dataType: "json",
        success: function (response) {
            alert("response.data.length:"+response.data.length);
            if (response.data.length > 0) {
                for (var i = 0; i < response.data.length; i++) {
                    $("#lbf-sea-vcard").append(setc(response.data[i]));
                    
                }
            } else {
                da = null;
            }

        }
    });
    return da;
}

$(document).ready(function () {
    // alert(GetQueryString("keyword"));
    getserchdata(GetQueryString("keyword"));
});

// yfm



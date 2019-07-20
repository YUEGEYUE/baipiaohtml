$(document).ready(function () {

    switch (GetQueryString("videoType")) {
        case 'tv':
            $("#lbf_fq_type").text("电视剧");
            break;

        case 'film':
            $("#lbf_fq_type").text("电影");
            break;
        case 'anime':
            $("#lbf_fq_type").text("动漫");
            break;
        case 'mv':
            $("#lbf_fq_type").text("MV");
            break;
        case 'ad':
            $("#lbf_fq_type").text("广告");
            break;
        default:
            break;
    }
    setfqshow();
    function setfqshow() {
        $.ajax({
            type: "post",
            url: SERVERCOM + '/api/v1/videos',
            data: { videoType: GetQueryString("videoType") },
            dataType: "json",
            error: function (response) {
                alert('获取失败，请刷新');
            },
            success: function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    $("#lbf_fqshow").append(setc(response.data[i]));
                }
            }
        });
    }
});
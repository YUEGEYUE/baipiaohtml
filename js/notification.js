function getnotification() {
    $.post("url",
        { userId: CMAP.get('userId') },
        function (data, textStatus, jqXHR) {
            if (data != 'Error Respond') {
                if ($.cookie('notification') == null ||
                    $.cookie('notification') != data[0].notificationId) {
                    //更新ui
                    $("#lbf_mess").text("有新消息");
                    $.cookie('notification',data[0].notificationId,{ expires: 7, path: '/' })
                }
                var len;
                data.length >= 5 ? len = 5 : len = data.length;
                for (var i = 0; i < len; i++) {
                    $("#popodelt").append("<li>"+data[i].notification+"</li>");
                }
            }
        },
    );
}
$("#lbf_mess").popover({
    // trigger:'hover',
    html:true,
    content:$("#lbf_popom").html()
});
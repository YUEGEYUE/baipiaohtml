
function getnotification2id(domid) {
    $.post(SERVERCOM2+'/audit_video_api/notification_info_by_userid.php',
        { userId: CMAP.get('userId') },
        function (data, textStatus, jqXHR) {
            if (data != 'Error Respond') {
                if ($.cookie('notification') == null ||
                    $.cookie('notification') != data[0].notificationId) {
                    //更新ui
                    $("#lbf_mess").text("有新消息");
                    $.cookie('notification',data[0].notificationId,{ expires: 7, path: '/' })
                }
                if(domid!=""){
                    var len;
                    data.length >= 5 ? len = 5 : len = data.length;
                    $("#"+domid).append("<ul class='list-group'>");
                    for (var i = 0; i < len; i++) {
                        $("#"+domid).append("<li>"+data[i].notification+"</li>");
                    }
                    $("#"+domid).append("</ul>");
                }
                
            }
        },
    );
}


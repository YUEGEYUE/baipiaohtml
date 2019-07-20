function getnotification() {
    $.post("url",
        { userId: CMAP.get('userId') },
        function (data, textStatus, jqXHR) {
            if (data != 'Error Respond') {
                if ($.cookie('notification') == null ||
                    $.cookie('notification') != data[0].notificationId) {
                    //更新ui
                    $.cookie('notification',data[0].notificationId,{ expires: 7, path: '/' })
                }
                var len;
                data.length >= 5 ? len = 5 : len = data.length;
                for (var i = 0; i < len; i++) {
                    
                }
            }
        },
    );
}
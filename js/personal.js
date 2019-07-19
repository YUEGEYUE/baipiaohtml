$(document).ready(function () {
    CMAP = getCmap();
    $("#lbf-ed-username").text(CMAP.get('userName'));
    if (CMAP.get('userPic') == null || CMAP.get('userPic') == "http://172.16.56.161:10007/") {
        $("#lbf-ed-pic").attr("src", "./img/mrt.jpg");
    }else{
        $("#lbf-ed-pic").attr("src", CMAP.get('userPic'));
    }


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
        var formData=new FormData();
        formData.append('userPic',$("#userPic")[0].files[0]);
        formData.append('userId',CMAP.get('userId'));
        $(this).attr("disabled","disabled");
        $("#userPic").attr("disabled","disabled");
        $.ajax({
            url: SERVERCOM+'/api/v1/avatar',
            type: 'post',
            data: formData,
            dataType : "json",
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            error:function(e){
                console.log(e.responseText);
                alert("上传失败");
                location.reload();
            },
            success: function (res) {
                console.log(res.data);
                alert("上传成功");
                CMAP.set('userPic',res.data.userPic);
                $("#lbf-ed-pic").attr("src", res.data.userPic);
                saveCmap();
                location.reload();
            }
        });
        
    });
   
});
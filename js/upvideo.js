// 林倍锋
$(document).ready(function () {
    $("#lbf-progress").hide();
    CMAP = getCmap();
    if(CMAP==null){
        alert('请先登录');
        location.href="./login.html";
    }
    $("#vidshow").hide();


    $("#videoUrl").change(function () {
        var files = this.files;
        var file = files[0];
        // alert(file.name);
        var fh=$(this).val().split(".");
        if(fh[fh.length-1]!="mp4"){
            alert("请上传mp4文件");
            return false;
        }
        $("#upvidname").text(file.name);

    });
    $("#videoPic").change(function () {
        
        var files = this.files;
        var file = files[0];
        var fh=$(this).val().split(".");
        //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件 
        if (fh[fh.length-1]!="png") {
            alert("请上传png图像");
            return false;
        }
        $("#vidshow").fadeToggle("slow");
        $("#upvidPicname").text($(this).val());
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            var urlsrc = this.result;
            $('#vpic').attr('src', urlsrc);
        }
    });


    $("#subbut").click(function () { 
        // e.preventDefault();
        if($("#videoTitle").val()==""
            ||$("#videoUrl").val()==""
            ||$("#videoPic").val()==""
            ||$("#videoType").val()==""
            ||$("#videoIntroduction").val()==""
            ){

        }else{
            // alert(CMAP.get('userId'));
            var formData = new FormData();
			formData.append("videoUrl", $("#videoUrl")[0].files[0]);
			formData.append("videoPic", $("#videoPic")[0].files[0]);
			formData.append("videoTitle", $("#videoTitle").val());
			formData.append("videoType", $("#videoType").val());
			formData.append("videoIntroduction", $("#videoIntroduction").val());
            formData.append("userId", CMAP.get('userId'));
            $("#selectca").children().attr("disabled", "disabled");
            $("#lbf-progress").show(200);
			$.ajax({
				url: SERVERCOM+'/api/v1/video',
				type: 'post',
                data: formData,
                dataType : "json",
				async: true,
				cache: false,
				contentType: false,
				processData: false,
				xhr: function () {
					myXhr = $.ajaxSettings.xhr();
					if (myXhr.upload) { // check if upload property exists
						myXhr.upload.addEventListener('progress', function (e) {
							var loaded = e.loaded;                  //已经上传大小情况 
							var total = e.total;                      //附件总大小 
							var percent = Math.floor(100 * loaded / total) + "%";     //已经上传的百分比  
							console.log("已经上传了：" + percent);
							$("#lbf-re-pro").css("width", percent);
						}, false); // for handling the progress of the upload
					}
					return myXhr;
				},
				error:function(e){
                    console.log(e.responseText);
                    
                },
                
				success: function (res) {
                    console.log(res.data);
                    alert("上传成功");
                    $("#selectca").children().attr("disabled", "enabled");
                    location.reload();
				}
			})
        }
    });
});
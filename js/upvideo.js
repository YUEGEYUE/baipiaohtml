// 林倍锋
$(document).ready(function () {

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
        if($("#videoTitle").val()==""||("#videoTitle").val()==null
            ||$("#videoUrl").val()==""||("#videoUrl").val()==null
            ||$("#videoPic").val()==""||("#videoPic").val()==null
            ||$("#videoType").val()==""||("#videoType").val()==null
            ||$("#videoIntroduction").text()==""||("#videoIntroduction").text()==null
            // ||$("#videoTitle").val()==""||("#videoTitle").val()==null usserid
            ){

        }else{
            
        }
    });
});
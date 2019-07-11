// 林倍锋
$(document).ready(function () {
   
    $("#upvid").change(function (e) { 
        e.preventDefault();
        alert($(this).val());
        // $("#upvidname").text($(this).val());
    });
    $("#fmb").click(function (e) { 
        e.preventDefault();
        $("#fm").click();
    });
    $("#fm").change(function (e) { 
        e.preventDefault();
        $("#fmt").val($(this).val());
    });
});
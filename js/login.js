$(document).ready(function () {
    $("#ghy_num").blur(function () {
        if ($(this).val() == '') {
            $(this).css("border", "1px solid red");
            $(this).attr("placeholder", "用户名不能为空");

            // alert("用户名/邮箱不能为空");
        } else {
            $(this).css("border", "1px solid #ced4da");

        }
    });
    $("#ghy_pass").blur(function () {
        if ($(this).val() == '') {
            $(this).css("border", "1px solid red");
            $(this).attr("placeholder", "密码不能为空");
            // alert("密码为空");
        } else {
            $(this).css("border", "1px solid #ced4da");

        }
    });
    $("#denglu").click(function () {
        if ($("#ghy_num").val() == '' || $("#ghy_pass").val() == '') {
            alert("登陆失败");
        } else {

            $.ajax({
                type: "post",
                url: com + "/api/v1/Login",
                data: {
                    userName: $("#ghy_num").val(),
                    userPassword: $("#ghy_pass").val()
                },
                dataType: "json",
                success: function (response) {
                    
                    console.log(response.data.userId);
                },
                error:function(re){
                    alert(JSON.parse(re.responseText)['msg']);
                    
                }
            });

        }

    });
    // 注册
    $("#ghy_un").blur(function () {
        if ($(this).val() == '') {//用val函数获取id为“ghy_un”的输入值,判断是否为空
            $(this).css("border", "1px solid red");//使用css函数改变边框为红色
            $(this).attr("placeholder", "用户名不能为空");//
        } else {
            $(this).css("border", "1px solid #ced4da");
        }
    });
    $("#ghy_em").blur(function () {
        var em = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if ($(this).val() == '') {
            $(this).css("border", "1px solid red");
            $(this).attr("placeholder", "邮箱不能为空");
        } else if (!em.test($("#ghy_em").val())) {
            $(this).css("border", "1px solid red");
            $(this).val("");
            $(this).attr("placeholder", "邮箱格式错误");
        } else {
            $(this).css("border", "1px solid #ced4da");
        }
    });
    $("#ghy_pw").blur(function () {
        if ($(this).val() == '') {
            $(this).css("border", "1px solid red");
            $(this).attr("placeholder", "密码不能为空");
        } else {
            $(this).css("border", "1px solid #ced4da");
        }
    });


    $("#zhuce").click(function () {
        var em = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if ($("#ghy_un").val() == '' || $("#ghy_pw").val() == '' || $("#ghy_em").val() == '') {
            alert("注册失败");
            return false;
        } else if (!em.test($("#ghy_em").val())) {
            alert('邮箱格式错误');
            return false;

        } else {
            $.ajax({
                type: "post",
                url: com + "/api/v1/register",
                data: {
                    userName:$("#ghy_un").val(),
                    userPassword:$("#ghy_pw").val(),
                    userEmail:$("#ghy_em").val()
                },
                dataType: "json",
                success: function (response) {
                    alert('注册成功');
                },
                error(re){
                    alert(JSON.parse(re.responseText)['msg']);
                }
            });
        }

    });
});
//关浩延
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

            $.post(com+"/api/v1/Login", {
                
                userName: $("#ghy_num").val(),
                userPassword: $("#ghy_pass").val()
            },
                function (data, Status) {
                    if (Status == 'success') {
                        alert("登录成功");
                    } else {
                        alert("登录失败");
                    }
                },
                "Json"
            );
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
        } else if(!em.test($("#ghy_em").val())){
            $(this).css("border", "1px solid red");
            $(this).val("") ;
            $(this).attr("placeholder", "邮箱格式错误");
        } else{
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
        if ($("#ghy_un").val() == '' || $("#ghy_pw").val() == ''||$("#ghy_em").val() == '') {
            alert("注册失败");
        } else {
            var type = 0;
            var em = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!em.test($("#ghy_em").val())) {
                alert("邮箱要验证是否带有@,必须以.com结尾");
                type = 0;
                return;
            } else {
                type = 1;
            }


            $.post("url", {
                type: type,
                userName: "",
                userPassword: ""
            },
                function (data, Status) {
                    if (Status == 'success') {
                        alert("注册成功");
                    } else {
                        alert("注册失败");
                    }
                },
                "Json"
            );
        }

    });
});
//关浩延
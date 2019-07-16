$(document).ready(function () {
    $("#ghy_num").blur(function () {
        if ($(this).val() == '') {
            // $(this).css("border", "1px soild red");
            alert("用户名/邮箱为空");
        }
    });
    $("#ghy_pass").blur(function () {
        if ($(this).val() == '') {
            // $(this).css("border", "1px soild red");
            alert("密码为空");
        }
    });
    $("#denglu").click(function () {
        if ($("#ghy_num").val() == '' || $("#ghy_pass").val() == '') {
            alert("登陆失败");
        } else {
            var type = 0;
            var em = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (!em.test($("#ghy_num").val())) {
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
                    if(Status == 'success'){
                        alert("登录成功");
                    }else{
                        alert("登录失败");
                    }
                },
                "Json"
            );
        }

    });


});
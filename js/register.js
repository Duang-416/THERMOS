//注册验证
    //输入合法性判断
    function check(){
        if($("#username").val()=="" || $("#userpass").val()=="" || $("#checkpass").val()==""){
          alert("带星号的为必填项。");
          return false;  
        }else{
          var str=$("#username").val();
            var reg = /^\d{11}$/;
            if(reg.test(str)==false){
                alert("用户名不合法，请重新输入。");
              return false;
            }
            else if($("#userpass").val()!=$("#checkpass").val()){
              alert("两次输入不一致，请重新输入。");
              return false;
            }
          }
      }
      //get方式判断用户名是否存在
    $("#username").blur(function(){
        $.ajax({
          "url":"checkuser.php",
          "data":{
            "username": $(this).val()
          },
          //loading加载图片
          "beforeSend":function(){
            $("#username").next().html("");
            $("#loadImg").show();
          },
          "error":function(){
            $("#username").next().html("服务器出错，无法验证");
          },
          "success":function(data){
            //5 接收请求
            if(data=="-1"){
              $("#username").next().html("用户名已存在");
            }else{
              $("#username").next().html("用户名可以使用");
            }	
          },
          "complete":function(){
            $("#loadImg").hide();
          }
        });
      });
        //点击注册，提交信息
      $("#btnRegister").click(function(){
        let xhr = new XMLHttpRequest();
        xhr.open("post","regSave.php",true);
        xhr.onreadystatechange = function(){
          if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="-1"){
              $("#messageBox").css("color","red");
              $("#messageBox").html("用户名被人使用");
            }else if(xhr.responseText=="0"){
              $("#messageBox").style.color ="red";
              $("#messageBox").html("注册失败");
            }else if(xhr.responseText=="1"){
              $("#messageBox").css("color","green");
              $("#messageBox").html("注册成功，点击<a href='login.html'>登录</a>");
            }
          }
        }
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        let sendstr = `username=${$("#username").val()}&userpass=${$("#userpass").val()}`;
        xhr.send(sendstr);
      });
  
  
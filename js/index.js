//顶部悬浮
window.onscroll=function(){
    var topScroll = get_scrollTop_of_body();//滚动的距离,距离顶部的距离
    var bignav =document.getElementById("header");//获取到导航栏id
    if(topScroll > 600){ //当滚动距离大于250px时执行下面的东西
      bignav.style.position = 'fixed';
      bignav.style.top = '0';
      bignav.style.zIndex = '9999';
    }else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
      bignav.style.position = 'static';
    }
  }
  /*解决浏览器兼容问题*/
function get_scrollTop_of_body(){ 
    var scrollTop; 
    if(typeof window.pageYOffset != 'undefined'){//pageYOffset指的是滚动条顶部到网页顶部的距离 
        scrollTop = window.pageYOffset; 
    }else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat')        { 
        scrollTop = document.documentElement.scrollTop; 
    }else if(typeof document.body != 'undefined'){ 
        scrollTop = document.body.scrollTop; 
    } 
    return scrollTop; 
} 
$(function(){
// outerbox抖动动画
    let myTimerB = setInterval(()=>{
        $("#gifbox").animate({
        left:-20
        },100); 

        $("#gifbox").animate({
        left:20
        },100);

        $("#gifbox").animate({
        left:0
        },100);
    },2000);

    // 改变src属性-->动态图
    $('#st_box li').hover(function(){      //滑入
        let src = $(this).find('img').attr('data-hover');
            $(this).find('img').attr('src', src);
        },function(){                      //滑出
          let src = $(this).find('img').attr('data-img');
          $(this).find('img').attr('src',src);
    });
    //登录后获取cookie
    function showUser(){
        let username = getCookie("username");
        if(username!=null){
          $("#userlogin>span").text(username);
          $("#userlogin").css("display","block");
          $("#userLogout").css("display","none");
        }else{
          $("#userlogin").css("display","none");
          $("#userLogout").css("display","block");
        }
    }
    $(function(){
        showUser(); 
        $("#btnLogout").click(function(){
          removeCookie("username");
          showUser();
        });
    });
    //登录验证
    $("#btnLogin").click(function(){
      let xhr = new XMLHttpRequest();
      xhr.open("post","loginCheck.php",true);
      xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
          if(xhr.responseText=="1"){
            addCookie("username",$("#username").val(),7);
            location.href="index.html";
          }else{
            $("#messageBox").html("亲，用户名或者密码不对");
          }
        }
      }
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      let sendstr = `username=${$("#username").val()}&userpass=${$("#userpass").val()}`;
      xhr.send(sendstr);
    });
  
  //七天免登录
    function getCookie(key){
        var cookiestr = document.cookie;
        var list = cookiestr.split(";");
        for(var i in list){
            var arr = list[i].split("=");
            if(trim(arr[0]) == key){
              return arr[1];
            }
        }
        return null;
    }
    function trim(str){
      return str.replace(/\s+/g,"");
    }
    $(function(){
        // $("input").val("hello world!");
        $("username").val(getCookie("username"));
        $("password").val(getCookie("password"));
        $("btnLogin").onclick = function(){
            var username = $("username").val();
            var password = $("password").val();
            var box = document.$("saveNP")[0];
            if(box.checked){
              var d = new Date();
              var currentTime = d.getTime();
              currentTime += 7*24*60*60*1000;
              d.setTime(currentTime);
              console.log(username);
              console.log(password);
              document.cookie = "username="+username+";expires="+d;
              document.cookie = "password="+password+";expires="+d;
            }
        }
    });

    
});
//顶部悬浮
window.onscroll=function(){
    var topScroll = get_scrollTop_of_body();//滚动的距离,距离顶部的距离
    var bignav = document.getElementById("header");//获取到导航栏id
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
//侧边栏滚动一段距离后显示
    /*let navTop = $('#header').offset().top + 120;
    let scrollTop = $(window).scrollTop();
    if(scrollTop < navTop){
      $('#links').addClass('top');
    }
    $(window).scroll(function () {
      if(scrollTop < 100){
        $('#links').show();
      }else{
        $('#links').hide();
      }
    });*/


	// 改变src属性-->动态图
/*	$('#st_box').hover(function(){      //滑入
		src = $(this).find('img').attr('data-hover');
		$(this).find('img').attr('src') = src;
	},function(){                      //滑出
		src = $(this).find('img').attr('data-img');
		$(this).find('img').attr('src') = src;
	});*/

});
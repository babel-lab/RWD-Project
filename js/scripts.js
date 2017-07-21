//線上客服頁籤開關, 舊會員排檢頁籤開關
function onlinephone1(p){
	if(p=="onlinephone"){
    document.getElementById("onlinephone").style.width = "100px";
    document.getElementById("arrow1").style.display = "none";
    document.getElementById("arrow2").style.display = "block";
  }else if(p=="oldmembercheck"){
    document.getElementById("oldmembercheck").style.width = "100px";
    document.getElementById("arrow3").style.display = "none";
    document.getElementById("arrow4").style.display = "block";
  }
}

function onlinephone2(p){
	if(p=="onlinephone"){
    document.getElementById("onlinephone").style.width = "30px";
    document.getElementById("arrow1").style.display = "block";
    document.getElementById("arrow2").style.display = "none";
  }else if(p=="oldmembercheck"){
    document.getElementById("oldmembercheck").style.width = "30px";
    document.getElementById("arrow3").style.display = "block";
    document.getElementById("arrow4").style.display = "none";
  }
}

//健檢項目頁籤開關
function sidemenu1(p){
		//讓側邊標籤成選單打開的狀態, 與切換開開關閉按鈕
		document.getElementById("openarrow1").style.display = "none";
    document.getElementById("openarrow1").style.display = "none";
    document.getElementById("openarrow2").style.display = "inline-block";
    document.getElementById("side-menu").style.paddingTop = "0";
    document.getElementById("side-menu").style.width = "100%";
    document.getElementById("side-menu").style.height = "auto";
    document.getElementById("side-menu").style.top = "auto";
    document.getElementById("side-menu").style.bottom = "0";
}

function sidemenu2(p){
		//讓側邊標籤回復成小的狀態, 與切換開開關閉按鈕
    document.getElementById("openarrow1").style.display = "block";
    document.getElementById("openarrow2").style.display = "none";
    document.getElementById("side-menu").style.paddingTop = "10px";
    document.getElementById("side-menu").style.width = "30px";
    document.getElementById("side-menu").style.height = "120px";
    document.getElementById("side-menu").style.top = "306px";
}

//回最上面
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
  });
  
 //畫面縮小時選單變化
  var num = 50; //number of pixels before modifying styles
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#top').addClass('scrolled');
    } else {
        $('#top').removeClass('scrolled');
    }
  });
  
  //當畫面縮小時, 按下展開選單按, 改變背景色
  $(document).ready(function(){
		$('.navbar-toggle').click(function(){
			if($(this).hasClass('chg-br')) {
				$('#top').addClass('scrolled');
				$('.navbar-toggle').removeClass('chg-br');
				$('.navbar-toggle').addClass('unchg-br');
			}else if(jQuery(this).hasClass('unchg-br')) {
				$('#top').removeClass('scrolled');
				$('.navbar-toggle').removeClass('unchg-br');
				$('.navbar-toggle').addClass('chg-br');
			}
		});
	});
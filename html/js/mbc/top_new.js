$(window).on('load resize', function(){
	//画像サイズ指定
	var imgW = 1280;
	var imgH = 720;
	//ウィンドウサイズ取得
	var winW = $(window).width();
	var winH = $(window).height();
	
	var scaleW = winW / imgW;
	var scaleH = winH / imgH;
	var fixScale = Math.max(scaleW, scaleH);
	
	var setW = imgW * fixScale;
	var setH = imgH * fixScale;

	var moveX = Math.floor((winW - setW) / 2);
	var moveY = Math.floor((winH - setH) / 2);

	$('#bg').css({
		'width': setW,
		'height': setH,
		'left' : moveX,
		'top' : moveY
	});
});

if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0) {
	$(function(){
		$('video').hide();
	});
}


//スムーススクロール
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});
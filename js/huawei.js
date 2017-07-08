/*
* @Author: 刘海涛
* @Date:   2017-05-28 16:06:22
* @Last Modified by:   刘海涛
* @Last Modified time: 2017-06-04 17:23:11
*/

'use strict';
// 滚动监听事件
$(window).scroll(function(){
	// 头部
	var height = document.querySelector('.homepage').offsetTop;
	var top = document.body.scrollTop;
	if(top>height) $('.navbar-collapse div:first').addClass('hidden');
	else $('.navbar-collapse div:first').removeClass('hidden');
});
$('.main a').parent('div').css({
	'width':'700px',
	'margin':'0 10px 20px 10px',
	'overflow':'hidden'
});
$('#videoHW').parent('div').css({
	'width':'1410px',
	'margin':'10px 20px 10px 0',
	'overflow':'hidden'
});
// -------------------------------------------------------------
// 鼠标进入偏移,鼠标移出恢复
function offset(){
	$('.main a').mouseenter(function(){
		$(this).children('img').css({
			'transition':'0.8s',
			'transform':'translate(-10px,0)'
		});
		$(this).children('h2').css({
			'transition':'0.8s',
			'transform':'translate(0,-30px)'
		});
		$(this).children('p').fadeTo(1,1);
		$(this).children('p').css({
			'transition':'0.6s',
			'transform':'translate(0,-35px)'
		});	
	}).mouseleave(function(){
		$(this).children('img').css({
			'transition':'0.8s',
			'transform':'translate(0,0)'
		});
		$(this).children('h2').css({
			'transition':'0.8s',
			'transform':'translate(0,0)'
		});
		$(this).children('p').fadeOut(1,0);
		$(this).children('p').css({
			'transition':'0.6s',
			'transform':'translate(0,0)'
		});
	});
	$('#videoHW').mouseenter(function(){
		$('#videoHW div img').css('transform','translate(-90px,0)');
	}).mouseleave(function(){
		$('#videoHW div img').css('transform','translate(0,0)');
	})	
}
// -------------------------------------------------------------
// 底部下拉列表
function menu(){
	if($(window).width() < 1024){
		$('.footer ul').addClass('dropdown-menu');
	}else if($(window).width() >= 1024){
		$('.footer ul').removeClass('dropdown-menu');
		offset();
	}
}
// 调用
$(window).resize(menu);
menu();

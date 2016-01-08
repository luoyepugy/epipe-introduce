
$(function() {
	// 欢迎页面
	setTimeout(function() {
		$('.j-purchaser').find('img:first').slideUp().next().slideDown();
	}, 15000);
	// 登录页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(1).slideUp().next().slideDown();
	}, 30000);
	// 发布页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(2).fadeOut().next().fadeIn();
	}, 50000);
	// 发布页面2
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(3).fadeOut().next().fadeIn();
		$('.j-vendor').find('img:first').fadeOut().next().fadeIn();
	}, 70000);
	// 供应商发布页面
	setTimeout(function() {
		$('.j-vendor').find('img').eq(1).fadeOut().next().fadeIn();
	}, 90000);
	// 列表页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(4).fadeOut().next().fadeIn();
	}, 110000);
	// offer页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(5).fadeOut().next().fadeIn();
	}, 130000);
	// offer页面2
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(6).fadeOut().next().fadeIn();
	}, 150000);
	// 订单页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(7).fadeOut().next().fadeIn();
		$('.j-vendor').find('img').eq(2).fadeOut().next().fadeIn();
	}, 170000);
});
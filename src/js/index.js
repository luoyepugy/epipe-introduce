
$(function() {
	// 欢迎页面
	setTimeout(function() {
		$('.j-purchaser').find('img:first').slideUp().next().slideDown();
	}, 3000);
	// 登录页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(1).slideUp().next().slideDown();
	}, 6000);
	// 发布页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(2).fadeOut().next().fadeIn();
	}, 9000);
	// 发布页面2
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(3).fadeOut().next().fadeIn();
	}, 12000);
	// 列表页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(4).fadeOut().next().fadeIn();
		$('.j-vendor').find('img').eq(0).fadeOut().next().fadeIn();
	}, 16000);
	// 供应商发布页面
	setTimeout(function() {
		$('.j-vendor').find('img').eq(1).fadeOut().next().fadeIn();
	}, 18000);
	// 供应商发布页面2
	setTimeout(function() {
		$('.j-vendor').find('img').eq(2).fadeOut().next().fadeIn();
	}, 21000);
	// 列表页面2
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(5).fadeOut().next().fadeIn();
	}, 24000);
	// offer页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(6).fadeOut().next().fadeIn();
	}, 27000);
	// offer页面2
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(7).fadeOut().next().fadeIn();
	}, 30000);
	// 订单页面
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(8).fadeOut().next().fadeIn();
		$('.j-vendor').find('img').eq(3).fadeOut().next().fadeIn();
	}, 33000);
});
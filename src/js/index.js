
$(function() {
	setTimeout(function() {
		$('.j-purchaser').find('img:first').slideUp().next().slideDown();
	}, 3000);
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(1).slideUp().next().slideDown();
	}, 6000);
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(2).fadeOut().next().fadeIn();
	}, 9000);
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(3).fadeOut().next().fadeIn();
	}, 12000);
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(4).fadeOut().next().fadeIn();
		$('.j-vendor').find('img').eq(0).fadeOut().next().fadeIn();
	}, 15000);
	setTimeout(function() {
		$('.j-vendor').find('img').eq(1).fadeOut().next().fadeIn();
	}, 18000);
	setTimeout(function() {
		$('.j-vendor').find('img').eq(2).fadeOut().next().fadeIn();
	}, 21000);
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(5).fadeOut().next().fadeIn();
	}, 24000);
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(6).fadeOut().next().fadeIn();
	}, 27000);
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(7).fadeOut().next().fadeIn();
	}, 30000);
	setTimeout(function() {
		$('.j-purchaser').find('img').eq(8).fadeOut().next().fadeIn();
		$('.j-vendor').find('img').eq(3).fadeOut().next().fadeIn();
	}, 33000);
});
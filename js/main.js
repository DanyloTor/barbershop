$(document).ready(function () {
	$('.section').click(function () {
		$('.burger-wrap').css('transition-delay', '0s')
		$('.menu-wrap').removeClass('active')
		$('.burger-wrap').removeClass('active')
	})
	$('.burger-wrap').click(function () {
		if ($('.burger-wrap').hasClass('active')) {
			$('.burger-wrap').css('transition-delay', '0s')
		} else {
			$('.burger-wrap').css('transition-delay', '.2s')
		}
		$('.menu-wrap').toggleClass('active')
		$('.burger-wrap').toggleClass('active')
		$('.header-logo').toggleClass('margin')
	});
	$('.menu-lag-item').click(function () {
		let position = $(this).data('position')
		$('.line').css('left', position)
	})
	$('.menu-list-item, .contact-wrapper-item').click(function (e) {
		e.preventDefault()
		let anchor = $(this).data('anchor')
		$('html, body').animate({ scrollTop: $(anchor).offset().top }, 500)
		$('.menu-wrap').removeClass('active')
		$('.burger-wrap').removeClass('active')
		$('.header-logo').removeClass('margin')
	});

});

// $(document).ready(function () {
// 	$(".nav-button").click(function () {
// 		$(".nav-button").toggleClass('change');
// 	});

// 	$(window).scroll(function () {
// 		let first = $(this).scrollTop();

// 		if (first >= 200) {
// 			$(".nav-menu").addClass('custom-nav');

// 		} else {
// 			$(".nav-menu").removeClass('custom-nav');
// 		}
// 	});

// 	$(window).scroll(function () {

// 		if ($(window).width() >= 992) {
// 			let position = $(this).scrollTop();
// 			if (position < 1166) {
// 				$('.nav-link').addClass('nav-white');
// 				$('.nav-link').removeClass('nav-white-blue');
// 				$('.nav-link').removeClass('nav-black');
// 				$('.nav-about').removeClass('nav-white');
// 				$('.nav-benefits').removeClass('nav-blue');
// 				$('.nav-offering').removeClass('nav-black');
// 				$('.nav-subscription').removeClass('nav-light-blue');
// 				$('.nav-contact').removeClass('nav-light-blue');
// 				$('.nav-about').addClass('nav-black');
// 			}

// 			if (position >= 1166 && position <= 2305) {
// 				$('.nav-link').addClass('nav-white-blue');
// 				$('.nav-link').removeClass('nav-white');
// 				$('.nav-link').removeClass('nav-black');
// 				$('.nav-subscription').removeClass('nav-light-blue');
// 				$('.nav-contact').removeClass('nav-light-blue');
// 				$('.nav-about').removeClass('nav-black');
// 				$('.nav-offering').removeClass('nav-blue');
// 				$('.nav-benefits').addClass('nav-blue');
// 			}

// 			if (position >= 2306 && position <= 3497) {
// 				$('.nav-about').removeClass('nav-black');
// 				$('.nav-subscription').removeClass('nav-light-blue');
// 				$('.nav-contact').removeClass('nav-light-blue');
// 				$('.nav-link').addClass('nav-black');
// 				$('.nav-link').removeClass('nav-white-blue');
// 				$('.nav-benefits').removeClass('nav-blue');
// 				$('.nav-offering').addClass('nav-blue');
// 			}

// 			if (position > 3497) {
// 				$('.nav-about').removeClass('nav-black');
// 				$('.nav-link').addClass('nav-black');
// 				$('.nav-link').removeClass('nav-white-blue');
// 				$('.nav-benefits').removeClass('nav-blue');
// 				$('.nav-offering').removeClass('nav-blue');
// 				$('.nav-subscription').addClass('nav-light-blue');
// 				$('.nav-contact').addClass('nav-light-blue');
// 			}
// 		}

// 		if ($(window).width() < 992) {
// 			$('.nav-link').addClass('nav-white-blue');
// 		}
// 	});



// 	$(window).scroll(function () {



// 		let position = $(this).scrollTop();
// 		// console.log(position);
// 		console.log(getScrollPercent());

// 		if (position >= 350) {
// 			$('.lower-benefits').addClass('appear-delay');
// 			$('.upper-benefits').addClass('appear');
// 		} else {
// 			$('.lower-benefits').removeClass('appear-delay');
// 			$('.upper-benefits').removeClass('appear');
// 		}

// 		if (position >= 1200) {
// 			$('.card-container-1').addClass('moveFromLeft');
// 			$('.card-container-3').addClass('moveFromRight');
// 			$('.card-container-2').addClass('moveFromBottom');
// 		} else {
// 			$('.card-container-1').removeClass('moveFromLeft');
// 			$('.card-container-3').removeClass('moveFromRight');
// 			$('.card-container-2').removeClass('moveFromBottom');
// 		}


// 	});

// });

// function getScrollPercent() {
// 	var h = document.documentElement,
// 		b = document.body,
// 		st = 'scrollTop',
// 		sh = 'scrollHeight';
// 	return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
// }

2
$(document).ready(function () {
	$(".nav-button").click(function () {
		$(".nav-button").toggleClass('change');
	});

	$(window).scroll(function () {
		let first = $(this).scrollTop();

		if (first >= 200) {
			$(".nav-menu").addClass('custom-nav');

		} else {
			$(".nav-menu").removeClass('custom-nav');
		}
	});

	$(window).scroll(function () {

		if ($(window).width() >= 992) {
			let position = getScrollPercent();
			if (position < 28.1) {
				$('.nav-link').addClass('nav-white');
				$('.nav-link').removeClass('nav-white-blue');
				$('.nav-link').removeClass('nav-black');
				$('.nav-about').removeClass('nav-white');
				$('.nav-benefits').removeClass('nav-blue');
				$('.nav-offering').removeClass('nav-black');
				$('.nav-subscription').removeClass('nav-light-blue');
				$('.nav-contact').removeClass('nav-light-blue');
				$('.nav-about').addClass('nav-black');
			}

			if (position >= 28.1 && position <= 58.9) {
				$('.nav-link').addClass('nav-white-blue');
				$('.nav-link').removeClass('nav-white');
				$('.nav-link').removeClass('nav-black');
				$('.nav-subscription').removeClass('nav-light-blue');
				$('.nav-contact').removeClass('nav-light-blue');
				$('.nav-about').removeClass('nav-black');
				$('.nav-offering').removeClass('nav-blue');
				$('.nav-benefits').addClass('nav-blue');
			}

			if (position >= 58.91 && position <= 91.3) {
				$('.nav-about').removeClass('nav-black');
				$('.nav-subscription').removeClass('nav-light-blue');
				$('.nav-contact').removeClass('nav-light-blue');
				$('.nav-link').addClass('nav-black');
				$('.nav-link').removeClass('nav-white-blue');
				$('.nav-benefits').removeClass('nav-blue');
				$('.nav-offering').addClass('nav-blue');
			}

			if (position > 91.31) {
				$('.nav-about').removeClass('nav-black');
				$('.nav-link').addClass('nav-black');
				$('.nav-link').removeClass('nav-white-blue');
				$('.nav-benefits').removeClass('nav-blue');
				$('.nav-offering').removeClass('nav-blue');
				$('.nav-subscription').addClass('nav-light-blue');
				$('.nav-contact').addClass('nav-light-blue');
			}
		}

		if ($(window).width() < 992) {
			$('.nav-link').addClass('nav-white-blue');
		}
	});



	$(window).scroll(function () {



		let position = $(this).scrollTop();
		// console.log(position);
		console.log(getScrollPercent());

		if (position >= 350) {
			$('.lower-benefits').addClass('appear-delay');
			$('.upper-benefits').addClass('appear');
		} else {
			$('.lower-benefits').removeClass('appear-delay');
			$('.upper-benefits').removeClass('appear');
		}

		if (position >= 1200) {
			$('.card-container-1').addClass('moveFromLeft');
			$('.card-container-3').addClass('moveFromRight');
			$('.card-container-2').addClass('moveFromBottom');
		} else {
			$('.card-container-1').removeClass('moveFromLeft');
			$('.card-container-3').removeClass('moveFromRight');
			$('.card-container-2').removeClass('moveFromBottom');
		}


	});

});

function getScrollPercent() {
	var h = document.documentElement,
		b = document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';
	return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}
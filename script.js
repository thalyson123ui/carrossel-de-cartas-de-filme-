var swiper = new Swiper(".movies", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 3.5,
	loop: true,
	coverflowEffect: {
		rotate: 25,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true
	},
	pagination: {
		el: ".swiper-pagination"
	},
	breakpoints: {
		320: {
			slidesPerView: 2
		},
		640: {
			slidesPerView: 2.5
		},
		768: {
			slidesPerView: 3.5
		}
	}
});

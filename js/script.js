const swiper = new Swiper(".swiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
});
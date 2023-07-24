import mobileMenu from './modules/mobile-menu.js';
import slider from './modules/slider.js';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	mobileMenu({
		menuSelector: '.nav-mobile',
		buttonsSelector: '.nav-mobile__btn',
		menuHideSelector: 'nav-mobile__hide'
	});

	slider({
		sliderContainerSelector: '.contact-list',
		sliderBtnLeftSelector: '#contact-btn-left',
		sliderBtnRightSelector: '#contact-btn-right',
		sliderItemsSelector: '.contact-item',
		breakpoints: [
			{
				maxWidth: 1280,
				minWidth: 768,
				amountToShow: 2,
				gap: 40
			},
			{
				maxWidth: 768,
				minWidth: 0,
				amountToShow: 1,
				gap: 0
			}
		]
	});
});

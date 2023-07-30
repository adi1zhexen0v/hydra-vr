import mobileMenu from './modules/mobile-menu.js';
import interactiveSlider from './modules/interactive-slider.js';
import automatedSlider from './modules/automated-slider.js';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const mobileMenuOptions = {
		menuSelector: '.nav-mobile',
		buttonsSelector: '.nav-mobile__btn',
		menuHideSelector: 'nav-mobile__hide'
	};

	const contactListOptions = {
		sliderContainerSelector: '.contact-list',
		sliderBtnLeftSelector: '#contact-btn-left',
		sliderBtnRightSelector: '#contact-btn-right',
		sliderItemsSelector: '.contact-item',
		breakpoints: [
			{ maxWidth: 1280, minWidth: 768, amountToShow: 2, gap: 40 },
			{ maxWidth: 768, minWidth: 0, amountToShow: 1, gap: 0 }
		]
	};

	const servicesListOptions = {
		sliderContainerSelector: '.services-list',
		sliderBtnLeftSelector: '#services-btn-left',
		sliderBtnRightSelector: '#services-btn-right',
		sliderItemsSelector: '.services-item',
		breakpoints: [
			{ maxWidth: 1200, minWidth: 960, amountToShow: 3, gap: 16 },
			{ maxWidth: 960, minWidth: 600, amountToShow: 2, gap: 14 },
			{ maxWidth: 600, minWidth: 0, amountToShow: 1, gap: 12 }
		]
	};

	const techListOptions = {
		sliderContainerSelector: '.tech-list',
		sliderItemsSelector: '.tech-item',
		breakpoints: [
			{ maxWidth: 960, minWidth: 540, amountToShow: 2 },
			{ maxWidth: 540, minWidth: 0, amountToShow: 1 }
		],
		speed: 3000
	};

	mobileMenu(mobileMenuOptions);
	interactiveSlider(contactListOptions);
	interactiveSlider(servicesListOptions);
	automatedSlider(techListOptions);
});

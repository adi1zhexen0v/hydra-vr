const mobileMenu = ({ menuSelector, buttonsSelector, menuHideSelector }) => {
	const menuContainer = document.querySelector(menuSelector);
	const menuButtons = document.querySelectorAll(buttonsSelector);
	const menuOpenButton = menuButtons[0];
	const menuCloseButton = menuButtons[1];
	const menuLinks = menuContainer.querySelectorAll('a');

	const openMenu = () => {
		menuContainer.classList.remove(menuHideSelector);
		document.body.style.overflow = 'hidden';
	};

	const closeMenu = () => {
		menuContainer.classList.add(menuHideSelector);
		document.body.style.overflow = 'auto';
	};

	menuOpenButton.addEventListener('click', openMenu);
	menuCloseButton.addEventListener('click', closeMenu);

	menuLinks.forEach(link => {
		link.addEventListener('click', closeMenu);
	});
};

export default mobileMenu;

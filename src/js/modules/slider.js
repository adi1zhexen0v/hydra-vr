const slider = ({
	sliderContainerSelector,
	sliderBtnLeftSelector,
	sliderBtnRightSelector,
	sliderItemsSelector,
	breakpoints
}) => {
	const sliderContainer = document.querySelector(sliderContainerSelector);
	const sliderBtnLeft = document.querySelector(sliderBtnLeftSelector);
	const sliderBtnRight = document.querySelector(sliderBtnRightSelector);
	const sliderItems = document.querySelectorAll(sliderItemsSelector);
	const sliderItemWidth = getComputedStyle(sliderItems[0]).width;

	let activeIndex = 0;

	const screenWidth = window.innerWidth;
  
	const amountToShow =
		breakpoints.find(
			({ maxWidth, minWidth }) =>
				screenWidth <= maxWidth && screenWidth >= minWidth
		)?.amountToShow || 0;

	const gap =
		breakpoints.find(
			({ maxWidth, minWidth }) =>
				screenWidth <= maxWidth && screenWidth >= minWidth
		)?.gap || 0;

	const moveSlider = () => {
		const widthOfMove = activeIndex * parseInt(sliderItemWidth);
		sliderContainer.style.transform = `translateX(-${
			activeIndex === 0 ? widthOfMove : widthOfMove + gap
		}px)`;
	};

	sliderBtnLeft.addEventListener('click', () => {
		if (activeIndex !== 0) {
			activeIndex--;
			moveSlider();
		}
	});

	sliderBtnRight.addEventListener('click', () => {
		if (sliderItems.length - amountToShow !== activeIndex) {
			activeIndex++;
			moveSlider();
		}
	});
};

export default slider;

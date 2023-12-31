const interactiveSlider = ({
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
	const breakpoint = breakpoints.find(
		({ maxWidth, minWidth }) =>
			screenWidth <= maxWidth && screenWidth > minWidth
	) || { amountToShow: 0, gap: 0 };
	const { amountToShow, gap } = breakpoint;

	const updateSliderButtonsVisibility = () => {
		sliderBtnLeft.classList.toggle('slider-btn__hide', activeIndex === 0);
		sliderBtnRight.classList.toggle('slider-btn__hide', activeIndex === sliderItems.length - amountToShow);
	};

	const moveSlider = () => {
		const widthOfMove = activeIndex * parseInt(sliderItemWidth);
		sliderContainer.style.transform = `translateX(-${
			activeIndex === 0 ? widthOfMove : widthOfMove + activeIndex * gap
		}px)`;
		updateSliderButtonsVisibility();
	};

	const handleMoveLeft = () => {
    const isFirstSlide = activeIndex === 0;
		if (!isFirstSlide) {
			activeIndex--;
			moveSlider();
		}
	};

	const handleMoveRight = () => {
    const isLastSlide = sliderItems.length - amountToShow === activeIndex;
		if (!isLastSlide) {
			activeIndex++;
			moveSlider();
		}
	};

	sliderBtnLeft.addEventListener('click', handleMoveLeft);
	sliderBtnRight.addEventListener('click', handleMoveRight);

	updateSliderButtonsVisibility();
};

export default interactiveSlider;

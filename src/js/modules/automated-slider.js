const automatedSlider = ({
	sliderContainerSelector,
	sliderItemsSelector,
	breakpoints,
	speed
}) => {
	const sliderContainer = document.querySelector(sliderContainerSelector);
	const sliderItems = document.querySelectorAll(sliderItemsSelector);
	const sliderItemWidth = getComputedStyle(sliderItems[0]).width;

	let activeIndex = 0;
	const screenWidth = window.innerWidth;
	const breakpoint = breakpoints.find(
		({ maxWidth, minWidth }) =>
			screenWidth <= maxWidth && screenWidth > minWidth
	) || { amountToShow: 0 };
	const { amountToShow } = breakpoint;

  const startWidth = breakpoints[0].maxWidth;

	const moveSlider = () => {
		activeIndex++;
		if (activeIndex > sliderItems.length - amountToShow) {
			resetActiveIndex();
		}
		const widthOfMove = activeIndex * parseInt(sliderItemWidth);
		sliderContainer.style.transform = `translateX(-${widthOfMove}px)`;
	};

	const resetActiveIndex = () => {
		activeIndex = 0;
	};

	if (startWidth >= screenWidth && speed > 0) {
		setInterval(moveSlider, speed);
	}
};

export default automatedSlider;

window.onload = function () {
	// remove noScroll css class
	[...document.querySelectorAll('[class*="noScroll"]')].forEach((node) => {
		const [className] = [...node.classList].filter(
			(cl) => cl.indexOf("noScroll") > -1
		);
		node.classList.remove(className);
	});
	// remove all modals
	[...document.querySelectorAll('[role="dialog"]')].forEach((el) =>
		el.remove()
	);
};

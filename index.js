const noScrollNodeList = ["html", "body"].map(sel => {
	return document.querySelector(sel);
});
const config = {
	attibutes: true,
	attributeFilter: ["class"],
};

function removeModals() {
	[...document.querySelectorAll('[role="dialog"]')].forEach(el => {
		el.remove();
	});
}
function removeNoScrollClass(node) {
	[...node.classList]
		.filter(cl => cl.indexOf("noScroll") > -1)
		.forEach(cl => node.classList.remove(cl));
}

window.onload = function () {
	removeModals();
	[...document.querySelectorAll('[class*="noScroll"]')].forEach(node => {
		removeNoScrollClass(node);
	});
};

const observer = new MutationObserver(mutationsList => {
	mutationsList.forEach(mutation => removeNoScrollClass(mutation.target));
	removeModals();
});

noScrollNodeList.forEach(el => observer.observe(el, config));

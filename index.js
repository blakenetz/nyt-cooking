(function () {
  const noScrollNodeList = ["html", "body"].map((sel) => {
    return document.querySelector(sel);
  });
  const classNames = ["noScroll", "no-scroll"];
  const config = {
    attributes: true,
    attributeFilter: ["class"],
  };

  function removeModals() {
    [...document.querySelectorAll('[role="dialog"]')].forEach((el) => {
      el.remove();
    });
    [...document.querySelectorAll('[class*="modal"]')].forEach((el) => {
      el.remove();
    });
  }
  function removeNoScrollClass(node) {
    [...node.classList]
      .filter((cl) => classNames.some((c) => cl.includes(c)))
      .forEach((cl) => node.classList.remove(cl));
  }

  window.onload = function () {
    removeModals();
    classNames
      .map((cl) => document.querySelectorAll(`[class*="${cl}"]`))
      .map((nodeList) => Array.from(nodeList))
      .flat()
      .forEach((node) => {
        removeNoScrollClass(node);
      });
  };

  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => removeNoScrollClass(mutation.target));
    removeModals();
  });

  noScrollNodeList.forEach((el) => observer.observe(el, config));
})();

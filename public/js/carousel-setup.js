(function () {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators");
  let heroCarouselItems = select("#heroCarousel .carousel-item", true);

  // Clear existing indicators before adding new ones
  heroCarouselIndicators.innerHTML = "";

  heroCarouselItems.forEach((item, index) => {
    index === 0
      ? (heroCarouselIndicators.innerHTML +=
          "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
          index +
          "' class='active'></li>")
      : (heroCarouselIndicators.innerHTML +=
          "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
          index +
          "'></li>");
  });
})();
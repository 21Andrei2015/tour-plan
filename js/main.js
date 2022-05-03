var hotelSlider = new Swiper(".hotel-slider", {
  speed: 1000,
  spaceBetween: 100,
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "cube"
});
var reviewsSlider = new Swiper(".reviews-slider", {
  speed: 1000,
  spaceBetween: 100,
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  effect: "cube"
});
const mySwiper = new Swiper('.swiper-container', {
  speed: 1000,
  spaceBetween: 100,
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  effect: 'cube'
});
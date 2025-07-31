var swiperTopTenThisWeek = new Swiper(".mySwiper-top-ten", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
    590: {
      slidesPerView: 4.4,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
  },
});
export default swiperTopTenThisWeek

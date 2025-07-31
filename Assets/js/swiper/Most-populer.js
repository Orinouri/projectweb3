      var swiper = new Swiper(".most-populer-swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2.2,
            spaceBetween: 8,
          },
          590: {
            slidesPerView: 4.5,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        },
      });
     
export default swiper
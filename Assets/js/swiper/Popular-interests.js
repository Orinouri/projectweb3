      var PopularInterestsSwiper = new Swiper(".mySwiper-Popular-interests", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          590: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
     
export default PopularInterestsSwiper
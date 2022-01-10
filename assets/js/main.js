// MAIN_SWIPER
const mainSwiper = new Swiper('.mainSwiper', {
  direction: 'vertical',
  loop: true,
  speed: 500,
  allowTouchMove: false,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.main-swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// OUR_PRODUCTION_SWIPER
const prodSwiper = new Swiper('.prodSwiper', {
  initialSlide: 0,
  navigation: {
    nextEl: '.prod-swiper-button-next',
    prevEl: '.prod-swiper-button-prev',
  },
  breakpoints: {
    100: {
      direction: 'vertical',
      slidesPerView: 2,
      spaceBetween: 20
    },
    776: {
      direction: 'horizontal',
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// OUR_BLOG_SWIPER
const blogSwiper = new Swiper('.blogSwiper', {
  direction: 'horizontal',
  initialSlide: 0,
  navigation: {
    nextEl: '.blog-swiper-button-next',
    prevEl: '.blog-swiper-button-prev',
  },
  breakpoints: {
    776: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

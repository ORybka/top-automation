document.addEventListener('DOMContentLoaded', function () {
  // MAIN_SWIPER
  if (document.querySelector('.mainSwiper')) {
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
  }

  // OUR_PRODUCTION_SWIPER
  if (document.querySelector('.prodSwiper')) {
    const prodSwiper = new Swiper('.prodSwiper', {
      initialSlide: 0,
      loop: true,
      navigation: {
        nextEl: '.prod-swiper-button-next',
        prevEl: '.prod-swiper-button-prev',
      },
      breakpoints: {
        100: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        776: {
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
  }


  // OUR_BLOG_SWIPER
  if (document.querySelector('.blogSwiper')) {
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
  }

  // MENU
  const menuBtn = document.getElementById('menu-btn');
  const menuIcon = document.getElementById('menu-container');
  const menuIconMobile = document.getElementById('menu-container-mobile');
  const menuText = document.getElementById('menu-text');
  const menu = document.getElementById('main-menu-block');

  menuBtn.addEventListener('click', openMenu);
  function openMenu() {
    let icon;
    window.innerWidth > 766 ? icon = menuIcon : icon = menuIconMobile;
    icon.classList.toggle('open');

    if (icon.classList.contains('open')) {
      menuText.innerText = 'close';
    } else {
      menuText.innerText = 'меню';
    }

    if (menu.classList.contains('menu-show')) {
      menu.classList.toggle('menu-hide');
    } else {
      menu.classList.toggle('menu-show');
    }
  }

  // MOBILE_MENU
  const mobileMenuBtn = document.getElementById('menu-btn-mobile');
  mobileMenuBtn.addEventListener('click', openMenu);


  // VIDEO_BLOCK
  const videoBtn = document.getElementById('about-video');
  const videoPopup = document.getElementById('about-company-popup');
  const body = document.querySelector('body');
  const videoBtnClose = document.getElementById('video-btn-close');


  videoBtn.addEventListener('click', showVideoPopup);
  videoBtnClose.addEventListener('click', hideVideoPopup);
  function showVideoPopup() {
    body.classList.add('no-scroll');
    videoPopup.classList.add('show');
  }
  function hideVideoPopup() {
    body.classList.remove('no-scroll');
    videoPopup.classList.remove('show');
  }
});

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

      breakpoints: {
        0: {
          direction: 'horizontal',
        },
        767: {
          direction: 'vertical',
        },
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
      navigation: {
        nextEl: '.prod-swiper-button-next',
        prevEl: '.prod-swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 30
        },
        400: {
          slidesPerView: 1.2,
          spaceBetween: 40
        },
        600: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3.5,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 40
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
        0: {
          slidesPerView: 1.1,
          spaceBetween: 10
        },
        776: {
          slidesPerView: 3.5,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3.5,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 20
        },
        1500: {
          slidesPerView: 4.5,
          spaceBetween: 30
        }
      }
    });
  }

  // OUR_PROJECTS_SWIPER
  if (document.querySelector('.projectSwiper')) {
    const projectSwiper = new Swiper('.projectSwiper', {
      direction: 'horizontal',
      initialSlide: 0,
      slidesPerView: 1.1,
      spaceBetween: 20
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
      menu.classList.remove('menu-show');
      menu.classList.add('menu-hide');
    } else {
      menu.classList.remove('menu-hide');
      menu.classList.add('menu-show');
    }
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest('.main-menu-block') !== null && e.target.closest('.menu-link')) {
      menu.classList.remove('menu-show');
      menu.classList.add('menu-hide');
      menuText.innerText = 'меню';
      window.innerWidth > 766 ? menuIcon.classList.remove('open') : menuIconMobile.classList.remove('open');
    }
  }, false);

  // const produtionLinkArr = document.querySelectorAll('.prodution-link');
  // produtionLinkArr.forEach(el => {
  //   el.addEventListener('mouseover', e => {
  //     setTimeout(function () {
  //       e.target.closest('.prodution-link').style.backgroundColor = "orange";
  //     }, 500);

  //   });
  //   el.addEventListener('mouseout', e => {
  //     console.log(e.target);
  //     e.target.closest('.prodution-link').style.backgroundColor = "transparent";
  //   });
  // });

  // $(".prod-slide").each(function () {
  //   $(this).hover(function () {
  //     console.log('dfdf');
  //     $(this).hasClass(".prodution-link");
  //     $(".prodution-link").switchClass("prodution-link", "anotherNewClass", 1000);
  //     $(".anotherNewClass").switchClass("anotherNewClass", "prodution-link", 1000);
  //   });
  // });

  // MOBILE_MENU
  const mobileMenuBtn = document.getElementById('menu-btn-mobile');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMenu);
  }

  // VIDEO_BLOCK
  const videoBtn = document.getElementById('about-video');
  const videoPopup = document.getElementById('about-company-popup');
  const body = document.querySelector('body');
  const videoBtnClose = document.getElementById('video-btn-close');

  if (videoBtn) {
    videoBtn.addEventListener('click', showVideoPopup);
  }
  if (videoBtnClose) {
    videoBtnClose.addEventListener('click', hideVideoPopup);
  }
  function showVideoPopup() {
    body.classList.add('no-scroll');
    videoPopup.classList.add('show');
  }
  function hideVideoPopup() {
    body.classList.remove('no-scroll');
    videoPopup.classList.remove('show');
  }
});

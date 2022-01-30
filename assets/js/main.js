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
          slidesPerView: 3.5,
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

  // PROJECT_SINGLE_SWIPER
  if (document.querySelector('.projectSingleSwiper')) {
    const projectSingleSwiper = new Swiper('.projectSingleSwiper', {
      initialSlide: 0,
      navigation: {
        nextEl: '.page-single-swiper-button-next',
        prevEl: '.page-single-swiper-button-prev',
      },
      scrollbar: {
        el: '.page-single-swiper-scrollbar',
        draggable: true,
      },
      pagination: {
        el: '.page-single-swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
          return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            ' - ' +
            '<span class="' + totalClass + '"></span>';
        }
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        600: {
          slidesPerView: 2.2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 2.2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 2.6,
          spaceBetween: 40
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

    if (icon.classList.contains('open') && window.innerWidth > 766) {
      menuText.innerText = 'close';
      body.classList.add('no-scroll');
    } else if (icon.classList.contains('open') && window.innerWidth <= 766) {
      menuText.innerText = 'close';
      body.classList.add('fixed-position');
    } else {
      menuText.innerText = 'меню';
      body.classList.remove('no-scroll');
      body.classList.remove('fixed-position');
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
  const playButton = document.getElementById('about-video-popup');
  const video = document.querySelector('.video-popup');

  if (videoBtn) {
    videoBtn.addEventListener('click', showVideoPopup);
  }
  if (videoBtnClose) {
    videoBtnClose.addEventListener('click', hideVideoPopup);
  }
  if (playButton) {
    playButton.addEventListener('click', playVideo);
  }
  if (video) {
    video.addEventListener('pause', () => {
      playButton.classList.add('show');
      playButton.classList.remove('hide');
    });
  }
  function playVideo() {
    if (video.paused === true) {
      video.play();
      playButton.classList.add('hide');
      playButton.classList.remove('show');
    }
  }
  function showVideoPopup() {
    body.classList.add('no-scroll');
    videoPopup.classList.add('show');
  }
  function hideVideoPopup() {
    body.classList.remove('no-scroll');
    videoPopup.classList.remove('show');
  }

  // SCROLL
  const scrollBtn = document.getElementById("scroll-btn");
  const scrollDownBtn = document.getElementById("scroll-down-btn");

  window.onscroll = () => scrollFunction();
  scrollBtn.addEventListener('click', topFunction);
  scrollDownBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView();
    scrollBtn.style.display = "none";
  });

  function topFunction() {
    document.getElementById('main').scrollIntoView();
  }

  function scrollFunction() {
    if (document.body.scrollTop > window.innerHeight - 50 || document.documentElement.scrollTop > window.innerHeight - 50) {
      scrollBtn.style.display = "block";
      scrollDownBtn.style.display = "none";
    } else {
      scrollDownBtn.style.display = "block";
      scrollBtn.style.display = "none";
    }
  }

  // PAGINATION
  const pagination = document.querySelector('.pagination');
  const navLinks = document.querySelector('.nav-links');
  var prevBtn = document.getElementsByClassName('prev');
  var nextBtn = document.getElementsByClassName('next');

  if (pagination) {
    if (nextBtn.length === 0) {
      const nextBtn = '<span class="next-inactive">></span>';
      navLinks.insertAdjacentHTML('beforeend', nextBtn);
    } else if (prevBtn.length === 0) {
      const prevBtn = '<span class="prev-inactive"><</span>';
      navLinks.insertAdjacentHTML('afterbegin', prevBtn);
    }
  }
});

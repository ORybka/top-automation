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

  // CONTACT FORM POPUP
  const contactFormBtn = document.querySelectorAll('.open-contact-form-popup');
  const contactFormPopup = document.getElementById('contact-form-popup');
  const contactFormClose = document.getElementById('contact-form-btn-close');

  if (contactFormBtn.length !== 0) {
    contactFormBtn.forEach(el => {
      el.addEventListener('click', showContactFromPopup);
    });
  }
  if (contactFormClose) {
    contactFormClose.addEventListener('click', hideContactFromPopup);
  }
  function showContactFromPopup() {
    body.classList.add('no-scroll');
    contactFormPopup.classList.add('show');
  }
  function hideContactFromPopup() {
    body.classList.remove('no-scroll');
    contactFormPopup.classList.remove('show');
  }

  // THANKYOU POPUP
  const thankyouFormPopup = document.getElementById('thankyou-popup');
  const thankyouFormClose = document.getElementById('thankyou-btn-close');

  if (thankyouFormClose) {
    thankyouFormClose.addEventListener('click', hideThankyouFromPopup);
  }
  function showThankyouFromPopup() {
    body.classList.add('no-scroll');
    thankyouFormPopup.classList.add('show');
  }
  function hideThankyouFromPopup() {
    body.classList.remove('no-scroll');
    thankyouFormPopup.classList.remove('show');
  }

  //SLIDER_POPUP
  const sliderELArr = document.querySelectorAll('.project-single-slide');
  const sliderPopup = document.getElementById('page-slider-popup');
  const sliderPopupBtnClose = document.getElementById('page-slider-btn-close');
  // const sliderPlayButton = document.getElementById('slider-play-popup');
  const sliderVideo = document.querySelector('.slider-video-popup');
  const sliderVideoElement = document.querySelector('.slider-video-popup-container');

  if (sliderELArr.length !== 0) {
    sliderELArr.forEach(el => {
      el.addEventListener('click', showSliderPopup);
    });
  }
  if (sliderPopupBtnClose) {
    sliderPopupBtnClose.addEventListener('click', hideSliderVideoPopup);
  }
  // if (sliderVideo) {
  //   sliderVideo.addEventListener('pause', () => {
  //     const sliderPlayButton = sliderVideo.getElementById('slider-play-popup');
  //     console.log(sliderPlayButton);
  //     sliderPlayButton.classList.add('show');
  //     sliderPlayButton.classList.remove('hide');
  //   });
  // }

  function playSliderVideo(e) {
    if (sliderVideo.paused === true) {
      sliderVideo.play();
      e.target.classList.add('hide');
      e.target.classList.remove('show');
    }
  }
  function showSliderPopup(e) {
    const popupElement = e.target.parentNode.parentNode.children[1];
    const clone = popupElement.cloneNode(true);
    clone.style.display = 'flex';

    // if (clone.querySelector('video')) {
    //   const playBtn = document.createElement('img');
    //   playBtn.id = "slider-play-popup";
    //   playBtn.classList = "video-popup-btn";
    //   playBtn.src = "/assets/images/video-icon.png";
    //   clone.append(playBtn);
    //   playBtn.addEventListener('click', playSliderVideo);
    // }
    sliderVideoElement.append(clone);
    body.classList.add('no-scroll');
    sliderPopup.classList.add('show');
  }
  function hideSliderVideoPopup(e) {
    while (sliderVideoElement.lastElementChild) {
      sliderVideoElement.removeChild(sliderVideoElement.lastElementChild);
    }
    e.target.parentNode = '';
    body.classList.remove('no-scroll');
    sliderPopup.classList.remove('show');
  }

  // SCROLL
  const scrollBtn = document.getElementById("scroll-btn");
  const scrollDownBtn = document.getElementById("scroll-down-btn");
  const windowHeight = window.innerHeight;

  if (window.scrollY >= windowHeight && (document.body.scrollTop > windowHeight - 50 || document.documentElement.scrollTop > windowHeight - 50)) {
    scrollBtn.style.display = "block";
    scrollDownBtn.style.display = "none";
  }

  window.onscroll = () => scrollFunction();
  scrollBtn.addEventListener('click', topFunction);
  scrollDownBtn.addEventListener('click', () => {
    window.scrollTo(0, windowHeight);
    scrollBtn.style.display = "none";
  });

  function topFunction() {
    window.scrollTo(0, 0);
  }

  function scrollFunction() {
    if (window.scrollY >= windowHeight && (document.body.scrollTop > windowHeight - 50 || document.documentElement.scrollTop > windowHeight - 50)) {
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
  const prevBtn = document.getElementsByClassName('prev');
  const nextBtn = document.getElementsByClassName('next');

  if (pagination) {
    if (navLinks.children.length === 0) {
      nextBtn.innerHtml = '';
      prevBtn.innerHtml = '';
    } else if (nextBtn.length === 0) {
      const nextBtn = '<span class="next-inactive">></span>';
      navLinks.insertAdjacentHTML('beforeend', nextBtn);
    } else if (prevBtn.length === 0) {
      const prevBtn = '<span class="prev-inactive"><</span>';
      navLinks.insertAdjacentHTML('afterbegin', prevBtn);
    }
  };

  // HEADER_SEARCH
  const searchBtn = document.getElementById('header-search-btn');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const headerContainer = document.querySelector('.main-header-inner-block');
  const headerSearchBlock = document.querySelector('.header-search-block');
  const languagesBlock = document.querySelector('#languages-block');
  const phoneBlock = document.querySelector('#phone-block');

  if (searchBtn) {
    searchBtn.addEventListener('click', openSearch);
  }
  if (closeSearchBtn) {
    closeSearchBtn.addEventListener('click', closeSearch);
  }
  function openSearch() {
    headerContainer.classList.add('show');
    languagesBlock.classList.add('hide');
    phoneBlock.classList.add('hide');
    headerSearchBlock.classList.add('active');
    closeSearchBtn.classList.add('show');
  }
  function closeSearch() {
    headerContainer.classList.remove('show');
    languagesBlock.classList.remove('hide');
    phoneBlock.classList.remove('hide');
    headerSearchBlock.classList.remove('active');
    closeSearchBtn.classList.remove('show');
  }

  //CATEGORY_PAGE
  const categoryContainer = document.querySelector('.category-container');
  const categoryElement = document.querySelector('.category-element:last-child');

  if (categoryContainer) {
    if (categoryContainer.children.length % 2 !== 0)
      categoryElement.classList.add('single-element');
  }

  //PRODUCTION SINGLE PAGE COLOR BLOCK
  const firstBlock = document.querySelector('.double-block-one');
  const secondBlock = document.querySelector('.double-block-two');
  const firstColorBlock = document.querySelector('.double-color-block-one');
  const secondColorBlock = document.querySelector('.double-color-block-two');
  if (firstColorBlock && secondColorBlock) {
    if (window.innerHeight > 767) {
      firstColorBlock.style.height = firstBlock.offsetHeight + 'px';
      secondColorBlock.style.height = secondBlock.offsetHeight + 'px';
    } else {
      firstColorBlock.style.height = firstBlock.offsetHeight + 50 + 'px';
      secondColorBlock.style.height = secondBlock.offsetHeight + 50 + 'px';
    }
  }

  //PRODUCTION SINGLE PAGE ADVANTAGES BLOCK
  const advantagesElemArr = document.querySelectorAll('.advantages-block');
  let newAdvantagesArr = [];
  advantagesElemArr.forEach(el => {
    newAdvantagesArr.push(el.offsetHeight);
  });
  const newAdvantagesHeight = Math.max(...newAdvantagesArr);
  if (window.innerWidth > 768) {
    advantagesElemArr.forEach(el => {
      el.style.height = newAdvantagesHeight + 20 + 'px';
    });
  } else {
    advantagesElemArr.forEach(el => {
      el.style.height = newAdvantagesHeight + 30 + 'px';
    });
  }

  //PRODUCTION SINGLE PAGE PROJECTS HOVER
  const projectElemArr = document.querySelectorAll('.project-element');
  const elementTextArr = document.querySelectorAll('.project-text');
  const elementTitleArr = document.querySelectorAll('.project-title');
  let newArr = [];
  elementTextArr.forEach(el => {
    newArr.push(el.offsetHeight);
  });
  const newHeight = Math.max(...newArr);
  if (window.innerWidth > 768) {
    projectElemArr.forEach(el => {
      el.style.height = newHeight + 300 + 'px';
    });
  } else {
    projectElemArr.forEach(el => {
      el.style.height = newHeight + 250 + 'px';
    });
  }
  elementTitleArr.forEach(el => {
    const newWordsArr = el.innerText.split(' ');
    if (el.innerText.length > 60 && newWordsArr.length > 7) {
      const newArr = newWordsArr.slice(0, 7);
      el.innerText = newArr.join(' ').concat('...');
    }
  });
});



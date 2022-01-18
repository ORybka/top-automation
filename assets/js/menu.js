document.addEventListener('DOMContentLoaded', function () {
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

  // MOBILE_MENU
  const mobileMenuBtn = document.getElementById('menu-btn-mobile');
  mobileMenuBtn.addEventListener('click', openMenu);
});

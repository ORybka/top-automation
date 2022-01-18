// MENU
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('main-menu-block');

menuBtn.addEventListener('click', openMenu);
function openMenu() {
  menu.classList.toggle('menu-show');
}

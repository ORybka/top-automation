const paginationElemArr = document.querySelectorAll('.pagination-element');
const elementTextArr = document.querySelectorAll('.element-text');
let newArr = [];
elementTextArr.forEach(el => {
  newArr.push(el.offsetHeight);
});
const newHeight = Math.max(...newArr);
paginationElemArr.forEach(el => {
  el.style.height = newHeight + 300 + 'px';
});

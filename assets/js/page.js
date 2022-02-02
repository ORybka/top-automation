document.addEventListener('DOMContentLoaded', function () {
  const paginationElemArr = document.querySelectorAll('.pagination-element');
  const elementTextArr = document.querySelectorAll('.element-text');
  let newArr = [];
  elementTextArr.forEach(el => {
    newArr.push(el.offsetHeight);
  });
  const newHeight = Math.max(...newArr);
  if (window.innerWidth > 768) {
    paginationElemArr.forEach(el => {
      el.style.height = newHeight + 300 + 'px';
    });
  } else {
    paginationElemArr.forEach(el => {
      el.style.height = newHeight + 250 + 'px';
    });
  }
});

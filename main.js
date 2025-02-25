const menuBtn = document.querySelector('.menu-btn');
const menuHeader = document.querySelector('.header__mobile');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  menuHeader.classList.toggle('active');
});
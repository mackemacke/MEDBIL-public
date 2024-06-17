// Hamburger
let menu = document.querySelector('.header-mobile');
let navbar = document.querySelector('.header-navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

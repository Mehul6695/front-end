const hamburger = document.querySelector('.nav-line');
const navLink = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

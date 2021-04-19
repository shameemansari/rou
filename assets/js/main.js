const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', (e) => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});

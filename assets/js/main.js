const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', (e) => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('show');
  } else {
    navbar.classList.remove('show');
  }
});

// window.addEventListener('load', (e) => {
//   if (window.innerWidth < 992) {
//     navbar.classList.add('show');
//   } else {
//     navbar.classList.remove('show');
//   }
// });

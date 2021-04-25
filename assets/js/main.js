const navbar = document.querySelector('.navbar');
const blogcard = document.querySelectorAll('.blog-card');
const navbarcollapse = document.querySelector('.navbar-collapse');

window.addEventListener('scroll', (e) => {
  if (window.innerWidth < 992) {
    navbar.classList.add('show');
  } else {
    if (window.pageYOffset > 0) {
      navbar.classList.add('show');
    } else {
      navbar.classList.remove('show');
    }
  }
});

window.addEventListener('load', (e) => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('show');
  } else {
    if (window.innerWidth < 992) {
      navbar.classList.add('show');
    }
  }
});

window.addEventListener('resize', (e) => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('show');
  } else {
    if (window.innerWidth < 992) {
      navbar.classList.add('show');
    } else {
      navbar.classList.remove('show');
    }
  }
});

blogcard.forEach((element, index) => {
  element.addEventListener('click', function (e) {
    var current = index;
    element.classList.add('active');
    blogcard.forEach((e, i) => {
      if (current != i) {
        e.classList.remove('active');
      }
    });
  });
});

window.addEventListener('click', (e) => {
  let target = e.target;
  var _mobileMenuOpen = navbarcollapse.classList.contains('show');
  if (_mobileMenuOpen === true && !target.classList.contains('navbar-toggler')) {
    navbarcollapse.classList.remove('show');
  }
});

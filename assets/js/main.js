const navbar = document.querySelector('.navbar');
const blogcard = document.querySelectorAll('.blog-card');

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

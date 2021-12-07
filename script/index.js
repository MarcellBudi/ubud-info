const hamburger = document.querySelector('.hamburger');
const navbar =  document.querySelector('nav');
hamburger.addEventListener('click', function () {
  navbar.classList.toggle('show');
  if (navbar.classList.contains('show')) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>'
  }
  else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'
  }
})

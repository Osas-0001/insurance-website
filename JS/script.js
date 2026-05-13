// ==================== NAVBAR COLLAPSE TOGGLE ====================

const navbarToggle = document.getElementById('navbarToggle');
const navbarContent = document.getElementById('navbarContent');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle navbar collapse when button is clicked
navbarToggle.addEventListener('click', () => {
  navbarContent.classList.toggle('show');
});

// Close navbar when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarContent.classList.remove('show');
  });
});

// Close navbar when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideNavbar = navbarToggle.contains(event.target) || navbarContent.contains(event.target);
  if (!isClickInsideNavbar && navbarContent.classList.contains('show')) {
    navbarContent.classList.remove('show');
  }
});

// Close navbar on window resize (for desktop view)
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    navbarContent.classList.remove('show');
  }
});

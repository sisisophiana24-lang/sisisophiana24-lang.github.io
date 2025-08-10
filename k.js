document.addEventListener("DOMContentLoaded", function() {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".header nav a").forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');

  const expanded = hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
  hamburger.setAttribute('aria-expanded', expanded);
});

// Tutup menu saat klik di luar hamburger dan nav menu
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    // Kalau menu terbuka, tutup
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }
});




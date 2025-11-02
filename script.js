/* script.js - common behavior: mobile toggle, fade-in and navbar shrink */ 
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }

  // Fade-in on scroll
  const fadeElements = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.2 });
  fadeElements.forEach(el => appearOnScroll.observe(el));

  // Navbar shrink on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('shrink'); else navbar.classList.remove('shrink');
  });
});

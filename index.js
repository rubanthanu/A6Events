let backgroundImages = [
    'Untitled-1-01.jpg',
    'Untitled-1-02.jpg',
    'Untitled-1-03.jpg'
];

let currentImageIndex = 0;

function changeBackground() {
    const heroSection = document.getElementById('hero-section');
    heroSection.style.background = `url(${backgroundImages[currentImageIndex]}) no-repeat center center/cover`;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
// Change image every 5 seconds
setInterval(changeBackground, 5000);

// Smooth scroll function
function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

// Set the initial background image
document.addEventListener('DOMContentLoaded', changeBackground);

// Smooth ScrollReveal Animation
ScrollReveal().reveal('.graphic-item', {
    distance: '20px',          // Smaller distance for subtle effect
    origin: 'bottom',          // Animation direction
    opacity: 0,                // Fade-in effect
    duration: 1200,            // Duration for smooth animation
    easing: 'ease-in-out',     // Smooth transition effect
    interval: 300              // Delay between each element's animation
});


  // Toggle Navigation Menu for Mobile
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

 // Add this JavaScript code
 function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

// Prevent scrolling when menu is open
document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');

        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
            });
});

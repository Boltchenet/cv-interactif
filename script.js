// script.js
// Smooth Scrolling for "Explore More" Button
document.querySelector('.cta-button[href="#categories"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }
});
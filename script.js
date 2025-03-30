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

// Menu Burger Minimaliste (sans changer le HTML)
function initMobileMenu() {
  const nav = document.querySelector('nav ul');
  if (!nav) return;

  // Crée le bouton burger si l'écran est petit
  if (window.innerWidth <= 768) {
    const burger = document.createElement('button');
    burger.className = 'mobile-menu-toggle';
    burger.innerHTML = '<i class="fas fa-bars"></i>';
    burger.setAttribute('aria-label', 'Menu');
    document.querySelector('header').prepend(burger);

    burger.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

// Détecte les changements de taille d'écran
window.addEventListener('resize', initMobileMenu);
initMobileMenu(); // Lance au chargement

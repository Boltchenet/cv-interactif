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

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav) {
        header.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Show development notification - Improved detection
    const isHomepage = !['about.html', 'data.html', 'music.html', 'other.html'].some(
        page => window.location.href.includes(page)
    ) || ['/', '/index.html', ''].includes(window.location.pathname);

    if (isHomepage) {
        const notif = document.createElement('div');
        notif.className = 'dev-notification';
        notif.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        
        // Tooltip text
        const tooltipText = 'Site en développement - La version mobile est en cours d\'optimisation';
        
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'dev-tooltip';
        tooltip.textContent = tooltipText;
        tooltip.style.left = 'auto';
        tooltip.style.right = '0';
        notif.appendChild(tooltip);
        
        // Show/hide tooltip on hover
        notif.addEventListener('mouseenter', function() {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
        
        notif.addEventListener('mouseleave', function() {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
        
        document.body.appendChild(notif);
    }

    // Responsive menu handling
    function handleResponsiveMenu() {
        if (window.innerWidth <= 768) {
            if (nav) nav.style.display = 'none';
        } else {
            if (nav) nav.style.display = 'flex';
        }
    }

    window.addEventListener('resize', handleResponsiveMenu);
    handleResponsiveMenu();
});

// Language switcher functionality is in translations.js

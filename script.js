// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLightMode = document.body.classList.contains("light-mode");
    themeToggle.textContent = isLightMode ? "🌙" : "🌓";
    themeToggle.setAttribute("aria-label", isLightMode ? "Switch to dark mode" : "Switch to light mode");
});

// Smooth Scrolling for "Explore More" Button
document.querySelector('.cta-button[href="#categories"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
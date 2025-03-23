// Ouvrir et fermer la sidebar avec l'icône hamburger
document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("open");
    document.querySelector(".overlay").style.display = 
        document.getElementById("sidebar").classList.contains("open") ? "block" : "none";
});

// Fermer la sidebar avec la croix
document.getElementById("close-sidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("open");
    document.querySelector(".overlay").style.display = "none";
});

// Cacher la sidebar si l'overlay est cliqué
document.querySelector(".overlay").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("open");
    document.querySelector(".overlay").style.display = "none";
});

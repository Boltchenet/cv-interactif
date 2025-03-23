document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour ouvrir/fermer la sidebar
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const currentPosition = sidebar.style.left;
        
        // Vérifie si la sidebar est ouverte ou fermée
        if (currentPosition === '0px') {
            sidebar.style.left = '-250px';  // Ferme la sidebar
        } else {
            sidebar.style.left = '0px';    // Ouvre la sidebar
        }
    }

    // Associe la fonction au clic sur l'icône hamburger
    document.getElementById('hamburger').addEventListener("click", toggleSidebar);
});

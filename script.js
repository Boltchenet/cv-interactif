document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour ouvrir/fermer la sidebar
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        
        // Ajoute ou enlève la classe "open" pour faire apparaître ou disparaître la sidebar
        sidebar.classList.toggle('open');
    }

    // Associe la fonction au clic sur l'icône hamburger
    document.getElementById('hamburger').addEventListener("click", toggleSidebar);
});

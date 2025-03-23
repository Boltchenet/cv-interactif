document.addEventListener("DOMContentLoaded", function() {
    // Exemple pour changer la couleur de fond
    const button = document.createElement("button");
    button.textContent = "Changer la couleur de fond";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        document.body.style.backgroundColor = "#E0E0E0";
    });

    // Fonction pour ouvrir/fermer la sidebar
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const currentPosition = sidebar.style.left;
        if (currentPosition === '0px') {
            sidebar.style.left = '-250px';  // Ferme la sidebar
        } else {
            sidebar.style.left = '0px';    // Ouvre la sidebar
        }
    }

    // Associe la fonction au clic sur l'icône hamburger
    document.getElementById('hamburger').addEventListener("click", toggleSidebar);
});

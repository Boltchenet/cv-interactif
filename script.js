// Exemple simple : changement de couleur de fond au clic sur le bouton
document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Changer la couleur de fond";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        document.body.style.backgroundColor = "#E0E0E0";
    });
});

let boutons = document.querySelectorAll(".btn-panier");
let compteur = document.getElementById("compteur");
let totalAffiche = document.getElementById("total");

let nombreArticle = 0;
let total = 0;

boutons.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        
        // Trouver le prix du produit
        let carte = bouton.parentElement;
        let prix = carte.querySelector(".prix").textContent;
        prix = parseInt(prix);

        // Ajouter au compteur
        nombreArticle++;
        compteur.textContent = nombreArticle;

        // Ajouter au total
        total += prix;
        totalAffiche.textContent = total;

        alert("Produit ajouté au panier !");
    });
});
export {};

// ========================================================================
// Exercice 1 : Créer un Mini Piano avec les Événements Clavier
// ========================================================================
// Objectif : Réagir aux touches du clavier et jouer un son ou afficher un message.
//
// 0+. Sélectionnez la div prévue pour cet exercice grâce à son id "pianoContainer" à l'aide de getElementById

// 1+. Créez un tableau contenant les touches du clavier que vous souhaitez utiliser (exemple : ["a", "z", "e", "r", "t", "y"]).

// 2+. À l'aide d'une boucle foreach, parcourez le tableau contenant les touches du clavier :
//    - Pour chaque élément, créez un bouton avec createElement.
//    - Affectez-lui comme texte, avec innerText : "Touche : X" où X est la lettre de la touche.
//    - Ajoutez-le dans la div "pianoContainer" avec appendChild.

// 3+. Ajoutez un écouteur d'événement "keydown" sur le document `document.addEventListener()`.
//     > Regarder `js keydown event` sur Google

// 4. Lorsqu'une touche du tableau est pressée :
//    - Affichez un message dans la console du type : "La touche X a été pressée !"
//
// Bonus :
// - Changez la couleur du bouton correspondant (par exemple : passez-le en jaune pendant 300 ms).

// ========================================================================
// Exercice 2 : Déplacer un Élément avec les Flèches du Clavier
// ========================================================================
// Objectif : Déplacer un carré dans la page grâce aux flèches du clavier.
//
// 0. Sélectionnez la div prévue pour cet exercice grâce à son id "moveContainer".
// 1. Créez un nouvel élément div que vous appellerez "square" (HTMLDivElement).
// 2. Donnez-lui une taille de 50px par 50px, une couleur de fond et une position absolue.
// 3. Placez-le au départ en haut à gauche du container (top: 0px, left: 0px).
// 4. Ajoutez cet élément dans la div "moveContainer".
// 5. Ajoutez un écouteur d'événement "keydown" sur le document.
// 6. Lorsqu'une des touches fléchées est pressée (ArrowUp, ArrowDown, ArrowLeft, ArrowRight) :
//    - Modifiez la position du carré de 10px dans la bonne direction.
//
// Bonus :
// - Empêchez le carré de sortir du container.
// - Ajoutez une animation de transition (optionnel).

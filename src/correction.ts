export {};

// ========================================================================
// Exercice 1 : Créer un Mini Piano avec les Événements Clavier
// ========================================================================
// Objectif : Réagir aux touches du clavier et jouer un son ou afficher un message.
//
// 0. Sélectionnez la div prévue pour cet exercice grâce à son id "pianoContainer".
// 1. Créez un tableau contenant les touches du clavier que vous souhaitez utiliser (exemple : ["a", "z", "e", "r", "t", "y"]).
// 2. À l'aide d'une boucle, pour chaque touche du tableau :
//    - Créez un bouton (élément HTMLButtonElement).
//    - Affectez-lui comme texte : "Touche : X" où X est la lettre de la touche.
//    - Ajoutez-le dans la div "pianoContainer".
// 3. Ajoutez un écouteur d'événement "keydown" sur le document.
// 4. Lorsqu'une touche du tableau est pressée :
//    - Affichez un message dans la console du type : "La touche X a été pressée !"
//
// Bonus :
// - Changez la couleur du bouton correspondant (par exemple : passez-le en jaune pendant 300 ms).

const pianoKey: Array<string> = ["a", "z", "e", "r", "t", "y"];

const html_target: HTMLElement | null =
  document.getElementById("pianoContainer");

if (html_target) {
  pianoKey.forEach(function (key) {
    const button: HTMLButtonElement = document.createElement("button");
    button.innerText = key;
    html_target.appendChild(button);
  });

  document.addEventListener("keydown", function (event: KeyboardEvent) {
    if (pianoKey.includes(event.key)) {
      console.log(`Touche ${event.key} détectée`);
    }
  });
}

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

const container: HTMLElement | null = document.getElementById("moveContainer");

if (container) {
  const square: HTMLDivElement = document.createElement("div");

  square.style.width = "50px";
  square.style.height = "50px";
  square.style.backgroundColor = "blue";
  square.style.position = "absolute";
  square.style.top = "0px";
  square.style.left = "0px";

  container.appendChild(square);

  let topPosition = 0;
  let leftPosition = 0;

  document.addEventListener("keydown", function (event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowUp":
        topPosition -= 10;
        break;
      case "ArrowDown":
        topPosition += 10;
        break;
      case "ArrowLeft":
        leftPosition -= 10;
        break;
      case "ArrowRight":
        leftPosition += 10;
        break;
      default:
        return;
    }

    square.style.top = `${topPosition}px`;
    square.style.left = `${leftPosition}px`;
  });
}

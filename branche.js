//#region Fonctions de drag and drop pour la liste

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sélectionner l'élément à rendre draggable
  const element = document.getElementById("list");

  // Variables pour stocker la position de la souris et de l'élément
  let isDragging = false;
  let offsetX, offsetY;

  // --- ⬇️ ÉTAPE 1 : MOUSE DOWN (Clic Appuyé) ⬇️ ---
  element.addEventListener("mousedown", (e) => {
    // Empêcher le comportement par défaut (comme la sélection de texte)
    e.preventDefault();

    // Activer le mode glisser
    isDragging = true;

    // Calculer l'offset (la différence entre la position de la souris et le coin supérieur/gauche de l'élément)
    // C'est crucial pour que l'élément ne saute pas au coin de la souris lors du clic.
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;

    // Optionnel : Changer l'apparence pendant le glisser
    element.style.cursor = "grabbing";
    element.style.zIndex = 1000; // Mettre l'élément au-dessus des autres

    // Important : Ajouter les écouteurs de 'mousemove' et 'mouseup' au document entier
    // Cela permet de continuer à glisser même si la souris sort de l'élément.
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  // --- ⬆️ ÉTAPE 2 : MOUSE MOVE (Souris Bouge) ⬆️ ---
  function onMouseMove(e) {
    // Vérifier si le mode glisser est activé
    if (!isDragging) return;

    // Calculer les nouvelles coordonnées de l'élément
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    // Appliquer les nouvelles coordonnées (ce qui fait "bouger" l'élément)
    element.style.left = newX + "px";
    element.style.top = newY + "px";
  }

  // --- 🛑 ÉTAPE 3 : MOUSE UP (Clic Relâché) 🛑 ---
  function onMouseUp() {
    // Désactiver le mode glisser
    isDragging = false;

    // Rétablir l'apparence normale
    element.style.cursor = "grab";
    element.style.zIndex = "10"; // Rétablir le z-index par défaut

    // Retirer les écouteurs pour économiser les ressources et stopper le mouvement
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
});
//#endregion

//#region Fonction pour ouvrir/fermer une branche
function toggleBranch(element) {
  // 1. Trouver le conteneur du contenu à côté du header
  // (le `element` passé est le div.header cliqué)
  const content = element.nextElementSibling;

  // 2. Vérifier si le contenu est actuellement visible (a la classe 'active')
  if (content.classList.contains("active")) {
    // Il est ouvert : on le ferme en retirant la classe
    content.classList.remove("active");
  } else {
    // Il est fermé : on l'ouvre en ajoutant la classe
    content.classList.add("active");
  }
}
//#endregion

//#region
/*
console.log("branche.js chargé");
alert("branche.js chargé alert");
confirm("branche.js chargé confirm");
prompt("branche.js chargé prompt","default value");
*/

var M1 =
  "<code>console.log(a);</code> <span>// ecrit dans la console </span><br>";
var M2 =
  "<code>document.write(a);</code><span>// ecrit dans le html </span><br>";
var M3 =
  "<code>alert(a);</code><span>// ecrit dans une boite alerte </span><br>";
var M4 =
  "<code>confirm('Really?');</code><span>// yes/no dialog, returns true/false depending on user click </span><br>";
var M5 =
  "<code>prompt('Your age?','0');</code><span>//  input dialog. Second argument default value </span><br><br>";
document.write("<h1>branche.js chargé document.write </h1>");

document.getElementById("js").innerHTML = "<h5>en js write</h5>";

document.getElementById("js").innerHTML +=
'document.getElementById("js").innerHTML += ...(écrase le contenu précédent sans le +) <br> ';

document.getElementById("js").innerHTML += M1;
document.getElementById("js").innerHTML += M2;
document.getElementById("js").innerHTML += M3;
document.getElementById("js").innerHTML += M4;
document.getElementById("js").innerHTML += M5;


let abc = "alexander";
let num = 16;
let nums = "16";
var len = abc.split(","); // longueur de la chaine


document.write("<br>");
document.write(Math.random()*1); 

//#endregion


// #region ecruture de base

const element = document.getElementById("jsScript");
element.innerHTML = "<h1>Hello, there!</h1> <br>";
element.innerHTML += "<h2>Les bases de JavaScript</h2>";
element.innerHTML += "<br>";    


// alert("Ceci est une alerte !");
// element.innerHTML += "<p>alert() : affiche une boîte de dialogue d'alerte avec un message.</p>";
// confirm("Confirmez-vous cette action ?");
// element.innerHTML += "<p>confirm() : affiche une boîte de dialogue de confirmation avec OK et Annuler.</p>";
// let userInput = prompt("Veuillez entrer quelque chose :");
// element.innerHTML += "<p>prompt() : affiche une boîte de dialogue demandant une entrée utilisateur.</p>";

element.innerHTML += "<br>";

element.innerHTML +=
"<p>element.innerHTML : insérer contenu HTML dans élément par ID.</p>";
element.innerHTML +=
"<p>element.innerHTML += : ajouter sans ecraser precedent </p>";

element.innerHTML += "<br>";

element.innerHTML +=
"<p>console.log() : affiche messages dans console navigateur pour débogage.</p>";
console.log("exemple de console log");

element.innerHTML += "<br>";

document.body.style.backgroundColor = "gray";
element.innerHTML +=
"<p>document.body.style.backgroundColor : modifie la couleur de fond du corps du document.</p>";
element.innerHTML += "<p>document.balise.style.element='modification'</p>";

element.innerHTML += "<br>";

// document.write(
//   "<p>document.write() : écrit directement du contenu HTML dans le document en cours de chargement.</p>"
// );
// document.write(
    //   "<p>Attention : son utilisation après le chargement de la page peut écraser tout le contenu existant.</p>"
    // );
    
    // #endregion
    element.innerHTML += "<br>";

    // #region fonctions
    element.innerHTML += "<h2>Les fonctions</h2>";
    function testF1() {
        element.innerHTML +=
        "<p>function testF1() : définit une fonction nommée testF1.</p>";
        element.innerHTML += "<p>function testF1() {..code..}</p>";
        element.innerHTML += "testF1(); : appelle/exécute la fonction testF1.";
    }
    testF1();

    element.innerHTML += "<br>";

    const myTestF2 = () => {
        element.innerHTML +=
        "<p>const myTestF2 = () => {..code..} : définit une fonction fléchée nommée myTestF2.</p>";
        element.innerHTML += "myTestF2(); : appelle/exécute la fonction myTestF2.";
    };
element.innerHTML += "<br>";
myTestF2();

element.innerHTML += "<br>";

setTimeout(function testF3() {
    element.innerHTML +=
    "<p>setTimeout(function testF3() {..code..}, délai) : exécute le code après un délai spécifié (en millisecondes).</p>";
    element.innerHTML +=
    "<p>setTimeout(function testF3() {..code..}, 5000) : exécute le code après 5 secondes.</p>";
}, 5000);
// #endregion

element.innerHTML += "<br>";

// #region loop
element.innerHTML += "<h2>Les boucles</h2>";
element.innerHTML +=
"<p>pour declarer une variable il est de base fait avec un var mais cela est une mauvaise pratique aujourd'hui, il faut donc le faire avec un 'let' pour les variables et un 'const' pour une constante</p>";

element.innerHTML += "<br>";

element.innerHTML += "<p>les loops : for, while, do..while</p>";
let i = 0;
for (i = 0; i < 3; i++) {
    element.innerHTML += `<p>for loop iteration : ${i}</p>`;
}

let j = 0;
while (j < 3) {
  element.innerHTML += `<p>while loop iteration : ${j}</p>`;
  j++;
}

let k = 0;
do {
    element.innerHTML += `<p>do..while loop iteration : ${k}</p>`;
    k++;
} while (k < 3);

element.innerHTML += `<p>for loop iteration to 10 whith break on 5 and continue on 2</p>`;
let m = 0;
for (m = 0; m < 10; m++) {
    if (m === 2) {
        continue;
    }
    if (m === 5) {
        break;
    } else {
        element.innerHTML += `<p>for loop iteration : ${m}</p>`;
    }
}
// #endregion

// #region variables types
element.innerHTML += "<h2>Types de variables</h2>";
element.innerHTML += "<br>";
element.innerHTML +=
"<p>diffrentes types de données : string, number, boolean, array, object, null, undefined</p>";
let myString = "Ceci est une chaîne de caractères.";
let myNumber = 42;
let myBoolean = true;
let myArray = [1, 2, 3, 4, 5];
let myObject = { nom: "Alice", age: 30 };
let myNull = null;
let myUndefined;



element.innerHTML += "<br>";
element.innerHTML += "<br>";
element.innerHTML += `<p>String: ${myString}</p>`;
element.innerHTML += `<p>Number: ${myNumber}</p>`;
element.innerHTML += `<p>Boolean: ${myBoolean}</p>`;
element.innerHTML += `<p>Array: ${myArray}</p>`;
element.innerHTML += `<p>Object: nom=${myObject.nom}, age=${myObject.age}</p>`;
element.innerHTML += `<p>Null: ${myNull}</p>`;
element.innerHTML += `<p>Undefined: ${myUndefined}</p>`;
// #endregion

// #region date
element.innerHTML += "<h2>Date et heure</h2>";
element.innerHTML += "<br>";
element.innerHTML += "<br>";
let d = new Date();
element.innerHTML += `<p>Date: ${d}</p>`;
element.innerHTML += `<p>anné/mois/jour/day/H/min/s/ms</p>`;
element.innerHTML += d.getFullYear(); // année
element.innerHTML += "/";
element.innerHTML += d.getMonth(); // mois (0-11)
element.innerHTML += "/";
element.innerHTML += d.getDate(); // jour du mois
element.innerHTML += "/";
element.innerHTML += d.getDay(); // jour de la semaine
element.innerHTML += "/";
element.innerHTML += d.getHours(); // heure
element.innerHTML += "/";
element.innerHTML += d.getMinutes(); // minutes
element.innerHTML += "/";
element.innerHTML += d.getSeconds(); // secondes
element.innerHTML += "/";
element.innerHTML += d.getMilliseconds(); // millisecondes
element.innerHTML += "<br>";
element.innerHTML += d.getTime(); // temps en millisecondes depuis 1970
// #endregion


element.innerHTML += "<br>";

element.innerHTML += "<br>";

element.innerHTML += "<br>";

element.innerHTML += "<br>";

element.innerHTML += "<br>";

element.innerHTML += "<br>";

element.innerHTML += "<br>";

element.innerHTML += "<br>";

element.innerHTML += "<br>";
// #region 
// 1. Cibler l'élément du DOM (le bouton)
const bouton = document.getElementById('monBouton');

// 2. Définir une fonction qui sera exécutée au survol
function changerCouleurSurvol() {
    bouton.style.backgroundColor = 'orange';
    bouton.textContent = 'OUAH !';
    console.log('Souris entrée (mouseover)');
}

// 3. Définir une fonction qui sera exécutée au départ de la souris
function remettreCouleurBase() {
    bouton.style.backgroundColor = 'lightblue';
    bouton.textContent = 'Passez la souris ici';
    console.log('Souris sortie (mouseout)');
}

// 4. Attacher les écouteurs d'événements
// L'événement 'mouseover' appelle la fonction changerCouleurSurvol
bouton.addEventListener('mouseover', changerCouleurSurvol);

// L'événement 'mouseout' appelle la fonction remettreCouleurBase
bouton.addEventListener('mouseout', remettreCouleurBase);

// Ajoutons aussi un click pour voir :
bouton.addEventListener('click', () => {
    alert('Bouton cliqué !');
    console.log('Bouton cliqué !');
});
// #endregion 

/**
 * Création de la fonction original
 */
function restauCommande() {
  // Création des variables et constante
  let age = prompt("Quel est votre age?");
  let credit = prompt("Définissez votre budget:");
  const ba = 8;
  const bna = 5;
  const plat = 20;

  //Appel de la fonction qui permet de boucler l'affichage de la carte et saisie du choix
  boucleFonction(age, credit);
}

/**
 * Génération du menu en fonction du budget
 */
function genererMenu(budget) {
  let menu = "Carte:\n";

  if (budget >= 5) {
    menu = menu + "1 - Boisson soft - 5€\n";
  }

  if (budget >= 8) {
    menu += "2 - Boisson alcoolisée - 8€\n";
  }

  if (budget >= 20) {
    menu = menu + "3 - Plat - 20€\n";
  }

  menu += `4 - Terminer
      ----------------
      Budget: ${budget}€
      `;

  return menu;
}

function boucleFonction(age, budget) {
  let choix;

  while (choix != 4 && budget >= 5) {
    /* Affichage de la carte et saisie du choix */
    const carte = genererMenu(budget);

    choix = prompt(carte);
    /* Choix */
    if (choix == "1") {
      if (budget >= 5) {
        budget -= 5;
        alert("Commande acceptée");
      } else {
        alert("Commande refusée, budget insuffisant");
      }
    } else if (choix == "2") {
      if (age < 18) {
        alert("Commande refusée, age requis non atteint.");
      } else if (budget < 8) {
        alert("Commande refusée, budget insuffisant");
      } else {
        budget -= 8;
        alert("Commande acceptée");
      }
    } else if (choix == "3") {
      if (budget >= 20) {
        budget -= 20;
        alert("Commande acceptée");
      } else {
        alert("Commande refusée, budget insuffisant");
      }
    } else if (choix == "4") {
      alert("A bientôt !");
    } else {
      alert("Veuillez faire un choix parmi les options proposées");
    }
  }
}

/**
 * APPEL DE MA FONCTION
 */

restauCommande();

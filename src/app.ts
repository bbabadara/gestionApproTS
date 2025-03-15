import { askQuestion, closeReadline } from "./utils/readlineUtils";
import { categorieService, aiguilleService, tissuService, boutonService, filService } from "./services/services";

//  menu principal 
async function afficherMenuPrincipal() {
  console.log("\n===== MENU PRINCIPAL =====");
  console.log("1. 🗂️  Gestion des catégories");
  console.log("2. 🧵 Gestion des aiguilles");
  console.log("3. 🧶 Gestion des tissus");
  console.log("4. 🔘 Gestion des boutons");
  console.log("5. 🪡  Gestion des fils");
  console.log("0. ❌ Quitter");

  const choix = await askQuestion("Choisissez une option : ");

  switch (choix) {
    case "1":
      await afficherSousMenu("Catégories", categorieService);
      break;

    case "2":
      await afficherSousMenu("Aiguilles", aiguilleService);
      break;

    case "3":
      await afficherSousMenu("Tissus", tissuService);
      break;

    case "4":
      await afficherSousMenu("Boutons", boutonService);
      break;

    case "5":
      await afficherSousMenu("Fils", filService);
      break;

    case "0":
      console.log("Fermeture du programme. 👋");
      closeReadline();
      return;

    default:
      console.log("Option invalide. ❌");
      await afficherMenuPrincipal();
  }
}

// sous-menus 
async function afficherSousMenu(nomEntite: string, service: any) {
  console.log(`\n===== MENU ${nomEntite.toUpperCase()} =====`);
  console.log("1. ➕ Ajouter");
  console.log("2. 📜 Lister");
  console.log("0. 🔙 Retour au menu principal");

  const choix = await askQuestion("Choisissez une option : ");

  switch (choix) {
    case "1":
      await ajouterElement(nomEntite, service);
      break;

    case "2":
      console.log(`${nomEntite} : 📋`, service.list());
      break;

    case "0":
      await afficherMenuPrincipal();
      return;

    default:
      console.log("Option invalide. ❌");
      break;
  }

  await afficherSousMenu(nomEntite, service);
}

//  ajouter un élément
async function ajouterElement(nomEntite: string, service: any) {
  switch (nomEntite) {
    case "Catégories":
      const libelleCategorie = await askQuestion("Libellé de la catégorie : ");
      service.create({ libelle: libelleCategorie });
      break;

    case "Aiguilles":
      const libelleAiguille = await askQuestion("Libellé de l'aiguille : ");
      const quantiteAiguille = await askQuestion("Quantité : ");
      service.create({ libelle: libelleAiguille, quantite: Number(quantiteAiguille) });
      break;

    case "Tissus":
      const couleurTissu = await askQuestion("Couleur du tissu : ");
      const quantiteTissu = await askQuestion("Quantité : ");
      const categorieIdTissu = await askQuestion("ID de la catégorie : ");
      service.create({ couleur: couleurTissu, quantite: Number(quantiteTissu), categorie_id: Number(categorieIdTissu) });
      break;

    case "Boutons":
      const typeBouton = await askQuestion("Type de bouton : ");
      const quantiteBouton = await askQuestion("Quantité : ");
      service.create({ type: typeBouton, quantite: Number(quantiteBouton) });
      break;

    case "Fils":
      const libelleFil = await askQuestion("Libellé du fil : ");
      service.create({ libelle: libelleFil });
      break;

    default:
      console.log("Entité inconnue.");
  }
}

// Démarrer le programme
afficherMenuPrincipal();

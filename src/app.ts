// import { GenericService } from './services/GenericService';
import { askQuestion, closeReadline } from "./utils/readlineUtils";
import { categorieService, aiguilleService, tissuService, boutonService, filService } from "./services/services";

async function afficherMenu() {
  console.log("\n===== MENU =====");
  console.log("1. Ajouter une catégorie");
  console.log("2. Lister les catégories");
  console.log("3. Ajouter une aiguille");
  console.log("4. Lister les aiguilles");
  console.log("5. Ajouter un tissu");
  console.log("6. Lister les tissus");
  console.log("7. Ajouter un bouton");
  console.log("8. Lister les boutons");
  console.log("9. Ajouter un fil");
  console.log("10. Lister les fils");
  console.log("0. Quitter");

  const choix = await askQuestion("Choisissez une option : ");

  switch (choix) {
    case "1":
      const libelleCategorie = await askQuestion("Libellé de la catégorie : ");
      categorieService.create({ libelle: libelleCategorie });
      break;

    case "2":
      console.log("Catégories :", categorieService.list());
      break;

    case "3":
      const libelleAiguille = await askQuestion("Libellé de l'aiguille : ");
      const quantiteAiguille = await askQuestion("Quantité : ");
      aiguilleService.create({ libelle: libelleAiguille, quantite: Number(quantiteAiguille) });
      break;

    case "4":
      console.log("Aiguilles :", aiguilleService.list());
      break;

    case "5":
      const couleurTissu = await askQuestion("Couleur du tissu : ");
      const quantiteTissu = await askQuestion("Quantité : ");
      const categorieIdTissu = await askQuestion("ID de la catégorie : ");
      tissuService.create({ couleur: couleurTissu, quantite: Number(quantiteTissu), categorie_id: Number(categorieIdTissu) });
      break;

    case "6":
      console.log("Tissus :", tissuService.list());
      break;

    case "7":
      const typeBouton = await askQuestion("Type de bouton : ");
      const quantiteBouton = await askQuestion("Quantité : ");
      boutonService.create({ type: typeBouton, quantite: Number(quantiteBouton) });
      break;

    case "8":
      console.log("Boutons :", boutonService.list());
      break;

    case "9":
      const libelleFil = await askQuestion("Libellé du fil : ");
      filService.create({ libelle: libelleFil });
      break;

    case "10":
      console.log("Fils :", filService.list());
      break;

    case "0":
      console.log("Fermeture du programme.");
      closeReadline();
      return;

    default:
      console.log("Option invalide.");
  }

  afficherMenu();
}

afficherMenu();

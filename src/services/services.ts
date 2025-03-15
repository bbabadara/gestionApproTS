import { Fil, Bouton, Tissu, Aiguille, Categorie } from "../entities/entities";
import { GenericService } from "./GenericService";

export const filService = new GenericService<Fil>();
export const boutonService = new GenericService<Bouton>();
export const tissuService = new GenericService<Tissu>();
export const aiguilleService = new GenericService<Aiguille>();
export const categorieService = new GenericService<Categorie>();

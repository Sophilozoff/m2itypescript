import { Moteur } from "./models/Moteur";
import { Vehicule } from "./models/Vehicule";

console.log("Hello Thomas");

let moteur = new Moteur();
moteur.vitesse = 150;
moteur.kilometrage = 55;

console.log(moteur);

let vehicule = new Vehicule(moteur);
vehicule.couleur = "orange";
vehicule.marque = "BMW";
vehicule.prix = 39990;

console.log(vehicule);

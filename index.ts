import { Moteur } from "./models/Moteurs/Moteur";
import { Camion } from "./models/Vehicule/Camions/Camion";
import { Moto } from "./models/Vehicule/Moto/Moto";
import { Voiture } from "./models/Vehicule/Voiture/Voiture";

console.log("Hello Thomas");

let moteur = new Moteur();
moteur.vitesse = 150;
moteur.kilometrage = 55;

let camion = new Camion(moteur);
camion.nbRoues = 12;
camion.tonne = 2.5;
camion.couleur = "noire";
camion.marque = "Mercedes";
camion.prix = 80000;

console.log(camion);

let voiture = new Voiture(moteur);
voiture.couleur = "bleue";
voiture.marque = "Mercedes";
voiture.prix = 80000;

let moto = new Moto(moteur);
moto.couleur = "verte";
moto.marque = "Yamaha";
moto.prix = 9900;

camion.klaxon();
voiture.klaxon();
moto.klaxon();


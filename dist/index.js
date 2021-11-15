"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moteur_1 = require("./models/Moteur");
console.log("Hello Thomas");
var moteur = new Moteur_1.Moteur();
moteur.vitesse = 150;
moteur.kilometrage = 55;
console.log(moteur);

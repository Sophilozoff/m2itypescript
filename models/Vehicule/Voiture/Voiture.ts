import { Moteur } from '../../Moteurs/Moteur';
import {Vehicule} from '../Vehicule';

export class Voiture extends Vehicule {
    constructor(moteur : Moteur) {
        super(moteur);
    }

    klaxon(){
        console.log("tuttut"); 
    }
}
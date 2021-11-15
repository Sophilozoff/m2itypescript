import { Moteur } from '../../Moteurs/Moteur';
import {Vehicule} from '../Vehicule';

export class Moto extends Vehicule {
    constructor(moteur : Moteur) {
        super(moteur);
    }

    klaxon(){
        console.log("poup"); 
    }
}
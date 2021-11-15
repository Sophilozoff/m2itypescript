import { Moteur } from '../../Moteurs/Moteur';
import {Vehicule} from '../Vehicule';

export class Camion extends Vehicule {

    private _nbRoues : number = 0;
    private _tonne : number = 0

    constructor(moteur: Moteur) {
        super(moteur);
    }

    get nbRoues() : number{
        return this._nbRoues;
    }

    set nbRoues(nb : number){
        this._nbRoues = nb;
    }

    get tonne() : number{
        return this._tonne;
    }

    set tonne(nb : number){
        this._tonne = nb;
    }

    klaxon(){
        console.log("BRRRRRRRRRRRRRRRRRRRRRRRR"); 
    }
    
}




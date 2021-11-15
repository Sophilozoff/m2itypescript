import { Moteur } from "./Moteur";

export class Vehicule {

    private _marque : string = "";
    private _couleur : string = "";
    private _prix : number = 0;
    private moteur : Moteur;

    constructor(moteur : Moteur) {
        this.moteur = moteur;
    }

    get marque() : string{
        return this._marque;
    }

    set marque(m : string){
        this._marque = m;
    }

    get couleur() : string{
        return this._couleur;
    }

    set couleur(m : string){
        this._couleur = m;
    }

    get prix() : number{
        return this._prix;
    }

    set prix(p : number) {
        this._prix = p;
    }

}
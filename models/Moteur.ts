export class Moteur {

    private _vitesse : number = 0;
    private _kilometrage : number = 0;

    constructor(){}

    get vitesse(): number {
        return this._vitesse;
    }

    set vitesse(v : number) {
        if(v > 0){
            this._vitesse = v;
        }
    }

    get kilometrage(): number {
        return this._kilometrage;
    }

    set kilometrage(k : number) {
        if(k > 0){
            this._kilometrage = k;
        }
    }
}
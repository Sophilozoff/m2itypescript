"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur() {
        this._vitesse = 0;
        this._kilometrage = 0;
    }
    Object.defineProperty(Moteur.prototype, "vitesse", {
        get: function () {
            return this._vitesse;
        },
        set: function (v) {
            if (v > 0) {
                this._vitesse = v;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moteur.prototype, "kilometrage", {
        get: function () {
            return this._kilometrage;
        },
        set: function (k) {
            if (k > 0) {
                this._kilometrage = k;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Moteur;
}());
exports.Moteur = Moteur;

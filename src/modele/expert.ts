import {Domaine} from "./domaine"

export interface Expert{
id: string;
img: string;
name: string;
prenom: string;
mail: string;
tel1: string;
tel2: string;
domain: Domaine;
note: Number[];
prix: Number;
heure: string;
pays: string;
region: string;
ville: string;
quartier: string;
}
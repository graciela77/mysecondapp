import {Domaine} from "./domaine"

export interface Expert{
id: number;
img: string;
name: string;
prenom: string;
mail: string;
tel1: string;
tel2: string;
domain: Domaine;
note: number[];
prix: number;
heure: string;
pays: string;
region: string;
ville: string;
quartier: string;
description: string;
}
import { Expert } from './expert';
import { Domaine } from './domaine';

export const _DOMAINE_ : Domaine ={id:"1", title: "Plomberie", sector: "terciaire"};

export const _EXPERT_ : Expert[]=[
    { id:1, img: "./../../../assets/images/citron.png", name: "TAMO",prenom: "Jean", mail: "tam@yahoo.fr", tel1: "2147", tel2: "1111", domain: _DOMAINE_, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou", description: "tres fort"},
    { id:2, img: "./../../../assets/images/banane.png", name: "habib",prenom: "Vieux", mail: "am@yahoo.fr", tel1: "8547", tel2: "1111", domain: _DOMAINE_, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou", description: "apte physiquement"},
    { id:3, img: "./../../../assets/images/orange.jpg", name: "Talla",prenom: "Jonas", mail: "tm@yahoo.fr", tel1: "2477", tel2: "1111", domain: _DOMAINE_, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou", description: "recherché"},
    { id:4, img: "./../../../assets/images/mangue.jpg", name: "Bedimo",prenom: "Paul", mail: "ta@yahoo.fr", tel1: "2147", tel2: "1111", domain: _DOMAINE_, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou", description: "recherché" },
    { id:5, img: "./../../../assets/images/ananas.png", name: "Okala",prenom: "Junior", mail: "tem@yahoo.fr", tel1: "2147", tel2: "1111", domain: _DOMAINE_, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou", description: "recherché"}
  ];
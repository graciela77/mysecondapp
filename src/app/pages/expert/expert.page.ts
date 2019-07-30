import { Component, OnInit } from '@angular/core';
import {Expert} from "./../../../modele/expert"
import {Domaine} from "./../../../modele/Domaine"

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage implements OnInit {
d:Domaine ={id:"1", title: "Plomberie", sector: "terciaire"}
  constructor() { }

  ngOnInit() {
  }
experts : Expert[]=[
  { id:"01a", img: "./../../../assets/images/citron.png", name: "TAMO",prenom: "Jean", mail: "tam@yahoo.fr", tel1: "2147", tel2: "1111", domain: this.d, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou"},
  { id:"01b", img: "./../../../assets/images/banane.png", name: "habib",prenom: "Vieux", mail: "am@yahoo.fr", tel1: "8547", tel2: "1111", domain: this.d, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou"},
  { id:"01c", img: "./../../../assets/images/orange.jpg", name: "Talla",prenom: "Jonas", mail: "tm@yahoo.fr", tel1: "2477", tel2: "1111", domain: this.d, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou"},
  { id:"01d", img: "./../../../assets/images/mangue.jpg", name: "Bedimo",prenom: "Paul", mail: "ta@yahoo.fr", tel1: "2147", tel2: "1111", domain: this.d, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou"},
  { id:"01e", img: "./../../../assets/images/ananas.png", name: "Okala",prenom: "Junior", mail: "tem@yahoo.fr", tel1: "2147", tel2: "1111", domain: this.d, note: [12,4,3,5], prix: 200, heure: "5h00", pays: "cameroun", region: "Centre", ville: "Yaounde", quartier: "ekounou"}
];
}

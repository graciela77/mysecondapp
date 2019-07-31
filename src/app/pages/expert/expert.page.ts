import { Component, OnInit } from '@angular/core'; 
import {_EXPERT_} from "./../../../modele/Liste_experts"
import {Expert} from "./../../../modele/expert"
import {Domaine} from "./../../../modele/Domaine"

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage implements OnInit {

  experts = _EXPERT_;
  constructor() { }

  ngOnInit() {
  }

  getDetails(id:number){
    console.log("j'ai cliqué sur le bouton");
  }

}

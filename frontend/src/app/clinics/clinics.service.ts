import {EventEmitter, Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Clinic} from "../shared/clinic.type";


@Injectable()
export class ClinicsService {
  clinicSelected = new EventEmitter<Clinic>();
  clinics = [
    { id: 1,
      name: "Shinchon Severance"
    },
    { id: 2,
      name: "Gangnam Severance"},
    {id: 3,
      name: "Samsung Medical Center"},
    {
      id: 4,
      name: "Kyung Hee University Medical Center"},
    {
      id: 5,name: "KUIMS"},
    {id: 6, name: "Seoul National University Hospital"},

  ]
  constructor(private router: Router,private route: ActivatedRoute) { }

 getClinic(id:number){
    return this.clinics.slice()[id];
 }

}

import { Component, OnInit } from '@angular/core';
import {Clinic} from "../shared/clinic.type";
import {ClinicsService} from "./clinics.service";



@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {
  selectedClinic:Clinic;
  constructor(private clinicService:ClinicsService) { }

  ngOnInit() {
    this.clinicService.clinicSelected
      .subscribe(
        (clinic:Clinic) => {
          this.selectedClinic = clinic;
        }
      );
  }

}

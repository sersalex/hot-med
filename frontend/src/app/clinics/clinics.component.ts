import { Component, OnInit } from '@angular/core';
import {Clinic} from "../shared/clinic.type";

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {
  // selectedClinic:Clinic;
  constructor() { }

  ngOnInit() {
  }

}

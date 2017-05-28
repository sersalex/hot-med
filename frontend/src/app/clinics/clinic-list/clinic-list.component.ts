import {Component, OnInit} from '@angular/core';
import {Clinic} from "../../shared/clinic.type";
import {ClinicsService} from "../clinics.service";

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.css']
})
export class ClinicListComponent implements OnInit {
  clinics: Clinic[];

  constructor(private clinicsService: ClinicsService) { }

  ngOnInit() {
    this.clinics = this.clinicsService.clinics;
  }

}

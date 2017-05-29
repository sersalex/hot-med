import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Clinic} from "../../shared/clinic.type";
import {ClinicsService} from "../clinics.service";

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.css']
})
export class ClinicDetailComponent implements OnInit {
  clinic: Clinic;
  id: number;
  constructor(private clinicService: ClinicsService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params)=>{
          this.id = +params['id'];
          this.clinic = this.clinicService.getClinic(this.id);
        }
      );
  }

}

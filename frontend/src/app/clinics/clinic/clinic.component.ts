import {Component, Input, OnInit} from '@angular/core';
import {Clinic} from "../../shared/clinic.type";
import {ActivatedRoute} from "@angular/router";
import {ClinicsService} from "../clinics.service";

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
  @Input() clinic: Clinic;
  @Input() index: number;

  constructor(private route: ActivatedRoute, private clinicService:ClinicsService) { }

  ngOnInit() {

  }
  onSelected(){
    this.clinicService.clinicSelected.emit(this.clinic);
  }

}

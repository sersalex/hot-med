import {Component, Input, OnInit} from '@angular/core';
import {Clinic} from "../../shared/clinic.type";

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {
  @Input() clinic: Clinic;

  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';


@Injectable()
export class ClinicsService {
  clinics = [
    {name: "Shinchon Severance"},
    {name: "Gangnam Severance"},
    {name: "Samsung Medical Center"},
    {name: "Kyung Hee University Medical Center"},
    {name: "KUIMS"},
    {name: "Seoul National University Hospital"},

  ]
  constructor() { }

}

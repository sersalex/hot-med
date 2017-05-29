import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {ClinicsComponent} from "./clinics/clinics.component";
import {PatientsComponent} from "./patients/patients.component";
import {BookingComponent} from "./booking/booking.component";
import {LoginComponent} from "./login/login.component";
import {RigisterComponent} from "./rigister/rigister.component";
import {ClinicNewComponent} from "./clinics/clinic-new/clinic-new.component";
import {ClinicEditComponent} from "./clinics/clinic-edit/clinic-edit.component";
import {ClinicDetailComponent} from "./clinics/clinic-detail/clinic-detail.component";
import {ClinicStartComponent} from "app/clinics/clinic-start/clinic-start.component";

const appRoutes : Routes = [
  {path: '', component: DashboardComponent},
  {path: 'clinics', component: ClinicsComponent,
    children: [
      {path: '', component: ClinicStartComponent},
      {path: 'new', component: ClinicEditComponent},
      {path: ':id', component: ClinicDetailComponent},
      {path: ':id/edit', component: ClinicEditComponent}
    ]
  },
  {path: 'patients', component: PatientsComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RigisterComponent},
  { path: '**',
    component: DashboardComponent,
    pathMatch: 'full'
  },
]

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
  exports:[ RouterModule ]
})

export class AppRoutingModule {
}

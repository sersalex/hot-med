import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {ClinicsComponent} from "./clinics/clinics.component";
import {PatientsComponent} from "./patients/patients.component";
import {BookingComponent} from "./booking/booking.component";
import {LoginComponent} from "./login/login.component";
import {RigisterComponent} from "./rigister/rigister.component";

const appRoutes : Routes = [
  {path: '', component: DashboardComponent},
  {path: 'clinics', component: ClinicsComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RigisterComponent},
]

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
  exports:[ RouterModule ]
})

export class AppRoutingModule {
}

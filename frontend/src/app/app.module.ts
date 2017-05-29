import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { PatientsComponent } from './patients/patients.component';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RigisterComponent } from './rigister/rigister.component';
import {AppRoutingModule} from "./app-routing.module";
import { ClinicNewComponent } from './clinics/clinic-new/clinic-new.component';
import { ClinicEditComponent } from './clinics/clinic-edit/clinic-edit.component';
import { ClinicComponent } from './clinics/clinic/clinic.component';
import { ClinicListComponent } from './clinics/clinic-list/clinic-list.component';
import {ClinicsService} from "./clinics/clinics.service";
import { ClinicDetailComponent } from './clinics/clinic-detail/clinic-detail.component';
import { ClinicStartComponent } from './clinics/clinic-start/clinic-start.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ClinicsComponent,
    PatientsComponent,
    BookingComponent,
    DashboardComponent,
    LoginComponent,
    RigisterComponent,
    ClinicNewComponent,
    ClinicEditComponent,
    ClinicComponent,
    ClinicListComponent,
    ClinicDetailComponent,
    ClinicStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ClinicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

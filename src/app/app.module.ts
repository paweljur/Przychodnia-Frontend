import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from 'src/core/core.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { CurrentUserComponent } from './main/components/current-user/current-user.component';
import { SharedModule } from './shared/shared.module';
import { AllUsersPageComponent } from './feature/all-users-page/all-users-page.component';
import { NewUserDialogComponent } from './feature/all-users-page/new-user-dialog/new-user-dialog.component';
import {
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
} from '@angular/material';
import { AllAppointmentsPageComponent } from './feature/all-appointments-page/all-appointments-page.component';
import { MakeAppointmentPageComponent } from './feature/make-appointment-page/make-appointment-page.component';
import { RegisterPatientDialogComponent } from './feature/make-appointment-page/register-patient-dialog/register-patient-dialog.component';
import { MakeAppointmentDialogComponent } from './feature/make-appointment-page/make-appointment-dialog/make-appointment-dialog.component';
import { MyAppointmentsComponent } from './feature/my-appointments-page/my-appointments-page.component';
import { VisitViewComponent } from './feature/my-appointments-page/visit-view/visit-view.component';
import { PastVisitsComponent } from './feature/past-visits/past-visits.component';
import { VisitDetailsDialogComponent } from './feature/past-visits/visit-details-dialog/visit-details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainComponent,
    CurrentUserComponent,
    AllUsersPageComponent,
    NewUserDialogComponent,
    AllAppointmentsPageComponent,
    MakeAppointmentPageComponent,
    RegisterPatientDialogComponent,
    MakeAppointmentDialogComponent,
    MyAppointmentsComponent,
    VisitViewComponent,
    PastVisitsComponent,
    VisitDetailsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    SharedModule,
  ],
  entryComponents: [NewUserDialogComponent, RegisterPatientDialogComponent, MakeAppointmentDialogComponent, VisitDetailsDialogComponent],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } }],
  bootstrap: [AppComponent],
})
export class AppModule {}

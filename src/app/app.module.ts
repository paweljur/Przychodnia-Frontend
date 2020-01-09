import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
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
import { CurrentUserComponent } from './main/current-user/current-user.component';
import { SharedModule } from './shared/shared.module';
import {
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
} from '@angular/material';
import { AllUsersPageComponent } from './feature/admin/all-users-page/all-users-page.component';
import { NewUserDialogComponent } from './feature/admin/all-users-page/new-user-dialog/new-user-dialog.component';
import { AllAppointmentsPageComponent } from './feature/registration/all-appointments-page/all-appointments-page.component';
import { MakeAppointmentPageComponent } from './feature/registration/make-appointment-page/make-appointment-page.component';
import { RegisterPatientDialogComponent } from './feature/registration/make-appointment-page/register-patient-dialog/register-patient-dialog.component';
import { MakeAppointmentDialogComponent } from './feature/registration/make-appointment-page/make-appointment-dialog/make-appointment-dialog.component';
import { MyAppointmentsComponent } from './feature/doctor/my-appointments-page/my-appointments-page.component';
import { VisitViewComponent } from './feature/doctor/my-appointments-page/visit-view/visit-view.component';
import { PastVisitsComponent } from './feature/doctor/past-visits-page/past-visits-page.component';
import { VisitDetailsDialogComponent } from './feature/doctor/past-visits-page/visit-details-dialog/visit-details-dialog.component';
import { AllTestOrdersPageComponent } from './feature/laboratory/all-test-orders-page/all-test-orders-page.component';
import { TestResultPageComponent } from './feature/laboratory/all-test-orders-page/test-result-page/test-result-page.component';
import { PastTestResultsPageComponent } from './feature/laboratory/past-test-results-page/past-test-results-page.component';
import { CoreModule } from './core/core.module';
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
    AllTestOrdersPageComponent,
    TestResultPageComponent,
    PastTestResultsPageComponent,
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
  entryComponents: [
    NewUserDialogComponent,
    RegisterPatientDialogComponent,
    MakeAppointmentDialogComponent,
    VisitDetailsDialogComponent,
  ],
  providers: [{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 3000 } }],
  bootstrap: [AppComponent],
})
export class AppModule {}

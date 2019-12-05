import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from 'src/core/guards/auth.guard';
import { AllUsersPageComponent } from './feature/all-users-page/all-users-page.component';
import { AllAppointmentsPageComponent } from './feature/all-appointments-page/all-appointments-page.component';
import { MakeAppointmentPageComponent } from './feature/make-appointment-page/make-appointment-page.component';
import { MyAppointmentsComponent } from './feature/my-appointments-page/my-appointments-page.component';
import { PastVisitsComponent } from './feature/past-visits/past-visits.component';
import { AllTestOrdersPageComponent } from './feature/all-test-orders-page/all-test-orders-page.component';
import { TestResultPageComponent } from './feature/all-test-orders-page/test-result-page/test-result-page.component';
import { PastTestResultsPageComponent } from './feature/past-test-results-page/past-test-results-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        component: AllUsersPageComponent,
      },
      {
        path: 'appointments',
        component: AllAppointmentsPageComponent,
      },
      {
        path: 'make-appointment',
        component: MakeAppointmentPageComponent,
      },
      {
        path: 'my-appointments',
        component: MyAppointmentsComponent,
      },
      {
        path: 'past-visits',
        component: PastVisitsComponent,
      },
      {
        path: 'test-orders',
        component: AllTestOrdersPageComponent,
      },
      {
        path: 'test-result/:id',
        component: TestResultPageComponent,
      },
      {
        path: 'past-test-results',
        component: PastTestResultsPageComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

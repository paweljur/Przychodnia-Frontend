import { Component, OnInit } from '@angular/core';
import { RegistrationServiceProxy, Appointment } from 'src/core/api/service-proxies';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss'],
})
export class MyAppointmentsComponent implements OnInit {
  constructor(private _registrationService: RegistrationServiceProxy) {}

  ngOnInit() {
    this._registrationService.getAllAppointments().subscribe((appointments: Appointment[]) => console.log(appointments));
  }
}

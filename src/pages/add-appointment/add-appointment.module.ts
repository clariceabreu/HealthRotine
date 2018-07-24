import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { AddAppointmentPage } from './add-appointment';

@NgModule({
  declarations: [
    AddAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAppointmentPage),
  ],
})
export class AddAppointmentPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotinePage } from './rotine';

@NgModule({
  declarations: [
    RotinePage,
  ],
  imports: [
    IonicPageModule.forChild(RotinePage),
  ],
})
export class RotinePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { AgendaPage } from './agenda';

@NgModule({
  declarations: [
    AgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaPage),
  ],
})
export class AgendaPageModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular/umd';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HistoryPage } from '../pages/history/history';
import { AgendaPage } from '../pages/agenda/agenda';
import { RotinePage } from '../pages/rotine/rotine';
import { AddPage } from '../pages/add/add';
import { SettingsPage } from '../pages/settings/settings'; 
import { AddAppointmentPage } from '../pages/add-appointment/add-appointment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HistoryPage,
    AgendaPage,
    AddPage,
    RotinePage,
    SettingsPage,
    AddAppointmentPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HistoryPage,
    AgendaPage,
    AddPage,
    RotinePage,
    SettingsPage,
    AddAppointmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

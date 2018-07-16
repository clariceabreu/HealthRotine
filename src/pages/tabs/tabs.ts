import { Component } from '@angular/core';

import { HistoryPage } from '../history/history';
import { AgendaPage } from '../agenda/agenda';
import { AddPage } from '../add/add';
import { RotinePage } from '../rotine/rotine';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HistoryPage;
  tab2Root = AgendaPage;
  tab3Root = AddPage;
  tab4Root = RotinePage;
  tab5Root = SettingsPage;

  constructor() {

  }
}

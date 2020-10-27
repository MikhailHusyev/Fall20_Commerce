import { Routes } from '@angular/router';
import { SidePanelComponent } from './side_panel/sidepanel.component';
import { DashBoardComponent } from './dashboard_base/dashboard.component';

export const privateRoutes: Routes = [
  { path: 'sidepanel', component: SidePanelComponent },
  { path: 'dashboard', component: DashBoardComponent },
];

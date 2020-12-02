import { Routes } from '@angular/router';
import { SidePanelComponent } from './side_panel/sidepanel.component';
import { DashBoardComponent } from './dashboard_base/dashboard.component';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';

export const privateRoutes: Routes = [
  { path: 'meetings', component: DashBoardComponent },
  { path: 'report', component: ReportComponent },
  { path: 'profile*', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
];

privateRoutes.forEach((item) => {
  item.canActivate = [MsalGuard];
});

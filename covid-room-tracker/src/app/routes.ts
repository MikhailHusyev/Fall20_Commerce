import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './public/public.module#PublicModule',
  },

  {
    path: './private',
    loadChildren: './private/private.module#PrivateModule',
    canActivate: [MsalGuard],
  },
];

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', loadChildren: './public/public.module#PublicModule' },
  { path: './private', loadChildren: './private/private.module#PrivateModule' },
];

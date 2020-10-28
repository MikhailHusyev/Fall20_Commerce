import { Routes } from '@angular/router';
import { HomePageComponent } from './home_page/home.component';
import { LoginComponent } from './login_page/login.component';

export const publicRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
];

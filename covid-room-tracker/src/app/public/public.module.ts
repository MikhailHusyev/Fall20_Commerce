import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { publicRoutes } from './public.routes';
import { HomePageComponent } from './home_page/home.component';
import { LoginComponent } from './login_page/login.component';
import { MatButtonModule } from '@angular/material/button';
import { ErrorPageComponent } from './error_page/errorpage.component';

@NgModule({
  imports: [RouterModule.forRoot(publicRoutes), RouterModule, MatButtonModule],
  exports: [],
  declarations: [HomePageComponent, LoginComponent, ErrorPageComponent],
  providers: [],
})
export class PublicModule {}

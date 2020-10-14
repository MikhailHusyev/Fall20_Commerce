import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { publicRoutes } from './public.routes';
import { HomePageComponent } from './home_page/home.component';

@NgModule({
  imports: [RouterModule.forRoot(publicRoutes)],
  exports: [],
  declarations: [HomePageComponent],
  providers: [],
})
export class PublicModule {}

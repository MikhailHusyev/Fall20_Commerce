import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';

import { appRoutes } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), PublicModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

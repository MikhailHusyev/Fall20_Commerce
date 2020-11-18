import { NgModule } from '@angular/core';
import { SidePanelComponent } from './side_panel/sidepanel.component';
import { RouterModule } from '@angular/router';
import { privateRoutes } from './private.routes';
import { DashBoardComponent } from './dashboard_base/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SelectRoom } from './select_room/selectroom.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ReportComponent } from './report/report.component';
import { ProfileComponent } from './profile/profile.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};
@NgModule({
  imports: [
    RouterModule.forRoot(privateRoutes),
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    SwiperModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [],
  declarations: [
    SidePanelComponent,
    DashBoardComponent,
    SelectRoom,
    ReportComponent,
    ProfileComponent,
  ],
  providers: [{ provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG }],
})
export class PrivateModule {}

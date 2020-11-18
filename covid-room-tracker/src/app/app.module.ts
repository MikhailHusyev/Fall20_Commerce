import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { appRoutes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsalInterceptor, MsalModule } from '@azure/msal-angular';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    PublicModule,
    PrivateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MsalModule.forRoot(
      {
        auth: {
          clientId: '59b7132a-f776-48e0-a86e-7120b66d041a',
          authority: 'https://login.microsoftonline.com/common',
          redirectUri: 'http://localhost:4200/profile',
        },
        cache: {
          cacheLocation: 'localStorage',
          storeAuthStateInCookie: isIE, // set to true for IE 11
        },
      },
      {
        popUp: !isIE,
        consentScopes: ['user.read', 'openid', 'profile'],
        unprotectedResources: [],
        protectedResourceMap: [
          ['https://graph.microsoft.com/v1.0/me', ['user.read']],
        ],
        extraQueryParameters: {},
      }
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

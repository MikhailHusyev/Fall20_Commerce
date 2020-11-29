import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { appRoutes } from './routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { environment } from 'src/environments/environment';
import { MsalComponent } from './msal.component';

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [AppComponent, MsalComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
    }),
    PublicModule,
    PrivateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MsalModule.forRoot(
      {
        auth: {
          clientId: environment.clientId,
          authority: environment.authority,
          redirectUri: environment.redirectUrl,
          navigateToLoginRequestUrl: true,
          postLogoutRedirectUri: 'http://localhost:4200/profile',
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
})
export class AppModule {
  ngDoBootstrap(ref: ApplicationRef) {
    if (window !== window.parent && !window.opener) {
      ref.bootstrap(MsalComponent);
    } else {
      ref.bootstrap(AppComponent);
    }
  }
}

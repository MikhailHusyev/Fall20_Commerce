import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html',
})
export class HomePageComponent implements OnInit {
  constructor(private authService: MsalService) {}

  ngOnInit() {}
  login() {
    const isIE =
      window.navigator.userAgent.indexOf('MSIE ') > -1 ||
      window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.authService.loginRedirect();
    } else {
      this.authService.loginPopup();
    }
  }
}

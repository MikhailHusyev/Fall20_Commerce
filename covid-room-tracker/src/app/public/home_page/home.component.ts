import { Component, OnInit } from '@angular/core';
import { fade } from './animations';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
  animations: fade,
})
export class HomePageComponent implements OnInit {
  choice = 2;
  state = 'in';
  counter = 0;
  enableAnimation = false;
  imageSource = '';
  textSource = '';

  imgSrc1 = '../../../assets/home_page/second_portion.jpg';
  imgSrc2 = '../../../assets/home_page/stayinformed.jpg';
  imgSrc3 = '../../../assets/home_page/slide3.jpg';

  txtSrc1 = 'Track meetings through your microsoft account.';
  txtSrc2 = 'Report if you have been test positive for COVID.';
  txtSrc3 =
    'Stay informed if you have interacted with anyone who has had covid.';

  constructor(private authService: MsalService) {}

  ngOnInit() {
    this.imageSource = this.imgSrc1;
    this.textSource = this.txtSrc1;
  }

  login() {
    const isIE =
      window.navigator.userAgent.indexOf('MSIE ') > -1 ||
      window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.authService.loginRedirect({
        extraScopesToConsent: ['user.read', 'openid', 'profile'],
      });
    } else {
      this.authService.loginPopup({
        extraScopesToConsent: ['user.read', 'openid', 'profile'],
      });
    }
  }

  onClick() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
    this.choice = 1;
  }
  onClick2() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
    this.choice = 2;
  }
  onClick3() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
    this.choice = 3;
  }

  toggleImg() {
    if (this.choice === 1) {
      this.textSource = this.txtSrc1;
      this.imageSource = this.imgSrc1;
    } else if (this.choice === 2) {
      this.textSource = this.txtSrc3;
      this.imageSource = this.imgSrc2;
    } else {
      this.textSource = this.txtSrc3;
      this.imageSource = this.imgSrc3;
    }
  }

  onDone($event) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }
}

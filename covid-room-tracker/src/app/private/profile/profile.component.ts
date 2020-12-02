import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { InteractionRequiredAuthError, AuthError } from 'msal';
import { ProfileService } from '../services/profile.service';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: MsalService,
    private http: HttpClient,
    private profileService: ProfileService
  ) {}
  profile;
  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    this.profile = this.profileService.getProfile();
  }
}

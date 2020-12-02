import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { InteractionRequiredAuthError, AuthError } from 'msal';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private authService: MsalService, private http: HttpClient) {}

  profile;

  getProfile() {
    if (this.profile != null) return this.profile;
    this.http.get(GRAPH_ENDPOINT).subscribe({
      next: (profile) => {
        this.profile = profile;
        localStorage.setItem('profile', this.profile.id);
      },
      error: (err: AuthError) => {
        // If there is an interaction required error,
        // call one of the interactive methods and then make the request again.
        if (
          InteractionRequiredAuthError.isInteractionRequiredError(err.errorCode)
        ) {
          this.authService
            .acquireTokenPopup({
              scopes: this.authService.getScopesForEndpoint(GRAPH_ENDPOINT),
            })
            .then(() => {
              this.http
                .get(GRAPH_ENDPOINT)
                .toPromise()
                .then((profile) => {
                  this.profile = profile;
                  localStorage.setItem('profile', this.profile.id);
                });
            });
        }
      },
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Meeting } from '../models/meeting.model';

@Injectable({ providedIn: 'root' })
export class MeetingService {
  constructor(private http: HttpClient) {}

  addMeetings(meetings: Meeting[]) {
    this.http
      .post<Meeting[]>(environment.apiBaseUrl + '/api/v1/meetings', meetings)
      .subscribe();
  }
}

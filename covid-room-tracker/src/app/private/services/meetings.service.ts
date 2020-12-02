import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meeting } from '../models/meeting.model';

@Injectable({ providedIn: 'root' })
export class MeetingService {
  constructor(private http: HttpClient) {}

  addMeetings(meetings: Meeting[]) {
    this.http
      .post<Meeting[]>('http://localhost:8080/api/v1/meetings', meetings)
      .subscribe();
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IRoom } from '../models/room.model';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';
import {
  startOfDay,
  subDays,
  addDays,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
} from 'angular-calendar';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { AuthError, InteractionRequiredAuthError } from 'msal';
import { MeetingService } from '../services/meetings.service';
import { Meeting } from '../models/meeting.model';
import { title } from 'process';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me/events';
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashBoardComponent implements OnInit {
  constructor(
    private authService: MsalService,
    private http: HttpClient,
    private meetingService: MeetingService
  ) {}

  ngOnInit() {
    this.getEvents();
  }
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  innerWidth: Number;
  private pagination: PaginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false,
    type: 'bullets',
  };

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      lockClass: '.swiper-button-lock',
    },
    pagination: this.pagination,
    slideToClickedSlide: true,
    autoplay: false,
    breakpoints: {
      720: {
        slidesPerView: 3,
      },
    },
  };
  actions: CalendarEventAction[] = [
    {
      label: 'OpenRooms',
      onClick: ({ event }: { event: CalendarEvent }): void => {},
    },
  ];
  events: CalendarEvent[] = [];

  meetings: Meeting[] = [];
  activeDayIsOpen: boolean = true;
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (
      (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
      events.length === 0
    ) {
      this.activeDayIsOpen = false;
    } else {
      this.activeDayIsOpen = true;
    }
    this.viewDate = date;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  getEvents() {
    this.http.get(GRAPH_ENDPOINT).subscribe({
      next: (event) => {
        this.insertMeetings(event);
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
                .then((event) => this.insertMeetings(event));
            });
        }
      },
    });
  }
  insertMeetings(event) {
    for (let value of event.value) {
      let calendarEvent: CalendarEvent = {
        start: subDays(startOfDay(new Date(value.start.dateTime)), 0),
        end: subDays(startOfDay(new Date(value.end.dateTime)), 0),
        title:
          'Subject: ' +
          value.subject +
          ' Location: ' +
          value.location?.displayName,
      };
      let meeting: Meeting = {
        fk_oid: 'Commerce Bank',
        fk_uid: localStorage.getItem('profile'),
        meeting_date: value.start.dateTime,
        mid: value.id,
        fk_rmid: value.location?.displayName,
      };

      this.events.push(calendarEvent);
      this.meetings.push(meeting);
    }
    this.meetingService.addMeetings(this.meetings);
  }
}

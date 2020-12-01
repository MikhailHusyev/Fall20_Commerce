import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IRoom } from '../models/room.model';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';
import { startOfDay, subDays, addDays, isSameDay, isSameMonth } from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
} from 'angular-calendar';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';
import { AuthError, InteractionRequiredAuthError } from 'msal';

const GRAPH_ENDPOINT =
  'https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location';
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashBoardComponent implements OnInit {
  constructor(private authService: MsalService, private http: HttpClient) {}

  ngOnInit() {
    this.getEvents();
  }
  event;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  innerWidth: Number;
  rooms: Array<IRoom> = [
    {
      roomImage:
        'https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg',
      roomName: 'Ruby',
    },
    {
      roomImage:
        'https://www.ikea.com/images/room-with-a-white-desk-placed-centrally-matching-tall-bookca-b498fcb9b57a8d6397b5970eea5a20bd.jpg',
      roomName: 'Cobol',
    },
    {
      roomImage:
        'https://d24z4d3zypmncx.cloudfront.net/BlogPosts/essential-advice-on-meeting-room-acoustics/images/essential-advice-on-meeting-room-acoustics_header.png',
      roomName: 'Java',
    },
    {
      roomImage:
        'https://res.cloudinary.com/peerspace-inc/image/upload/zkrawluextj3x7n5gedl.jpg',
      roomName: 'Go',
    },
  ];

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
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date('10-23-2020'), 1),
      title: 'Meeting',
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];
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
    this.http
      .get(GRAPH_ENDPOINT)
      .toPromise()
      .then((event) => {
        this.event = event;
      });
  }

  
}

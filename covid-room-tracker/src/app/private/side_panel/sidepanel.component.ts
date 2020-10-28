import { Component, OnInit, HostListener } from '@angular/core';
import { ISidePanel } from '../models/sidepanel.model';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
@Component({
  selector: 'side-panel',
  templateUrl: 'sidepanel.component.html',
  styleUrls: ['sidepanel.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'true',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'false',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      transition('true <=> false', animate('400ms ease-in-out')),
    ]),
    trigger('blurBackground', [
      state(
        'true',
        style({
          width: '100%',
          'min-height': '100%',
          position: 'fixed',
          'z-index': 1,
          filter: 'blur(15rem)',
          background: 'rgba(0,0,0,.6)',
          opacity: 1,
        })
      ),
      state(
        'false',
        style({
          height: 0,
          opacity: 0,
          'background-color': 'none',
        })
      ),
      transition('true <=> false', animate('400ms')),
    ]),
  ],
})
export class SidePanelComponent implements OnInit {
  constructor() {}
  panelContents: Array<ISidePanel> = [
    {
      icon: 'home',
      name: 'Home',
      routerLink: 'dashboard',
    },
    {
      icon: 'person icon',
      name: 'Profile',
      routerLink: 'profile',
    },
    {
      icon: 'meeting_room',
      name: 'Meetings',
      routerLink: 'meetings',
    },
    {
      icon: 'healing',
      name: 'Report',
      routerLink: 'report',
    },
  ];
  isSmall = false;
  isOpen = false;
  wasInside = false;
  innerWidth;

  ngOnInit() {
    this.onResize();
  }
  toggle() {
    this.wasInside = true;
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth >= 768) {
      this.isOpen = true;
      this.isSmall = true;
    } else {
      this.isOpen = false;
      this.isSmall = false;
    }
  }
  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      if (this.isOpen && this.innerWidth <= 768) {
        this.isOpen = false;
      }
    }
    this.wasInside = false;
  }
}

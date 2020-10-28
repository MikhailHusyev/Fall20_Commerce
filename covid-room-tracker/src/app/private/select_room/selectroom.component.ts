import { Component, OnInit, Input } from '@angular/core';
import { IRoom } from '../models/room.model';
@Component({
  selector: 'select-room',
  templateUrl: 'selectroom.component.html',
  styleUrls: ['selectroom.component.scss'],
})
export class SelectRoom implements OnInit {
  constructor() {}

  @Input('room')
  room: IRoom;

  ngOnInit() {}
}

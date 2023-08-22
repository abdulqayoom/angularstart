import { Component, OnInit } from '@angular/core';
import { Iroom } from './Iroom';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  room:Iroom={
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

}

import { Component, OnInit } from '@angular/core';
import { Iroom } from './Iroom';
import { IroomList } from '../roomlist/IroomList';
import { RoomService } from '../Service/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  constructor(private rooms:RoomService){

  }
  _RoomList: IroomList[] = [];
  ngOnInit(): void {
   this._RoomList=this.rooms.getRoomList();
   
  }
  room:Iroom={
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  roomSelected(room:IroomList)
  {
console.log(room)
  }

}



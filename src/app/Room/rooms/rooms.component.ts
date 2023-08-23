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
  public _userlist={};
  _RoomList: IroomList[] = [];
  ngOnInit(): void {
   this._RoomList=this.rooms.getRoomList();
   this.rooms.getuserList().subscribe((data)=>{
    this._userlist=data;
    console.warn(this._userlist);
   });
   //console.log(this._userlist)
   
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



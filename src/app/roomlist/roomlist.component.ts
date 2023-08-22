import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IroomList } from './IroomList';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  @Input() rooms:IroomList[]=[];
  @Output() selectedRoom= new EventEmitter<IroomList>();
   ngOnInit(): void {

   }
   changeStatus(room:IroomList)
   {
    room.status="Inactive"
    this.selectedRoom.emit(room);

   }
  
}

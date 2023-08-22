import { Component, Input, OnInit } from '@angular/core';
import { IroomList } from './IroomList';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
  @Input() rooms:IroomList[]=[];
   ngOnInit(): void {

   }


 


  
  
  
}

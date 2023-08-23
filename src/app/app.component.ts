import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { dummy } from './dummy';
import {RoomsComponent} from './Room/rooms/rooms.component'
import{HeaderComponent} from './Shared/header/header.component'
import { EmployeeComponent } from './employee/employee.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterViewInit{
 public title="Hotel management";
@ViewChild(HeaderComponent) headercomponent!:HeaderComponent;
@ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
@ViewChild('user1',{read:ViewContainerRef}) vcr1!:ViewContainerRef;
constructor(){}


  ngAfterViewInit(): void {
    this.headercomponent.tittle= this.title;
    const contref=this.vcr.createComponent(EmployeeComponent)
    const contref1=this.vcr1.createComponent(EmployeeComponent)
  }
  ngOnInit(): void {
   
  }


}

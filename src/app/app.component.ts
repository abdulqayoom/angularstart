import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { dummy } from './dummy';
import { HeaderComponent } from './header/header.component';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterViewInit{
 public title="Hotel management";
@ViewChild(HeaderComponent) headercomponent!:HeaderComponent;
@ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;

constructor(){}


  ngAfterViewInit(): void {
    this.headercomponent.tittle= this.title;
    const contref=this.vcr.createComponent(RoomsComponent)
  }
  ngOnInit(): void {
   
  }


}

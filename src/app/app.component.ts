import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { dummy } from './dummy';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterViewInit{
 public user:dummy
@ViewChild(HeaderComponent) headercomponent!:HeaderComponent

constructor(){

  this.user={
    id:2,
    name:"hafil",
    age:22
  
  }
  console.log(this.user)
  console.log(this.user)
}
  ngAfterViewInit(): void {
    console.log(this.headercomponent);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}

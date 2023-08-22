import { Component } from '@angular/core';
import { dummy } from './dummy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel Inventory System';
 public user:dummy


constructor(){

  this.user={
    id:2,
    name:"hafil",
    age:22
  
  }
  console.log(this.user)
  console.log(this.user)
}


}

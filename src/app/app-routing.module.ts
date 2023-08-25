import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './Room/rooms/rooms.component';



const routes:Routes=[
 
  {
    path:"rooms",component:RoomsComponent
  },
  {
    path:'',redirectTo:"/rooms",pathMatch:'full'
  },
  {
    path:'**',redirectTo:"/rooms",pathMatch:'full'
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
exports:[ RouterModule]
  
})
export class AppRoutingModule { }

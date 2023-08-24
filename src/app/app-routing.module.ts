import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './Room/rooms/rooms.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';


const routes:Routes=[
  {
    path:"employee",component:EmployeeComponent
  },
  {
    path:"employee/:id",component:AddemployeeComponent
  },
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

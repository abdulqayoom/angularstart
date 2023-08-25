import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './Room/rooms/rooms.component';



const routes: Routes = [

  {
    path: "rooms",
    loadChildren: () => import('./Room/rooms.module').then(m => m.RoomsModule)
  },
  {
    path: "employee",
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

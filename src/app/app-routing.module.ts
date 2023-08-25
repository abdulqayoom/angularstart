import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { loginguardGuard } from './loginGuard/loginguard.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  {
    path: "rooms",
    loadChildren: () => import('./Room/rooms.module').then(m => m.RoomsModule),
    canActivate: [loginguardGuard]
  },
  {
    path: "employee",
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: "login", component: LoginComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

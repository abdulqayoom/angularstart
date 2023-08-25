import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { CreateComponent } from './create/create.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';

const routes: Routes = [
  {
    path: "", component: EmployeeComponent
  },

  {
    path: "add", component: CreateComponent, pathMatch: 'full'
  },
  {
    path: ":id", component: AddemployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

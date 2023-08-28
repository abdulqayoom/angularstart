import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { BookroomComponent } from './bookroom/bookroom.component';

const routes: Routes = [  {
  path:"",component:RoomsComponent
},
{
  path:"bookroom",
  component:BookroomComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }

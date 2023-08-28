import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { BookroomComponent } from './bookroom/bookroom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    RoomsComponent,
    RoomlistComponent,
    BookroomComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class RoomsModule { }

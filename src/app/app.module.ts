import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RoomsComponent} from './Room/rooms/rooms.component'
import{RoomlistComponent}from './Room/roomlist/roomlist.component'
import{HeaderComponent} from './Shared/header/header.component'
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomlistComponent,
    HeaderComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    {
    provide:APP_SERVICE_CONFIG,
    useValue:APP_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

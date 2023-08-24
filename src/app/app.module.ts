import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RoomsComponent} from './Room/rooms/rooms.component'
import{RoomlistComponent}from './Room/roomlist/roomlist.component'
import{HeaderComponent} from './Shared/header/header.component'
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { CoreinterceptorInterceptor } from './core/coreinterceptor.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './employee/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomlistComponent,
    HeaderComponent,
    EmployeeComponent,
    AddemployeeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
    provide:APP_SERVICE_CONFIG,
    useValue:APP_CONFIG,
    multi:true,
    },
   { provide: HTTP_INTERCEPTORS, useClass : CoreinterceptorInterceptor, multi : true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

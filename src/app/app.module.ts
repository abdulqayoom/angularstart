import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './Shared/header/header.component'
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { CoreinterceptorInterceptor } from './core/coreinterceptor.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from './shared/hover.directive';
import { EmailDirective } from './validator/email.directive';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    HoverDirective,
    EmailDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: CoreinterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

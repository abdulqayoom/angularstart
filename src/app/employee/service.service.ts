import { Inject, Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { Iemployee } from './Iemployee';
import { Icreate } from './employeeDTO/IcreateDTO';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient, @Inject(APP_SERVICE_CONFIG) private config:AppConfig) { }
  getuser$=this.http.get<Iemployee[]>(this.config.apiEndPoint+'/posts').pipe(
    shareReplay(1)
  )
  getusers()
  {
    return this.http.get<Iemployee[]>(this.config.apiEndPoint+'/posts')
  }
  postuser(user:Icreate)
  {
    return this.http.post(this.config.apiEndPoint+'/posts',user);
  }
}

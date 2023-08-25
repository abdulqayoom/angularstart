import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 islogged=false
  constructor() { }

  login(username:string,pass:string)
  {
if(username=="hafil" && pass=="test"){
this.islogged=true
  }
  return this.islogged
}
}

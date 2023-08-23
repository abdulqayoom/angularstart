import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Iemployee } from './Iemployee';
import { Icreate } from './employeeDTO/IcreateDTO';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  user:Iemployee[]=[];
  userinfo:Icreate={
    userId:"123",
    body:"samader",
    title:"SF"
  };
  constructor(private _user:ServiceService){}
  ngOnInit(): void {
    this._user.getusers().subscribe((data)=>{this.user=data;
    console.warn(data);}
    )
    this._user.postuser(this.userinfo).subscribe((data)=>{
      debugger
      console.warn(data)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
id:number=0;
public employee:any={};
  constructor(private route:ActivatedRoute, private employeeservice:ServiceService){
    debugger
this.route.params.subscribe((parms)=>this.id=parms["id"])
  }
  ngOnInit(): void {
    debugger
this.employeeservice.getuserbyid(this.id).subscribe((data)=>{
  this.employee=data;
  debugger
})
  }
}

import { Component, OnInit } from '@angular/core';
import { Iemployee } from '../Iemployee';
import { Icreate } from '../employeeDTO/IcreateDTO';
import { ServiceService } from '../service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  employee:Icreate={
    body:'',
    title:"",
    userId:""
  }
  successmessage:string="";
  constructor(private employeeservice :ServiceService){

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  addemployee(create:NgForm)
  {
    this.employeeservice.postuser(this.employee).subscribe((data)=>{
     this.successmessage="employee added"
     create.resetForm(
      {
        body:'',
     title:"",
     userId:""
      }
     );
    })
   
  }
}

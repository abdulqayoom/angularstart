import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-bookroom',
  templateUrl: './bookroom.component.html',
  styleUrls: ['./bookroom.component.css']
})
export class BookroomComponent implements OnInit {
  employee!: FormGroup;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    this.employee = this.fb.group({
      roomType: [''],
      amenties: [''],
      price: [''],

      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],

      }),
      guestCount: [''],
    })


  }
  bookroom() {
    console.log(this.employee.value);
  }
}

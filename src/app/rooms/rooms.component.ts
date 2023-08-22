import { Component, OnInit } from '@angular/core';
import { Iroom } from './Iroom';
import { IroomList } from '../roomlist/IroomList';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  _RoomList: IroomList[] = [];
  ngOnInit(): void {
    this._RoomList=[
      {
        roomType: "Standard",
        amenties: "TV, Wi-Fi",
        price: 100,
        photo: "room1.jpg",
        checkinTime: new Date("2023-08-22T14:00:00"),
        checkoutTime: new Date("2023-08-23T11:00:00"),
        status:"Active"
      },
      {
        roomType: "Deluxe",
        amenties: "TV, Wi-Fi, Mini Bar",
        price: 150,
        photo: "room2.jpg",
        checkinTime: new Date("2023-08-22T15:00:00"),
        checkoutTime: new Date("2023-08-23T12:00:00")
        ,
        status:"Active"
      },
      {
        roomType: "Suite",
        amenties: "TV, Wi-Fi, Mini Bar, Jacuzzi",
        price: 250,
        photo: "room3.jpg",
        checkinTime: new Date("2023-08-23T14:00:00"),
        checkoutTime: new Date("2023-08-24T11:00:00"),
        
        status:"Active"
      },
      {
        roomType: "Standard",
        amenties: "TV, Wi-Fi",
        price: 110,
        photo: "room4.jpg",
        checkinTime: new Date("2023-08-23T15:00:00"),
        checkoutTime: new Date("2023-08-24T12:00:00"),
        status:"Active"
      },
      {
        roomType: "Deluxe",
        amenties: "TV, Wi-Fi, Mini Bar",
        price: 160,
        photo: "room5.jpg",
        checkinTime: new Date("2023-08-24T14:00:00"),
        checkoutTime: new Date("2023-08-25T11:00:00"),
        status:"Active"
      },
      {
        roomType: "Suite",
        amenties: "TV, Wi-Fi, Mini Bar, Jacuzzi",
        price: 270,
        photo: "room6.jpg",
        checkinTime: new Date("2023-08-25T15:00:00"),
        checkoutTime: new Date("2023-08-26T12:00:00"),
        status:"Active"
      },
      {
        roomType: "Standard",
        amenties: "TV, Wi-Fi",
        price: 120,
        photo: "room7.jpg",
        checkinTime: new Date("2023-08-26T14:00:00"),
        checkoutTime: new Date("2023-08-27T11:00:00"),
        status:"Active"
      },
      {
        roomType: "Deluxe",
        amenties: "TV, Wi-Fi, Mini Bar",
        price: 170,
        photo: "room8.jpg",
        checkinTime: new Date("2023-08-27T15:00:00"),
        checkoutTime: new Date("2023-08-28T12:00:00"),
        status:"Active"
      },
      {
        roomType: "Suite",
        amenties: "TV, Wi-Fi, Mini Bar, Jacuzzi",
        price: 290,
        photo: "room9.jpg",
        checkinTime: new Date("2023-08-28T14:00:00"),
        checkoutTime: new Date("2023-08-29T11:00:00"),
        status:"Active"
      },
      {
        roomType: "Standard",
        amenties: "TV, Wi-Fi",
        price: 130,
        photo: "room10.jpg",
        checkinTime: new Date("2023-08-29T15:00:00"),
        checkoutTime: new Date("2023-08-30T12:00:00"),
        status:"Active"
      }
    ];
  }
  room:Iroom={
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  roomSelected(room:IroomList)
  {
console.log(room)
  }

}

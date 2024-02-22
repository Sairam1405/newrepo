import { Component } from '@angular/core';
import { CricketServiceService } from '../../cricket-service.service';

@Component({
  selector: 'app-userbookings',
  templateUrl: './userbookings.component.html',
  styleUrl: './userbookings.component.css'
})
export class UserbookingsComponent {
  bookings;
  name = localStorage.getItem('name')
  bookname ;
  bookdeatils =false;
  userinfo;
  id : any;
  grounddetails;
  constructor(private display : CricketServiceService){
    this.getAllBookings();
    this.getBookingByName();
    this.getground();
  }

  ngDoCheck(){
    this.getAllBookings();
    this.getground();
  }

  getAllBookings(){
    this.display.getBookings().subscribe((res) => {
      this.bookings = res;
    })
  }

  getBookingByName(){
    this.display.getBookings().subscribe((res) =>{
      if(this.name){
        this.bookname = this.bookings.filter(u => { return u.name == this.name})
      }
    })
  }

  bookinfo(n : any){
    this.bookdeatils = true;
    console.log(n)
    this.userinfo = n;
    this.id = n.groundid;
  }


  getground(){
    this.display.getGroundById(this.id).subscribe((res) =>{
      this.grounddetails = res
    })
  }

  moveto(){
    this.bookdeatils = false;
  }
  
}

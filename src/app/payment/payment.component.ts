import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  constructor(private route : Router){}

 pa = {
  "cnumber" : "",
  "cname" : "",
  "ctype" : "",
  "eyear" : "", 
  "emonth" : ""
 }

  pay(){
    this.route.navigate(['/ubookings'])
  }
}

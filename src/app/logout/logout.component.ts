import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private route : Router){
    localStorage.removeItem('name');
    localStorage.removeItem('mobile')
    route.navigate(['home'])
  }
}

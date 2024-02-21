import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CricketServiceService } from '../cricket-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  constructor(private fb: FormBuilder,private hp:CricketServiceService,private root:Router) { }

    
    
    loginForm:FormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    onSubmit() {
      this.hp.getLoginValidation().subscribe((res: any[]) => {
        const user = res.find((item) => {
          localStorage.setItem('name', item.email);
          return item.email === this.loginForm.get('username').value && item.password === this.loginForm.get('password').value;
        });
        if (user) {
          alert("Login is successful");
          this.loginForm.reset();
          this.root.navigate(['uhead']); // Use router to navigate
        } else {
          alert("User is not there, provide correct credentials");
          this.loginForm.reset();
        }
      }, err => {
        alert("Something went wrong");
      });
    }
}

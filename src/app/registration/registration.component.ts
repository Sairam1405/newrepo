import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CricketServiceService } from '../cricket-service.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private hp: CricketServiceService,private root:Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', Validators.required],
      phoneNumber: ['', Validators.required],

      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    })

  }

  onSubmit() {

    this.hp.postRegisterForm(this.registrationForm.value).subscribe((res) => {
      alert("registarion is done")
      this.registrationForm.reset()
      this.root.navigate(['login'])
    },err=>{
      alert("something went wrong");
      
    })
}
}
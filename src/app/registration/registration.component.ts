import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  registrationForm: FormGroup ;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Send registration data to backend or perform other actions
    } else {
      // Form is invalid, do something (e.g., display error messages)
    }
  }
}

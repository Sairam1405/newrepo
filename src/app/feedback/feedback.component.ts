import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  constructor(private fb : FormBuilder){}

  feedform = this.fb.group(
   {
      'msg' : ['', Validators.required],
      'name' : ['', Validators.required],
      'mail' : this.fb.control('', [Validators.required, Validators.pattern("[a-zA-Z]{1,}[0-9]{0,}[@]{1}[g]{1}[m]{1}[a]{1}[i]{1}[l]{1}[.]{1}[c]{1}[o]{1}[m]{1}")]),
      'rating' : ['', Validators.required]
   }
  )




  submit(){
   console.log(this.feedform);
   this.feedform.reset();
  }
  

  
}

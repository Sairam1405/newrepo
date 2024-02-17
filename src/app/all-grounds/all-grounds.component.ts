import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CricketServiceService } from '../cricket-service.service';

@Component({
  selector: 'app-all-grounds',
  templateUrl: './all-grounds.component.html',
  styleUrl: './all-grounds.component.css'
})
export class AllGroundsComponent {
  data:any
v: any;
  constructor(private display: CricketServiceService) {

  }
  ngOnInit(){
    this.display.Get().subscribe((res)=>{
      console.log(res);
      
      this.data=res
      
    })
  }
}

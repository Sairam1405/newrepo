import { Component } from '@angular/core';
import { CricketServiceService } from '../../cricket-service.service';

@Component({
  selector: 'app-userlocations',
  templateUrl: './userlocations.component.html',
  styleUrl: './userlocations.component.css'
})
export class UserlocationsComponent {
  constructor(private ht : CricketServiceService){
    this.getLocations();
  }

  data : any;

  getLocations(){
    this.ht.getAllLocations().subscribe((res) =>{
      this.data = res;
    })
  }
}

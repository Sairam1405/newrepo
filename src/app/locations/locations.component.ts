import { Component } from '@angular/core';
import { CricketServiceService } from '../cricket-service.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {
    constructor(private ht : CricketServiceService){
      this.getLocations();
    }

    data : any;

    getLocations(){
      this.ht.Get().subscribe((res) =>{
        this.data = res;
      })
    }
}

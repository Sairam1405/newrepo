import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CricketServiceService } from '../cricket-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { discardPeriodicTasks } from '@angular/core/testing';


@Component({
  selector: 'app-all-grounds',
  templateUrl: './all-grounds.component.html',
  styleUrl: './all-grounds.component.css'
})
export class AllGroundsComponent {
  // data:any

  // constructor(private display: CricketServiceService) {

  // }
  // ngOnInit(){
  //   this.display.Get().subscribe((res)=>{
  //     console.log(res);
      
  //     this.data=res
      
  //   })
  // }

  data: any;
  locat: any;
  search: any = "";
  constructor(private display: CricketServiceService, private root: ActivatedRoute, private route : Router) {
    display.Get().subscribe(p =>{
      this.data = p;
    })
    this.getLoc();
  }

  ngDoCheck(){
    this.getLoc();
  }

  getLoc(){
   this.root.queryParamMap.subscribe(p =>{
      // let loc = p.get('location')
    //  this.search = p.get('location')
      let location = p.get('location')
      if(location){
        this.search = location;
      //  this.route.navigateByUrl('/all-grounds')
      }else{

      }
      let loc = this.search;
      if(loc){
        this.locat = this.data.filter((l : any) =>{
          return l.location == loc
         
        })
      }else{
        return this.locat = this.data;
      }
    })
  }

  

  // ngOnInit() {
  //   this.display.Get().subscribe((res) => {
  //     this.data = res;
  //   });
  // }

 
}

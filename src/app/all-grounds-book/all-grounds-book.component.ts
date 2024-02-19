import { Component } from '@angular/core';
import { CricketServiceService } from '../cricket-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all-grounds-book',
  templateUrl: './all-grounds-book.component.html',
  styleUrl: './all-grounds-book.component.css'
})
export class AllGroundsBookComponent{

  // ground ;

  // constructor(private hp:CricketServiceService, private route : ActivatedRoute){}

  // ngOnInit(){
  //   this.route.paramMap.subscribe(p =>{
  //     let gid = Number(p.get('id'));
  //     this.ground = this.hp.Get().subscribe(r =>{
        
  //     })
  //   })
  // }

  ground : any;
  data;

  constructor(private display : CricketServiceService, private route : ActivatedRoute){
  }

  ngOnInit(){
    this.route.paramMap.subscribe((res) =>{
      let id = res.get('id');
      this.display.getGroundById(id).subscribe((r) =>{
        this.data = r
        console.log(this.data)
      })
    })
  }

  // constructor(private display: CricketServiceService, private route : ActivatedRoute) {
  //   this.display.Get().subscribe((res : any[])=>{
  //     this.data=res 
  //   })
  // }
  // gid;
  // id;
  // d ;
  // ngOnInit(){
    
  //   this.route.paramMap.subscribe(p =>{
  //      this.gid = Number(p.get('id'));
  //     this.ground = this.data.find((item : any)=>{
  //       item.groundid === this.gid
  //       console.log(item.groundid);
        
  //     })
  //   })
  // }

    // this.route.paramMap.subscribe(params => {
    //   // Extract the 'id' parameter from the paramMap
    //   this.id = +params.get('id');
      
    //   // Use the ID to fetch data from the API
    //  this.ground= this.display.Get().subscribe((ground: any) => {
    //     this.ground.groundid == this.id;
    //   });
    // });
  //}

  // ngOnInit(){
  //   this.getGroundById();
  //   this.id = this.route.snapshot.params['id'];
  //   console.log(this.id)
  // }
  

  // getAllGrounds(){
  //   this.display.Get().subscribe((res ) =>{ this.data = res})
  // }

 // getGroundById(){
    // this.display.Get().subscribe((p) =>{
    //   this.data = p;
    //   let id1 = this.data.findIndex(
    //     (d : {id2 : string}) => d.id2 == this.id
    //   );
    //   if(id1 > -1){
    //     this.d = this.data[id1];
    //     console.log(id1)
    //   }
    // })
  //}

  

  
  
 
    
}

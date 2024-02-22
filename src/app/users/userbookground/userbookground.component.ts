import { Component } from '@angular/core';
import { CricketServiceService } from '../../cricket-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userbookground',
  templateUrl: './userbookground.component.html',
  styleUrl: './userbookground.component.css'
})
export class UserbookgroundComponent {
  ground : any;
  data;
  gprice : any;
  gcom : any;
  comment : any;
  name = localStorage.getItem('name');
  p = localStorage.getItem('mobile');
  desp : any;
  da : any;
  constructor(private display : CricketServiceService, private route : ActivatedRoute, private router : Router){
    this.getAllComments();
  }

  getAllComments() {
    this.display.getComments().subscribe((r) => {
      this.comment = r;
    })
  }
  getGround(){
    this.route.paramMap.subscribe((res) =>{
      let id = res.get('id');
      this.display.getGroundById(id).subscribe((r) =>{
        this.data = r
        console.log(this.data)
      })
    })
  }
  getComments() {
    this.route.paramMap.subscribe((res) => {
      let id = res.get('id');
      this.display.getComments().subscribe((r) => {
        if (id) {
          this.gcom = this.comment.filter(u => { return u.groundid == id })
        } else {

        }
      })
    })
  }

  addComment() {
    console.log("Commented")
    this.route.paramMap.subscribe((res) => {
      let id = res.get('id');
      const date = new Date();
      let d = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()+
      "("+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+")"

      let obj = {
        "des": this.desp,
        "groundid": id,
        "name": this.name,
        "date" : d
      }
      this.display.postComment(obj).subscribe(g => this.getComments())
    })
    this.desp = "";
    this.getComments();
    this.getAllComments();
  }

  ngOnInit(){
    this.getGround();
    this.getComments()

  }

  // ngDocheck(){
  //   this.getGround();
  //   this.getComments();
  //   }

  bookGround(price : any){
    console.log("Click the book button")
    this.gprice = price;
    let bstatus = "paid"
    this.route.paramMap.subscribe((res) => {
      let id = res.get('id');
      let body ={
      "name" : this.name,
      "date" : this.da,
      "price" : this.gprice,
      "mobile" : this.p,
      "groundid" : id,
      "status" : bstatus
    }
    this.display.addBooking(body).subscribe((r) =>{

    })
    this.router.navigate(['/payment'])
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

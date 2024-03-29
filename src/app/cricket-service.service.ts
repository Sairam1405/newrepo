import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricketServiceService {
  api = "http://localhost:3000/Grounds"
  constructor(private hp: HttpClient) {
  }

  Get() {
    return this.hp.get(this.api)
  }

  getGroundById(id: string): Observable<any> {
    return this.hp.get(`${this.api}/${id}`);
  }

  getAllLocations(){
    return this.hp.get('http://localhost:3000/locations')
  }

  getComments(){
    return this.hp.get('http://localhost:3000/comments')
  }

  postComment(body){
    return this.hp.post('http://localhost:3000/comments', body)
  }

  getBookings(){
    return this.hp.get('http://localhost:3000/bookings');
  }

  addBooking(body){
    return this.hp.post('http://localhost:3000/bookings', body);
  }

//////////SIGNUP()/////////////////////////

postRegisterForm(body){
   return this.hp.post("http://localhost:3000/signUpUsers",body)
}



//////////SIGNUP()/////////////////////////




//////////LOGIN()/////////////////////////

getLoginValidation(){
 return this.hp.get("http://localhost:3000/signUpUsers")
}


//////////LOGIN()/////////////////////////


}

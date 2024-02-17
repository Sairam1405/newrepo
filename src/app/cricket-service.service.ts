import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}

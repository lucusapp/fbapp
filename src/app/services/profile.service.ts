import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Profile} from '../interface/profile';
import 'rxjs/Rx';

@Injectable()
export class ProfileService {

profileURL:string = "https://lucusapp-37dfb.firebaseio.com/lucusapp.json"


  constructor(private http:Http) { }

  nuevoProfile(profile:Profile){

    let body = JSON.stringify ( profile );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    return this.http.post (this.profileURL, body, {headers:headers})
      .map(res=>{
        console.log(res.json());
        return res.json()
      })

  }

}

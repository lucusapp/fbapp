import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Profile} from '../interface/profile';
import {FacebService}  from "../services/faceb.service";
import 'rxjs/Rx';

@Injectable()
export class ProfileService {

profileURL:string = "https://lucusapp-37dfb.firebaseio.com/lucusapp.json";
perfilURL:string="https://lucusapp-37dfb.firebaseio.com/lucusapp"


  constructor(private http:Http,
              private _facebService:FacebService) { }

  nuevoProfile(profile:Profile){

    let body = JSON.stringify (profile);

    let headers = new Headers({
      'Content-Type':'application/json'
    });
    return this.http.post (this.profileURL, body, {headers:headers})
      .map(res=>{

        return res.json()
      });

  }

  actualizarProfile(profile:Profile,key$:string){

    let body = JSON.stringify (profile);
  
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${this.perfilURL}/${key$}.json`;
    return this.http.post ( url, body, {headers:headers})
      .map(res=>{

        return res.json()
      });



  }

}

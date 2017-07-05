import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';


@Injectable()
export class FacebService {
  public data:object={};
  clientes:any [] = [];

  urlBusqueda:string = "https://graph.facebook.com/v2.8/";

  constructor( private http:Http) { }

  getClientes(termino:string){

    let query = `${ termino }?fields=id%2Cname%2Cabout%2Cphone%2Ccategory%2Cemails%2Cfeed%7Bfull_picture%2Cname%2Ccreated_time%2Cmessage%2Cstory%2Cdescription%7D%2Cpicture&access_token=EAAEDPIYZCj7MBANx5YsSRhK4fAQ9NVmp1Fds0GDW1PLZCeOHIXpgRQqLUn5PYnUejUkR8IkyzeNOxLP6ZB8kI4rpGVsEHRhGkEk27UgoFzEJdTwDp7hxF6OIQj9fdZBM1P7sRhAxWioWjFxv2k4h9wpBY6EMPnsZD&jsonp`;
    let url = this.urlBusqueda + query;




    return this.http.get( url )
      .map( res =>{

        this.clientes =res.json().feed.data;
          console.log(this.clientes);

          return res.json()
      })

  };

  getCliente( idx:string ){
    return this.clientes[idx];
  }
}

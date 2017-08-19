import { Component, OnInit } from '@angular/core';
import { FacebService} from '../../services/faceb.service';
import { FormGroup, FormControl, Validators, FormArray, NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Profile } from '../../interface/profile';
import { ProfileService} from '../../services/profile.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Http, Headers} from "@angular/http";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2'



@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  providers: [FacebService, ProfileService]
})

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  providers: [FacebService, ProfileService]
})
export class PartnerComponent implements OnInit {

cliente:any={};

urlBusqueda:string= "https://graph.facebook.com/v2.8/";

forma:FormGroup;
public data:any = [];




profile:Profile = {
  nombre:'',
  actividad:'',
  telefono:'',
  email:'',
  key$:'',
  picture:'',
  username:'',
  feed:{
    title:'',
    imagen: '',
    link: '',
    created_time:'',
    id:'',
    description:'',
    }

  }

termino:string = "";
nuevo:boolean=false;
id:string

  constructor(private _facebService:FacebService,
              private _profileService:ProfileService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {

   this.activatedRoute.params
        .subscribe(parametros=>{
          this.id=parametros['id']
          console.log(parametros)
        })

    this.forma = new FormGroup({
      'nombre': new FormControl('',Validators.required),
      'actividad': new FormControl (''),
      'direccion': new FormControl (''),
      'email':  new FormControl (''),
      'phone': new FormControl (''),
      'sector': new FormControl (''),





    })
console.log(this.forma);
}

ngOnInit() {
  this.activatedRoute.params.subscribe(params=>{
    // console.log( params['id'] );
    this.cliente = this._facebService.getCliente(params['id']);
    console.log(this.cliente);

    })

}

    buscarCliente(){
      this._facebService.getClientes( this.termino )
      .subscribe (data=>{
        this.data =(data)
          // console.log (this.data)
        })
};
      cargarDatos(){
        if(this.data.id>0){
          console.log('existe un registro')
          this.forma.patchValue({
            nombre:this.data.name,
            actividad:this.data.about,
            email:this.data.emails[0],
            phone:this.data.phone,
            picture:this.data.picture.data.url,

          })
        }else{
          console.log('no existe un registro')
        }
    };


  enviar(){



    let query = `${ this.termino }?fields=id%2Cname%2Cabout%2Cphone%2Ccategory%2Cusername%2Cemails%2Cfeed%7Bfull_picture%2Cname%2Ccreated_time%2Cmessage%2Cstory%2Cdescription%7D%2Cpicture&access_token=EAAEDPIYZCj7MBANx5YsSRhK4fAQ9NVmp1Fds0GDW1PLZCeOHIXpgRQqLUn5PYnUejUkR8IkyzeNOxLP6ZB8kI4rpGVsEHRhGkEk27UgoFzEJdTwDp7hxF6OIQj9fdZBM1P7sRhAxWioWjFxv2k4h9wpBY6EMPnsZD&jsonp`;
    let url = this.urlBusqueda + query;


fetch(url)

.then(()=>{
  if(this.id == "nuevo"){
    this._profileService.nuevoProfile( this.data )
      .subscribe(data=>{
        this.router.navigate(['partner', data.name])
      },
      error=>console.error())
  }else{
    this._profileService.nuevoProfile( this.data )
      .subscribe(data=>{
        console.log(data)
      },
      error=>console.error())
      }
    })
  }
}

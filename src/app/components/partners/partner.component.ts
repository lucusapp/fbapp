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


  constructor(private _facebService:FacebService,
              private _profileService:ProfileService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {

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
          console.log (this.data)
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
  let envio= new Promise (function(resolve,reject){
        setTimeout(()=>{
          console.log('promesaend')
          resolve();
        },1500)
      })
this._facebService.getClientes( this.termino )
  .subscribe(data=>{
    this.data=data
    console.log(data)
  })


  envio.then(()=>{
    this._profileService.nuevoProfile( this.data )
      .subscribe()
  })
}
}

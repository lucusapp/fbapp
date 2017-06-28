import { Component, OnInit } from '@angular/core';
import { FacebService} from '../../services/faceb.service';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Observable } from 'rxjs/Rx'


@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  providers: [FacebService]
})
export class PartnersComponent implements OnInit {

forma:FormGroup;
public data:any = [];


  termino:string = "";


  constructor(private _facebService:FacebService ) {

    this.forma = new FormGroup({
      'nombre': new FormControl('',Validators.required),
      'actividad': new FormControl (''),
      'direccion': new FormControl (''),
      'email':  new FormControl (''),
      'phone': new FormControl ('')



    })
console.log(this.forma);
}

ngOnInit() {

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
            phone:this.data.phone
          })
        }else{
          console.log('no existe un registro')
        }
    };



    cargar(){
      console.log (this.data);
      console.log (this.forma);


    }

}

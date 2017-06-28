import { Component, OnInit } from '@angular/core';
import { FacebService } from '../../services/faceb.service';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  public data:object={};
  termino:string = "";
  forma:FormGroup


  constructor( private _facebService:FacebService) {


//   this.forma= new FormGroup({
//     'nombre': new FormControl(this.data.name)
// })

}
  ngOnInit() {

}


buscarCliente(){
  this._facebService.getClientes( this.termino )
  .subscribe ( data =>{
    this.data = data
    console.log(this.data)
  })

  }


}

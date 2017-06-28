import { Component} from '@angular/core';
import { FacebService } from '../../../services/faceb.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent  {

  public data:object={};
  termino:string = "";


  constructor( private _facebService:FacebService) { }


buscarCliente(){
  this._facebService.getClientes( this.termino )
  .subscribe ( data =>{
    this.data = data
  })

  }
  }

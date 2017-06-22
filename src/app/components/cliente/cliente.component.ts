import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebService } from '../../services/faceb.service';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
})
export class ClienteComponent implements OnInit {

  cliente:any ={};

  constructor( private activatedRoute: ActivatedRoute,
              private _facebService:FacebService){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      // console.log( params['id'] );
      this.cliente = this._facebService.getCliente(params['id']);
      console.log(this.cliente);

      })


    }
}

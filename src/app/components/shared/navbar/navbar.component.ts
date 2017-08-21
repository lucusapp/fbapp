import { Component, OnInit } from '@angular/core';
import { AuthService }from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent implements OnInit {

  constructor( private auth:AuthService) {
  auth.handleAuthentication();
 }

login(){
  this.auth.login();
}


salir(){
  this.auth.logout();
}





  ngOnInit() {


      }





}

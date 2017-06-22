import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

//servicios
import { FacebService } from './services/faceb.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NamePipe } from './pipes/name.pipe';
import { ClienteComponent } from './components/cliente/cliente.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NamePipe,
    ClienteComponent,




  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
  FacebService],
  bootstrap: [AppComponent]
})
export class AppModule { }

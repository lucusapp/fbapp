import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';



import { APP_ROUTING } from './app.routes';


//servicios
import { FacebService } from './services/faceb.service';
import { ProfileService } from './services/profile.service';
import { AuthService} from './services/auth.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { KeyPipe } from './pipes/key.pipe';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PartnerComponent } from './components/partners/partner.component';
import { PartnersComponent } from './components/partners/partners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    KeyPipe,
    ClienteComponent,
    FooterComponent,
    PartnerComponent,
    PartnersComponent,


  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
  FacebService,
  ProfileService,
  AuthService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { UserListComponent } from './user-list/user-list.component'
import { AppareilService } from './services/appareil/appareil.service';
import { UserService } from './services/user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewUserComponentComponent } from './new-user-component/new-user-component.component';
import { ComptesComponent } from './comptes/comptes.component';
import { CompteService } from './services/compte/compte.service';
import { HttpClientModule } from '@angular/common/http';
import { NewCompteComponent } from './new-compte/new-compte.component';
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    NavbarComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    UserListComponent,
    NewUserComponentComponent,
    ComptesComponent,
    NewCompteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppareilService,
    AuthService,
    UserService,
    CompteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

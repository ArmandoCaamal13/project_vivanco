import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LentesAumentoComponent } from './page/lentes-aumento/lentes-aumento.component';
import { LentesDeSolComponent } from './page/lentes-de-sol/lentes-de-sol.component';
import { AboutComponent } from './page/about/about.component';
import { QuienesSomosComponent } from './page/quienes-somos/quienes-somos.component';
import { ActualizarComponent } from './producto/actualizar/actualizar.component';
import { AumentoComponent } from './producto/aumento/aumento.component';
import { SolComponent } from './producto/sol/sol.component';
import { ListaComponent } from './producto/lista/lista.component';
import { DetallesComponent } from './producto/detalles/detalles.component';
import { RegistroProductoComponent } from './producto/registro-producto/registro-producto.component';



@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    LentesAumentoComponent,
    LentesDeSolComponent,
    AboutComponent,
    QuienesSomosComponent,
    ActualizarComponent,
    AumentoComponent,
    SolComponent,
    ListaComponent,
    DetallesComponent,
    RegistroProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders, 
  {provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { LentesDeSolComponent } from './page/lentes-de-sol/lentes-de-sol.component';
import { LentesAumentoComponent } from './page/lentes-aumento/lentes-aumento.component';
import { QuienesSomosComponent } from './page/quienes-somos/quienes-somos.component';
import { AboutComponent } from './page/about/about.component';

/* productos */
import { ActualizarComponent } from './producto/actualizar/actualizar.component';
import { AumentoComponent } from './producto/aumento/aumento.component';
import { SolComponent } from './producto/sol/sol.component';
import { DetallesComponent } from './producto/detalles/detalles.component';
import { ListaComponent } from './producto/lista/lista.component';
import { RegistroProductoComponent } from './producto/registro-producto/registro-producto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'lentesdesol', component: LentesDeSolComponent},
  { path: 'lentesaumento', component: LentesAumentoComponent},
  { path: 'quienessomos', component: QuienesSomosComponent},
  { path: 'about', component: AboutComponent},
  { path: 'actualizar', component: ActualizarComponent},
  { path: 'aumento', component: AumentoComponent},
  { path: 'detalles', component: DetallesComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'registroproducto', component: RegistroProductoComponent},
  { path: 'sol', component: SolComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

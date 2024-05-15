import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenusComponent } from './menus/menus.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'autenticacion', component: AutenticacionComponent },
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

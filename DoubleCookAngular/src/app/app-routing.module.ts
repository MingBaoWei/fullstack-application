import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenusComponent } from './menus/menus.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component'; // Importa el componente MisReservasComponent
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'autenticacion', component: AutenticacionComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'mis-reservas', component: MisReservasComponent },
  { path: 'publicaciones', component: PublicacionesComponent} // Agrega la nueva ruta para las reservas del usuario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

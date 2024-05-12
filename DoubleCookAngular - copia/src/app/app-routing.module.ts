import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenusComponent } from './menus/menus.component';
import { ReservasComponent } from './reservas/reservas.component';
import { AutenticacionComponent} from './autenticacion/autenticacion.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'autenticacion', component: AutenticacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

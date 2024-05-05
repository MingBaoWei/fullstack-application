// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitasComponent } from './citas/citas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComandasComponent } from './comandas/comandas.component';
import { MenusPlatosComponent } from './menus-platos/menus-platos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReservasComponent } from './reservas/reservas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VentasComponent } from './ventas/ventas.component';


const routes: Routes = [
    { path: 'citas', component: CitasComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'comandas', component: ComandasComponent },
    { path: 'menus-platos', component: MenusPlatosComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'reservas', component: ReservasComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'ventas', component: VentasComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
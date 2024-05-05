import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CitasComponent } from './citas/citas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ComandasComponent } from './comandas/comandas.component';
import { MenusPlatosComponent } from './menus-platos/menus-platos.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ReservasComponent } from './reservas/reservas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VentasComponent } from './ventas/ventas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CitasComponent, ClientesComponent,ComandasComponent,MenusPlatosComponent
    ,RegistrarComponent,ReservasComponent,UsuariosComponent,VentasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto';
}

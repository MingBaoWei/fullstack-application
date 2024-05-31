import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { MenusComponent } from './menus/menus.component';
import { ReservasComponent } from './reservas/reservas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MisReservasComponent } from './mis-reservas/mis-reservas.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    MenusComponent,
    ReservasComponent,
    InicioComponent,
    PerfilComponent,
    MisReservasComponent,
    PublicacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

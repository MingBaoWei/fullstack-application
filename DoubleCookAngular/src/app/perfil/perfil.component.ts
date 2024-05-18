import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  userData: any;

  constructor(private authService: AuthService, private router: Router) {
    this.userData = this.authService.getUserData();
  }

  irAutenticacion() {
    this.router.navigate(['/autenticacion']);
  }

  // Método para cerrar sesión
  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.router.navigate(['/perfil']);
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}

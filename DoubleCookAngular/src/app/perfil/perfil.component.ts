import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  userData: any;
  isEditing: boolean = false;
  isConfirmingPassword: boolean = false; // Para manejar la confirmación de la contraseña
  confirmPassword: string = ''; // Para almacenar la contraseña ingresada para confirmación
  newPassword: string = ''; // Para almacenar la nueva contraseña

  fakeData: any = {
    idUsuario: '123456',
    correo: 'usuario@correo.com',
    contrasena: '******',
    nombre_apellido: 'Nombre Apellidos',
    rol: 'Usuario',
    numero: '123-456-789'
  };

  constructor(private authService: AuthService, private router: Router) {
    this.userData = this.authService.isAuthenticated() ? this.authService.getUserData() : this.fakeData;
  }

  irAutenticacion() {
    this.router.navigate(['/autenticacion']);
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.userData = this.fakeData;
    this.router.navigate(['/inicio']);
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  startEditing(): void {
    this.isConfirmingPassword = true;
  }

  confirmPasswordAndEdit(): void {
    this.authService.confirmPassword(this.confirmPassword).subscribe(response => {
      if (response.success) {
        this.isConfirmingPassword = false;
        this.isEditing = true;
      } else {
        alert('Contraseña incorrecta');
      }
    }, error => {
      console.error(error);
    });
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.isConfirmingPassword = false;
    this.userData = this.authService.isAuthenticated() ? this.authService.getUserData() : this.fakeData;
  }

  actualizarDatos(): void {
    this.authService.actualizarUsuario(this.userData, this.newPassword).subscribe(response => {
      console.log(response.message);
      this.isEditing = false;
    }, error => {
      console.error(error);
    });
  }

  iniciarCambioContrasena(): void {
    this.newPassword = '';
  }
}

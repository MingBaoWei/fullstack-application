import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  menus: any[] = [];
  nuevoMenu: any = {}; // Objeto para almacenar los datos del nuevo menú

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

  constructor(public authService: AuthService, private router: Router, private http: HttpClient) {
    this.userData = this.authService.isAuthenticated() ? this.authService.getUserData() : this.fakeData;
  }

  ngOnInit(): void {
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

  isUserAdmin(): boolean{
    return this.authService.isUserAdmin();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
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

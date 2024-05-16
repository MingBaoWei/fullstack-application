import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent {

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrarUsuario(event: any) {
    event.preventDefault();

    // Obtener los valores del formulario
    const correo = event.target.elements.correo.value;
    const contrasena = event.target.elements.contrasena.value;
    const confirmPass = event.target.elements.confirmPass.value;
    const nombre_apellido = event.target.elements.nombre_apellido.value;
    const rol = 'cliente'; // Asignar directamente el valor 'cliente' al rol
    const numero = event.target.elements.numero.value;

    // Validar que la contraseña y su confirmación sean iguales
    if (contrasena !== confirmPass) {
      this.errorMessage = 'La contraseña y su confirmación no coinciden';
      return; // Detener la ejecución de la función
    }

    // Construir el objeto con los datos del usuario
    const datosUsuario = {
      correo: correo,
      contrasena: contrasena,
      nombre_apellido: nombre_apellido,
      rol: rol,
      numero: numero
    };

    // Llamar al método del servicio para registrar al usuario
    this.authService.registrarUsuario(datosUsuario).subscribe(response => {
      console.log(response);
      // Verificar si el registro fue exitoso antes de redirigir
      if (response && response.message === 'Usuario registrado exitosamente') {
          // Redirigir al perfil después del registro exitoso
          console.log("Redireccionando al perfil");
          this.router.navigate(['/perfil']);
      }
    });
  }

  iniciarSesion(event: any) {
    event.preventDefault();

    // Obtener los valores del formulario
    const correo = event.target.elements.correo.value;
    const contrasena = event.target.elements.contrasena.value;

    // Llamar al método del servicio para iniciar sesión
    this.authService.iniciarSesion(correo, contrasena).subscribe(response => {
      console.log(response);
      // Verificar si el inicio de sesión fue exitoso antes de redirigir
      if (response && response.message === 'Inicio de sesión exitoso') {
          // Redirigir al perfil después del inicio de sesión exitoso
          console.log("Redireccionando al perfil");
          this.router.navigate(['/perfil']);
      }
    });
  }

  showLoginForm: boolean = false;
  showRegisterForm: boolean = false;

  showLogin() {
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  showRegister() {
    this.showLoginForm = false;
    this.showRegisterForm = true;
  }
}

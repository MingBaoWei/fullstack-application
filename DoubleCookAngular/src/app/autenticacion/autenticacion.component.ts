import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {

  userData: any = {};

  constructor(private authService: AuthService) {}

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
      console.log('La contraseña y su confirmación no coinciden');
      return; // Detener la ejecución de la función
    }
  
    // Crear el objeto con los datos del usuario
    const userData = {
      correo: correo,
      contrasena: contrasena,
      nombre_apellido: nombre_apellido,
      rol: rol,
      numero: numero
    };
  
    // Llamar al servicio para registrar al usuario
    console.log('Registrando usuario...');
    this.authService.register(userData).subscribe(
      () => {
        console.log('Usuario registrado correctamente');
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
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

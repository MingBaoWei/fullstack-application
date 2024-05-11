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
    console.log('Registrando usuario...');
    this.authService.register(this.userData).subscribe(
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

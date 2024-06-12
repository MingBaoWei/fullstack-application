import { Component } from '@angular/core';
import { ReservasService } from '../reservas.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  numPersonas: number = 0;
  fecha_hora: string = '';
  numMesa: number = 0;
  errorMessage: string = '';

  constructor(private router: Router, private reservasService: ReservasService, private authService: AuthService) { }

  verReservas(): void {
    if (!this.authService.isAuthenticated()) {
      alert('Por favor, inicia sesión para ver tus reservas.');
      return;
    }
    this.router.navigate(['/mis-reservas']);
  }

  registrarReserva(): void {

    if (!this.authService.isAuthenticated()) {
      this.errorMessage = 'Debes iniciar sesión para realizar una reserva o ver tus reservas';
      return;
    }

    const usuarioId = this.authService.getUserData().idUsuario;
    
    if (usuarioId) {
      this.reservasService.registrarReserva(this.numPersonas, this.fecha_hora, this.numMesa, usuarioId).subscribe(
        response => {
          alert(response.message);
        },
        error => {
          console.error(error);
          alert('Error al registrar la reserva, asegúrate de tener los campos obligatorios rellenados (Número de personas y la Fecha y hora)');
        }
      );
    } else {
      alert('Usuario no autenticado');
    }
  }
}

import { Component } from '@angular/core';
import { ReservasService } from '../reservas.service';
import { AuthService } from '../auth.service'; // Asegúrate de tener el AuthService para obtener el id del usuario

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

  constructor(private reservasService: ReservasService, private authService: AuthService) { }

  registrarReserva(): void {

    if (!this.authService.isAuthenticated()) {
      // Si el usuario no está autenticado, mostrar un mensaje de error y salir de la función
      this.errorMessage = 'Debes iniciar sesión para realizar una reserva.';
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

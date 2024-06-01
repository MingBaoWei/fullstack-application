import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { ReservasService } from '../reservas.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {
  
  reservas: any[] = [];
  fechaFiltro: string = '';
  idReservaEditando: number | null = null; // Variable para almacenar el ID de la reserva que se está editando

  constructor(private http: HttpClient, public authService: AuthService, private reservasService: ReservasService) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas() {
    const usuarioId = this.authService.getUserData().idUsuario;
    this.reservasService.obtenerReservasFiltradas(usuarioId, '').subscribe(
      data => {
        this.reservas = data;
      },
      error => {
        console.error(error);
        // Manejo de errores
      }
    );
  }

  filtrarReservas() {
    const usuarioId = this.authService.getUserData().idUsuario;
    this.reservasService.obtenerReservasFiltradas(usuarioId, this.fechaFiltro).subscribe(
      data => {
        this.reservas = data;
      },
      error => {
        console.error(error);
        // Manejo de errores
      }
    );
  }

  editarReserva(idReserva: number) {
    this.idReservaEditando = idReserva;
  }

  cancelarEdicion() {
    this.idReservaEditando = null;
    this.cargarReservas(); // Para resetear cualquier cambio no guardado
  }

  actualizarReserva(reserva: any) {
    this.reservasService.editarReserva(reserva.idReserva, reserva).subscribe(
      response => {
        alert('Reserva actualizada exitosamente');
        this.idReservaEditando = null;
        this.cargarReservas();
      },
      error => {
        console.error(error);
        alert('Error al actualizar la reserva, asegúrate de que todos los campos sean rellenados correctamente.');
      }
    );
  }

  eliminarReserva(idReserva: number) {
    if (confirm('¿Estás seguro de que deseas eliminar esta reserva?')) {
      this.reservasService.eliminarReserva(idReserva).subscribe(
        response => {
          alert('Reserva eliminada exitosamente');
          this.cargarReservas();
        },
        error => {
          console.error(error);
          alert('Error al eliminar la reserva');
        }
      );
    }
  }
}

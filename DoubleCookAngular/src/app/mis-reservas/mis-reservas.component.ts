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

  constructor(private http: HttpClient, public authService: AuthService, private reservasService: ReservasService) { }

  ngOnInit(): void {
    const usuarioId = this.authService.getUserData().idUsuario;
    this.reservasService.obtenerReservasFiltradas(usuarioId, '').subscribe( // Utiliza el servicio de reservas para obtener las reservas filtradas
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
    this.reservasService.obtenerReservasFiltradas(usuarioId, this.fechaFiltro).subscribe( // Utiliza el servicio de reservas para obtener las reservas filtradas
      data => {
        this.reservas = data;
      },
      error => {
        console.error(error);
        // Manejo de errores
      }
    );
  }

}

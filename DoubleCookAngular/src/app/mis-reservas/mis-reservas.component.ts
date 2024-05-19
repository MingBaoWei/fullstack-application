import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.component.html',
  styleUrls: ['./mis-reservas.component.css']
})
export class MisReservasComponent implements OnInit {

  reservas: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    const usuarioId = this.authService.getUserData().idUsuario;
    this.http.get<any[]>(`http://localhost:3000/api/reservas?usuarioId=${usuarioId}`).subscribe(
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

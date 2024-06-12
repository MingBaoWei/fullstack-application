import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  registrarReserva(numPersonas: number, fecha_hora: string, numMesa: number, usuarioId: number): Observable<any> {
    const reservaData = { numPersonas, fecha_hora, numMesa, usuarioId };
    return this.http.post<any>(`${this.apiUrl}/reservar`, reservaData);
  }

  obtenerReservasFiltradas(usuarioId: number, fecha: string): Observable<any[]> {
    const filtro = { usuarioId: usuarioId.toString(), fecha: fecha };
    return this.http.get<any[]>(`${this.apiUrl}/reservas`, { params: filtro });
  }

  eliminarReserva(idReserva: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservas/${idReserva}`);
  }

  editarReserva(idReserva: number, reserva: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/reservas/${idReserva}`, reserva);
  }
}

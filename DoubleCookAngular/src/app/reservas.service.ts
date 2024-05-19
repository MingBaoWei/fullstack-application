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
}

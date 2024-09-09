import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  private apiUrl = 'https://doublecook-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) { }

  crearPublicacion(titulo: string, publicacion: string, usuarioId: number): Observable<any>{
    const publicacionesData = {titulo,publicacion,usuarioId};
    return this.http.post<any>(`${this.apiUrl}/publicaciones`,publicacionesData);
  }

  obtenerPublicaciones(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/publicaciones`);
  }

  /*
  obtenerPublicaciones(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/publicaciones');
  }
  /*
  crearPublicacion(nuevaPublicacion: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/publicaciones', nuevaPublicacion);
  }*/

}

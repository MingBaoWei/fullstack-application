import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private apiUrl = 'https://doublecook-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) { }

  publicarComentario(titulo: string, comentario: string, estrellas: number, usuarioId: number): Observable<any> {
    const comentarioData = { titulo, comentario, estrellas, usuarioId };
    return this.http.post<any>(`${this.apiUrl}/comentarios`, comentarioData);
  }

  obtenerComentarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/comentarios`);
  }
}

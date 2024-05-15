import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/usuarios', datosUsuario);
  }
}

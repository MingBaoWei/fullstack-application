import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/register', datosUsuario);
  }

  iniciarSesion(correo: string, contrasena: string) {
    // Crear un objeto con los datos del usuario
    const datosInicioSesion = { correo: correo, contrasena: contrasena };

    return this.http.post<any>('http://localhost:3000/api/iniciar-sesion', datosInicioSesion);
  }
}
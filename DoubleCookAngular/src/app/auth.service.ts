import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registrarUsuario(datosUsuario: any) {
    return this.http.post<any>('http://localhost:3000/api/usuarios', datosUsuario);
  }
}

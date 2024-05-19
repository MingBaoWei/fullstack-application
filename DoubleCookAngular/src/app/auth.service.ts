import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isLoggedIn: boolean = false;
  private userData: any = null;

  constructor(private http: HttpClient) { }

  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/register', datosUsuario);
  }

  iniciarSesion(correo: string, contrasena: string): Observable<any> {
    const datosInicioSesion = { correo: correo, contrasena: contrasena };
    return this.http.post<any>('http://localhost:3000/api/iniciar-sesion', datosInicioSesion).pipe(
      tap(response => {
        if (response && response.message === 'Inicio de sesión exitoso') {
          this.isLoggedIn = true;
          this.userData = response.user; // Almacena los datos del usuario
        }
      })
    );
  }

  getUserData(): any {
    return this.userData;
  }

  actualizarUsuario(datosUsuario: any, newPassword: string): Observable<any> {
    const dataToSend = { ...datosUsuario, newPassword };
    return this.http.put<any>('http://localhost:3000/api/update-user', dataToSend).pipe(
      tap(response => {
        if (response && response.message === 'Datos actualizados correctamente') {
          this.userData = datosUsuario; // Actualiza los datos del usuario localmente
        }
      })
    );
  }

  confirmPassword(password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/confirm-password', { idUsuario: this.userData.idUsuario, password });
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  cerrarSesion(): void {
    this.isLoggedIn = false;
    this.userData = null;
  }
}

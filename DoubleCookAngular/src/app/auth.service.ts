import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

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

  iniciarSesion(correo: string, contrasena: string) {
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

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Método para cerrar sesión y actualizar el estado de isLoggedIn
  cerrarSesion(): void {
    this.isLoggedIn = false;
  }
}

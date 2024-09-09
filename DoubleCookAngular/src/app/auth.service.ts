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
  private userDataAdmin: any = 'admin';

  constructor(private http: HttpClient) { }

  registrarUsuario(datosUsuario: any): Observable<any> {
    return this.http.post<any>('https://doublecook-backend-production.up.railway.app/api/register', datosUsuario);
  }

  iniciarSesion(correo: string, contrasena: string): Observable<any> {
    const datosInicioSesion = { correo: correo, contrasena: contrasena };
    return this.http.post<any>('https://doublecook-backend-production.up.railway.app/api/iniciar-sesion', datosInicioSesion).pipe(
      tap(response => {
        if (response && response.message === 'Inicio de sesión exitoso') {
          this.isLoggedIn = true;
          this.userData = response.user; 
        }
      })
    );
  }

  getUserData(): any {
    return this.userData;
  }
  getUserDataAdmin(): any {
    return this.userDataAdmin;
  }

  actualizarUsuario(datosUsuario: any, newPassword: string): Observable<any> {
    const dataToSend = { ...datosUsuario, newPassword };
    return this.http.put<any>('https://doublecook-backend-production.up.railway.app/api/update-user', dataToSend).pipe(
      tap(response => {
        if (response && response.message === 'Datos actualizados correctamente') {
          this.userData = datosUsuario;
        }
      })
    );
  }

  confirmPassword(password: string): Observable<any> {
    return this.http.post<any>('https://doublecook-backend-production.up.railway.app/api/confirm-password', { idUsuario: this.userData.idUsuario, password });
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  cerrarSesion(): void {
    this.isLoggedIn = false;
    this.userData = null;
  }

  isUserAdmin(): boolean {
    return this.userData && this.userData.rol === 'admin';
  }
  
  isAdmin(): boolean {
    const userData = this.getUserData();
    return userData && userData.rol === 'admin';
  }
  
  
}

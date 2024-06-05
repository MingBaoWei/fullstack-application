import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuCategoriaServiceService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //private Data: any = null;

  obtenerMenus(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/menus');
  }

  crearMenu(nombre: string, precio: number, descripcion: string, img: string, categoria: string): Observable<any>{
    const menuData={nombre,precio,descripcion,img,categoria};
    return this.http.post<any>(`${this.apiUrl}/menus`,menuData);
  } 
/*
  getData(): any {
    return this.Data;
  }*/
}

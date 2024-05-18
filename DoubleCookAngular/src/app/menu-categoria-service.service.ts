import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuCategoriaServiceService {
  constructor(private http: HttpClient) { }

  private Data: any = null;

  obtenerMenus(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/menus');
  }

  getData(): any {
    return this.Data;
  }
}

import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent implements OnInit {
  menus: any[] = [];
  platos: any[] = [];
  categorias: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obtenerMenus();
    this.obtenerCategorias();
  }

  obtenerMenus(): void {
    this.http.get<any[]>('/api/menus').subscribe(
      (response) => {
        this.menus = response;
      },
      (error) => {
        console.error('Error al obtener los menús:', error);
      }
    );
  }

  obtenerPlatos(menuId: number): void {
    this.http.get<any[]>(`/api/menu/${menuId}/platos`).subscribe(
      (response) => {
        this.platos = response;
      },
      (error) => {
        console.error('Error al obtener los platos del menú:', error);
      }
    );
  }

  obtenerCategorias(): void {
    this.http.get<string[]>('/api/categorias').subscribe(
      (response) => {
        this.categorias = response;
      },
      (error) => {
        console.error('Error al obtener las categorías de platos:', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicacionesService } from '../publicaciones.service';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit{

  publicaciones: any[] = [];
  nuevaPublicacion: any = {};

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones(): void {
    this.publicacionesService.obtenerPublicaciones().subscribe(
      (response) => {
        this.publicaciones = response;
      },
      (error) => {
        console.error('Error al obtener las publicaciones:', error);
      }
    );
  }

  crearPublicacion(): void {
    this.publicacionesService.crearPublicacion(this.nuevaPublicacion).subscribe(
      (response) => {
        console.log('Publicación creada exitosamente:', response);
        this.obtenerPublicaciones(); // Actualizar la lista de publicaciones solo si se crea correctamente
        this.nuevaPublicacion = {}; // Limpiar el objeto de nuevaPublicacion
      },
      (error) => {
        console.error('Error al crear la publicación:', error);
      }
    );
  }

}

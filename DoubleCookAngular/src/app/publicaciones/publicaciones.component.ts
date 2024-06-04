import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicacionesService } from '../publicaciones.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit{
  titulo: string = '';
  publicacion: string = '';
  errorMessage: string = '';
  publicaciones: any[] = [];
  nuevaPublicacion: any = {};
  isAdmin: boolean = false;

  constructor(private publicacionesService: PublicacionesService,private authService: AuthService) {
   }

   
  ngOnInit(): void {
    this.obtenerPublicaciones();
    this.isAdmin=this.authService.isUserAdmin();
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
    if (!this.authService.isAuthenticated()) {
      this.errorMessage = 'Debes iniciar sesión para crear una publicación';
      return;
    }

    if (!this.isAdmin) {
      this.errorMessage = 'Solo los administradores pueden crear publicaciones';
      return;
    }

    const userData = this.authService.getUserData();
    if (userData) {
      const usuarioId = userData.idUsuario;
      this.publicacionesService.crearPublicacion(this.titulo, this.publicacion, usuarioId).subscribe(
        response => {
          alert(response.message)
          this.titulo = '';
          this.publicacion = '';
        },
        error => {
          console.error(error);
          alert('Error al publicar la publicación');
        }
      );
    } else {
      alert('Error: No se pudo obtener la información del usuario');
    }
  }


}

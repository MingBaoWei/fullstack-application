import { Component } from '@angular/core';
import { ComentariosService } from '../comentarios.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  titulo: string = '';
  comentario: string = '';
  estrellas: number = 0;
  errorMessage: string = '';

  constructor(private router: Router, private comentariosService: ComentariosService, private authService: AuthService) { }

  verComentarios(): void {
    this.router.navigate(['/ver-comentarios']);
  }

  publicarComentario(): void {

    if (!this.authService.isAuthenticated()) {
      this.errorMessage = 'Debes iniciar sesión para publicar un comentario';
      return;
    }

    const usuarioId = this.authService.getUserData().idUsuario;
    
    if (usuarioId) {
      this.comentariosService.publicarComentario(this.titulo, this.comentario, this.estrellas, usuarioId).subscribe(
        response => {
          alert(response.message);
          // Limpiar campos después de publicar el comentario
          this.titulo = '';
          this.comentario = '';
          this.estrellas = 0;
        },
        error => {
          console.error(error);
          alert('Error al publicar el comentario, asegúrate de tener los campos obligatorios rellenados (Título, Comentario y Estrellas)');
        }
      );
    } else {
      alert('Usuario no autenticado');
    }
  }
}

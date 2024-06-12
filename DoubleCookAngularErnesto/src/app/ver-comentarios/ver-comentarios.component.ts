import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../comentarios.service';

@Component({
  selector: 'app-ver-comentarios',
  templateUrl: './ver-comentarios.component.html',
  styleUrls: ['./ver-comentarios.component.css']
})
export class VerComentariosComponent implements OnInit {
  comentarios: any[] = [];

  constructor(private comentariosService: ComentariosService) { }

  ngOnInit(): void {
    this.obtenerComentarios();
  }

  obtenerComentarios(): void {
    this.comentariosService.obtenerComentarios().subscribe(
      (data: any[]) => {
        this.comentarios = data;
      },
      error => {
        console.error(error);

      }
    );
  }
}

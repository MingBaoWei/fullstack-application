import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'DoubleCook';
  constructor() { }

  ngOnInit(): void {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle?.addEventListener('click', () => {
      nav?.classList.toggle('active');
    });
  }
}

import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { EMPRESA } from '../constants';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class Home implements OnInit, OnDestroy {
  empresa: string = EMPRESA;

  encabezadoActivo: boolean = false;

  @HostListener('window:scroll')
  detectarDesplazamiento(): void {
    this.encabezadoActivo = window.scrollY > 50;
  }

  imagenesMenu: { src: string; alt: string }[] = [
    { src: '/menu/m1.jpeg', alt: 'Plato del menú 1' },
    { src: '/menu/m2.jpeg', alt: 'Plato del menú 2' },
    { src: '/menu/m3.jpeg', alt: 'Plato del menú 3' },
    { src: '/menu/m4.jpeg', alt: 'Plato del menú 4' },
    { src: '/menu/m5.jpeg', alt: 'Plato del menú 5' },
    { src: '/menu/m6.jpeg', alt: 'Plato del menú 6' },
    { src: '/menu/m7.jpeg', alt: 'Plato del menú 7' },
  ];

  indiceActual: number = 0;
  private autoplayId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.iniciarAutoplay();
  }
  ngOnDestroy(): void {
    this.detenerAutoplay();
  }
  irAImagen(indice: number): void {
    this.indiceActual = indice;
    this.reiniciarAutoplay();
  }
  siguienteImagen(): void {
    this.avanzarImagen();
    this.reiniciarAutoplay();
  }

  imagenAnterior(): void {
    this.indiceActual =
      (this.indiceActual - 1 + this.imagenesMenu.length) %
      this.imagenesMenu.length;

    this.reiniciarAutoplay();
  }

  private avanzarImagen(): void {
    this.indiceActual =
      (this.indiceActual + 1) % this.imagenesMenu.length;
  }

  private iniciarAutoplay(): void {
    this.autoplayId = setInterval(() => {
      this.avanzarImagen();
    }, 4000);
  }
  private detenerAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
  }
  private reiniciarAutoplay(): void {
    this.detenerAutoplay();
    this.iniciarAutoplay();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  fechaActual: string;
  horaActual: string;

  constructor() {
    // Inicializa las propiedades en el constructor
    const fecha = new Date();
    this.fechaActual = fecha.toLocaleDateString();
    this.horaActual = fecha.toLocaleTimeString();
  }

  ngOnInit() {}
}

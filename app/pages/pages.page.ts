import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage {
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  register() {
    if (this.password === this.confirmPassword) {
      // Las contraseñas coinciden, redirige a la página de inicio
      this.router.navigate(['/inicio']); // Asegúrate de que la ruta sea correcta.
    } else {
      // Las contraseñas no coinciden, muestra un mensaje de error o toma alguna otra acción apropiada.
      console.error('Las contraseñas no coinciden');
    }
  }
}

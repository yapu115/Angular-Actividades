import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  edadUno: number | null = null;
  edadDos: number | null = null;

  edadesSumadas: number | null = null;

  SumarEdades() {
    if (this.edadUno != null && this.edadDos != null)
      this.edadesSumadas = this.edadUno + this.edadDos;
  }

  LimpiarCuadros() {
    this.edadUno = null;
    this.edadDos = null;
    this.edadesSumadas = null;
  }
}

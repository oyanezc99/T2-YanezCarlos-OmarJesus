import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-pregunta-dos',
  standalone: true,
  imports: [MatCardModule, FormsModule, MatInputModule, CommonModule],
  templateUrl: './pregunta-dos.component.html',
  styleUrl: './pregunta-dos.component.css',
})
export class PreguntaDosComponent {
  salarioMensual = 0;
  anosTrabajados = 0;
  utilidades = 0;

  calcularUtilidades(): void {
    if (this.salarioMensual && this.anosTrabajados) {
      if (this.anosTrabajados < 1) {
        this.utilidades = this.salarioMensual * 0.05;
      } else if (this.anosTrabajados >= 1 && this.anosTrabajados < 2) {
        this.utilidades = this.salarioMensual * 0.07;
      } else if (this.anosTrabajados >= 2 && this.anosTrabajados < 5) {
        this.utilidades = this.salarioMensual * 0.10;
      } else if (this.anosTrabajados >= 5 && this.anosTrabajados < 10) {
        this.utilidades = this.salarioMensual * 0.15;
      } else {
        this.utilidades = this.salarioMensual * 0.20;
      }
    } else {
      this.utilidades = 0; // Si falta algún dato, las utilidades se establecen en undefined
    }
  }
}

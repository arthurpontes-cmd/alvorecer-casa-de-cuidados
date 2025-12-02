import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-prescricao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './prescricao.html',
  styleUrl: './prescricao.scss'
})
export class Prescricao {
  
  pacientes = [
    'Maria Silva Santos',
    'João Pedro Oliveira',
    'Antônio Carlos',
    'Lúcia Ferreira',
    'Roberto Mendes'
  ];

  pacienteSelecionado: string = '';
  medicamento: string = 'Morfina 10mg';
  via: string = 'Intravenosa';
  posologia: string = '';

  constructor(private router: Router) {}

 imprimir() {
    if (this.pacienteSelecionado && this.posologia) {
      setTimeout(() => {
        window.print();
      }, 500);
    } else {
      alert('Por favor, selecione o paciente e escreva a posologia.');
    }
  }
}
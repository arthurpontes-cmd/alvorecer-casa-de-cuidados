import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './consultas.html',
  styleUrl: './consultas.scss'
})
export class Consultas {

  dataHoje = new Date().toLocaleDateString('pt-BR');

  listaConsultas = [
    { hora: '08:30', paciente: 'João Pedro Oliveira', leito: '102', tipo: 'Avaliação Respiratória', concluida: true },
    { hora: '10:00', paciente: 'Maria Silva Santos', leito: '104', tipo: 'Avaliação de Dor', concluida: false },
    { hora: '11:30', paciente: 'Antônio Carlos', leito: '101', tipo: 'Ajuste de Sedação', concluida: false },
    { hora: '14:00', paciente: 'Lúcia Ferreira', leito: '105', tipo: 'Rotina Médica', concluida: false },
    { hora: '16:00', paciente: 'Roberto Mendes', leito: '103', tipo: 'Avaliação Pós-Diálise', concluida: false }
  ];

  concluirConsulta(consulta: any) {
    consulta.concluida = true;
  }

  contarConcluidas() {
    return this.listaConsultas.filter(c => c.concluida).length;
  }
}
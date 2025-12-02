import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.scss'
})
export class Pacientes {

  listaPacientes = [
    { 
      id: 1,
      nome: 'Maria Silva Santos', 
      idade: 78, 
      quarto: '104', 
      diagnostico: 'CA Pulmão', 
      status: 'Estável', 
      observacao: 'Paciente aceitou bem o café da manhã. Queixa-se de leve dor lombar.' 
    },
    { 
      id: 2,
      nome: 'João Pedro Oliveira', 
      idade: 82, 
      quarto: '102', 
      diagnostico: 'Insuficiência Cardíaca', 
      status: 'Atenção', 
      observacao: 'Apresentou dispneia durante a noite. Saturação 92%.' 
    },
    { 
      id: 3,
      nome: 'Antônio Carlos', 
      idade: 65, 
      quarto: '101', 
      diagnostico: 'ELA', 
      status: 'Crítico', 
      observacao: 'Sedado. Família solicitou visita pastoral.' 
    },
    { 
      id: 4,
      nome: 'Lúcia Ferreira', 
      idade: 91, 
      quarto: '105', 
      diagnostico: 'Alzheimer', 
      status: 'Estável', 
      observacao: 'Passou o dia calma, interagindo com a equipe de música.' 
    },
    { 
      id: 5,
      nome: 'Roberto Mendes', 
      idade: 59, 
      quarto: '103', 
      diagnostico: 'Renal Crônico', 
      status: 'Atenção', 
      observacao: 'Aguarda sessão de diálise. Pressão arterial elevada.' 
    }
  ];
}
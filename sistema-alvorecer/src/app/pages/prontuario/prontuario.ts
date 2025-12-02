import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-prontuario',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './prontuario.html',
  styleUrl: './prontuario.scss'
})
export class Prontuario implements OnInit {


  paciente: any = {}; 

  abaAtual: string = 'evolucao';
  statusPaciente: string = ''; 
  corStatus: string = '';
  novaEvolucaoTexto: string = '';

  bancoDeDados = [
    {
      id: 1,
      nome: 'Maria Silva Santos',
      idade: 78,
      quarto: '104',
      diagnostico: 'CA Pulmão Estágio IV',
      sanguineo: 'O+',
      alergias: ['Dipirona', 'Iodo'],
      status: 'Estável',
      historicoEvolucao: [
        { hora: '14:30', titulo: 'Banho de Leito', responsavel: 'Enf. Carla', desc: 'Paciente colaborativa.' },
        { hora: '12:00', titulo: 'Almoço', responsavel: 'Nutri. Ana', desc: 'Aceitou 80% da dieta.' }
      ]
    },
    {
      id: 2,
      nome: 'João Pedro Oliveira',
      idade: 82,
      quarto: '102',
      diagnostico: 'Insuficiência Cardíaca',
      sanguineo: 'A-',
      alergias: ['Nenhuma'],
      status: 'Atenção',
      historicoEvolucao: [
        { hora: '10:00', titulo: 'Dispneia', responsavel: 'Dr. João', desc: 'Saturação baixou para 88%.' }
      ]
    },
    {
      id: 3,
      nome: 'Antônio Carlos',
      idade: 65,
      quarto: '101',
      diagnostico: 'ELA (Esclerose Lateral)',
      sanguineo: 'B+',
      alergias: ['Penicilina'],
      status: 'Crítico',
      historicoEvolucao: [
        { hora: '08:00', titulo: 'Sedação', responsavel: 'Dr. João', desc: 'Aumentada dose de morfina.' }
      ]
    },
  {
      id: 4,
      nome: 'Lúcia Ferreira',
      idade: 91,
      quarto: '105',
      diagnostico: 'Alzheimer Avançado',
      sanguineo: 'AB+',
      alergias: ['Lactose'],
      status: 'Estável',
      historicoEvolucao: [
        { hora: '09:00', titulo: 'Musicoterapia', responsavel: 'Terap. Lucas', desc: 'Reagiu sorrindo às músicas antigas.' },
        { hora: '07:30', titulo: 'Café da Manhã', responsavel: 'Nutri. Ana', desc: 'Aceitou bem a dieta.' }
      ]
    },
    {
      id: 5,
      nome: 'Roberto Mendes',
      idade: 59,
      quarto: '103',
      diagnostico: 'Insuficiência Renal Crônica',
      sanguineo: 'O-',
      alergias: ['Camarão', 'AAS'],
      status: 'Atenção',
      historicoEvolucao: [
        { hora: '13:00', titulo: 'Hemodiálise', responsavel: 'Enf. Pedro', desc: 'Sessão iniciada sem intercorrências.' },
        { hora: '11:00', titulo: 'Aferição PA', responsavel: 'Téc. Maria', desc: 'PA elevada (160/100). Comunicado ao médico.' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    const idUrl = Number(this.route.snapshot.paramMap.get('id'));

    const pacienteEncontrado = this.bancoDeDados.find(p => p.id === idUrl);

    this.paciente = pacienteEncontrado || this.bancoDeDados[0];
    
    this.statusPaciente = this.paciente.status;
    this.definirCorStatus();
  }

  definirCorStatus() {
    if (this.statusPaciente === 'Estável') this.corStatus = 'bg-success';
    else if (this.statusPaciente === 'Atenção') this.corStatus = 'bg-warning text-dark';
    else if (this.statusPaciente === 'Crítico') this.corStatus = 'bg-danger';
    else this.corStatus = 'bg-secondary';
  }

  
  trocarAba(novaAba: string) { this.abaAtual = novaAba; }

  salvarEvolucao() {
    if (this.novaEvolucaoTexto.trim()) {
      const agora = new Date();
      const hora = agora.getHours() + ':' + agora.getMinutes().toString().padStart(2, '0');
      

      if (!this.paciente.historicoEvolucao) {
        this.paciente.historicoEvolucao = [];
      }

      this.paciente.historicoEvolucao.unshift({
        hora: hora,
        titulo: 'Nova Anotação',
        responsavel: 'Você',
        desc: this.novaEvolucaoTexto
      });
      this.novaEvolucaoTexto = '';
    }
  }

  contatarFamilia() {
    alert('Ligando para o responsável cadastrado...');
  }

  registrarObito() {
    if(confirm('Confirmar óbito?')) {
      this.statusPaciente = 'Óbito Confirmado';
      this.corStatus = 'bg-dark';
    }
  }
}
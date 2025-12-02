import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cuidados',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cuidados.html',
  styleUrl: './cuidados.scss'
})
export class Cuidados {

  listaCuidados = [
    {
      paciente: 'Antônio Carlos',
      leito: '101',
      tipo: 'Sedação Paliativa Contínua',
      inicio: 'Hoje, 08:00',
      instrucao: 'Monitorar nível de consciência (RASS -4/-5). Manter infusão de Midazolam em bomba contínua. Aspirar vias aéreas s/n.',
      responsavel: 'Dr. João Silva'
    },
    {
      paciente: 'Maria Silva Santos',
      leito: '104',
      tipo: 'Curativo Complexo (Úlcera Sacra)',
      inicio: 'Ontem',
      instrucao: 'Troca de curativo a cada 12h. Usar placa de hidrocoloide. Atentar para sinais de infecção ou exsudato excessivo.',
      responsavel: 'Enf. Carla'
    },
    {
      paciente: 'Roberto Mendes',
      leito: '103',
      tipo: 'Hemodiálise à Beira Leito',
      inicio: 'Hoje, 13:00',
      instrucao: 'Monitorar PA a cada 15 min durante a sessão. Risco de hipotensão severa. Manter acesso vascular pérvio.',
      responsavel: 'Enf. Pedro'
    }
  ];

  registrarChecagem(nome: string) {
    const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    alert(`Checagem de protocolo para ${nome} realizada com sucesso às ${hora}.\nDados salvos no prontuário.`);
  }
}
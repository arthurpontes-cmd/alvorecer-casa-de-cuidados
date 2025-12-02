import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './estoque.html',
  styleUrl: './estoque.scss'
})
export class Estoque {

  termoBusca: string = '';

  listaCompleta = [
    {
      nome: 'Morfina 10mg',
      categoria: 'Controlado',
      descricao: 'Ampolas para alívio de dor severa.',
      qtd: 15, 
      nivel: 'Baixo',
      validade: '12/2026'
    },
    {
      nome: 'Dipirona 500mg',
      categoria: 'Geral',
      descricao: 'Comprimidos para febre e dor leve.',
      qtd: 85, 
      nivel: 'Alto',
      validade: '05/2025'
    },
    {
      nome: 'Fralda Geriátrica G',
      categoria: 'Higiene',
      descricao: 'Pacote com 30 unidades.',
      qtd: 42, 
      nivel: 'Médio',
      validade: 'Indeterminada'
    },
    {
      nome: 'Cilindro O2',
      categoria: 'Equipamento',
      descricao: 'Cilindros portáteis cheios.',
      qtd: 8, 
      nivel: 'Baixo',
      validade: 'Recarga 10/12'
    },
    {
      nome: 'Soro Fisiológico 0.9%',
      categoria: 'Hidratação',
      descricao: 'Frascos de 500ml.',
      qtd: 60,
      nivel: 'Alto',
      validade: '08/2026'
    }
  ];
  

  listaFiltrada = [...this.listaCompleta];


  filtrar() {
    const termo = this.termoBusca.toLowerCase();
    
    this.listaFiltrada = this.listaCompleta.filter(item => 
      item.nome.toLowerCase().includes(termo) || 
      item.categoria.toLowerCase().includes(termo)
    );
  }

  alterarValidade(item: any) {
    const novaValidade = prompt(`Digite a nova validade para ${item.nome}:`, item.validade);
    
    if (novaValidade) {
      item.validade = novaValidade;
    }
  }
}
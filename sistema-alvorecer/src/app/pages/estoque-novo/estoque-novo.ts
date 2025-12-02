import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-estoque-novo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './estoque-novo.html',
  styleUrl: './estoque-novo.scss'
})
export class EstoqueNovo {
  
  nome: string = '';
  categoria: string = 'Geral';
  qtd: number | null = null;
  meta: number = 100;
  validade: string = '';
  descricao: string = '';

  constructor(private router: Router) {}

  salvar() {
    if (this.nome && this.qtd) {
      alert(`O item "${this.nome}" foi adicionado ao estoque com sucesso!`);
      this.router.navigate(['/estoque']);
    } else {
      alert('Por favor, preencha o Nome e a Quantidade.');
    }
  }
}
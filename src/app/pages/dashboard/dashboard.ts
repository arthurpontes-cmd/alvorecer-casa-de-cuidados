import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  
  menuAberto: boolean = false;
  
  modalPlantaoAberto: boolean = false;
  textoPlantao: string = '';
  ultimaAtualizacao: string = '';

  constructor(private router: Router) {}

  ngOnInit() {

    const salvo = localStorage.getItem('notaPlantao');
    const data = localStorage.getItem('dataPlantao');
    
    if (salvo) this.textoPlantao = salvo;
    if (data) this.ultimaAtualizacao = data;
  }

  toggleMenu() { 
    this.menuAberto = !this.menuAberto; 
  }

  logout() {
    if(confirm('Deseja realmente sair do sistema?')) {
      this.menuAberto = false;
      this.router.navigate(['/login']);
    }
  }


  abrirPlantao() { this.modalPlantaoAberto = true; }
  fecharPlantao() { this.modalPlantaoAberto = false; }

  salvarPlantao() {

    localStorage.setItem('notaPlantao', this.textoPlantao);
    
    const agora = new Date().toLocaleString('pt-BR');
    localStorage.setItem('dataPlantao', agora);
    this.ultimaAtualizacao = agora;

    alert('Passagem de plantão registrada com sucesso!');
    this.fecharPlantao();
  }
}
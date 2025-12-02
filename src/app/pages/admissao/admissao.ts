import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-admissao',
  standalone: true,
  imports: [FormsModule, RouterModule], 
  templateUrl: './admissao.html',
  styleUrl: './admissao.scss'
})
export class Admissao {
  nome: string = '';
  idade: string = '';
  quarto: string = '';
  diagnostico: string = '';
  status: string = 'Estável';
  obs: string = '';

  constructor(private router: Router) {}

  salvar() {
    if (this.nome && this.quarto) {
      alert('Paciente ' + this.nome + ' cadastrado com sucesso!');
      this.router.navigate(['/pacientes']);
    } else {
      alert('Por favor, preencha pelo menos o Nome e o Quarto.');
    }
  }
}
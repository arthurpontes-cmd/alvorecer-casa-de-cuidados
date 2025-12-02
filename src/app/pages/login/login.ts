import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  entrar() {
   if (this.email && this.senha) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Preencha os campos!');
    }
  }
}
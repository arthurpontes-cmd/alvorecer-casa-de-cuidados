import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Pacientes } from './pages/pacientes/pacientes';
import { Admissao } from './pages/admissao/admissao';
import { Estoque } from './pages/estoque/estoque';
import { Prescricao } from './pages/prescricao/prescricao';
import { Prontuario } from './pages/prontuario/prontuario';
import { Consultas } from './pages/consultas/consultas';
import { Cuidados } from './pages/cuidados/cuidados';
import { EstoqueNovo } from './pages/estoque-novo/estoque-novo';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'pacientes', component: Pacientes },
  { path: 'admissao', component: Admissao },
  { path: 'estoque', component: Estoque },
  { path: 'prescricao', component: Prescricao },
  { path: 'prontuario/:id', component: Prontuario },
  { path: 'consultas', component: Consultas },
  { path: 'cuidados', component: Cuidados },
  { path: 'estoque/novo', component: EstoqueNovo }
  
];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaExperienciaComponent } from './components/nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './components/editar-experiencia/editar-experiencia.component';
import { NeweducacionComponent } from './components/nuevaeducacion/nuevaeducacion.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'nuevaexperiencia',
    pathMatch: 'full',
    component: NuevaExperienciaComponent
  },
  {
    path: 'editarexperiencia/:id',
    pathMatch: 'full',
    component: EditarExperienciaComponent
  },
  {
    path: 'nuevaeducacion',
    pathMatch: 'full',
    component: NeweducacionComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

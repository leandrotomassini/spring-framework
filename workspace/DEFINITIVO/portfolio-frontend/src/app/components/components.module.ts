import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { HeaderComponent } from './header/header.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardSoftComponent } from './hard-soft/hard-soft.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftComponent,
    ProyectosComponent,
    PerfilComponent
  ],
  exports: [
    HeaderComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({})
  ]
})
export class ComponentsModule { }

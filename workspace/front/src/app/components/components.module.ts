import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Gráficos
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { SocialComponent } from './social/social.component';
import { HardandsoftskillsComponent } from './hardandsoftskills/hardandsoftskills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuevaExperienciaComponent } from './nueva-experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './editar-experiencia/editar-experiencia.component';
import { NeweducacionComponent } from './nuevaeducacion/nuevaeducacion.component';


@NgModule({
  declarations: [
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    ProyectosComponent,
    SocialComponent,
    HardandsoftskillsComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NeweducacionComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
  ]
})
export class ComponentsModule { }

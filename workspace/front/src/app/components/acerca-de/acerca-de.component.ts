import { Component, OnInit } from '@angular/core';

import { Persona } from 'src/app/model/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona('', '', '');

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.personaService.getPersona()
      .subscribe(persona => {
        this.persona = persona;
      });
  }


}

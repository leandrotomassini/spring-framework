import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../helpers/enviroments';
import { Persona } from '../model/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = `${BASE_URL}/personas`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.URL}/perfil `);
  }

}

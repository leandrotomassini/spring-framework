import { Component, OnInit } from '@angular/core';

import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];
  isLogged: boolean = false;

  constructor(
    private educacionService: EducacionService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {

    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }


  }

  cargarEducacion(): void {
    this.educacionService.lista()
      .subscribe(data => {
        this.educacion = data;
      });
  }

  borrar(id: number) {
    if (id != undefined) {
      this.educacionService.delete(id)
        .subscribe(data => {
          this.cargarEducacion();
        }, error => alert('No se puede eliminar.'));
    }
  }
}

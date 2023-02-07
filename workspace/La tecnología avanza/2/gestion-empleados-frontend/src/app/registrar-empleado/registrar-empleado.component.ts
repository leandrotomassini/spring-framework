import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();

  constructor(
    private empeladosService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  guardarEmpleado() {
    this.empeladosService.registrarEmpleado(this.empleado)
      .subscribe({
        next: dato => {
          console.log(dato);
          this.router.navigate(['/empleados']);
        },
        error: console.log
      });
  }


  onSubmit() {
    this.guardarEmpleado();
  }
}

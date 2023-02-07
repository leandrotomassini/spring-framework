import { Component, OnInit } from '@angular/core';


import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(private empeladoService: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empeladoService.obtenerListaDeEmpleados()
      .subscribe(dato => {
        this.empleados = dato;
      });
  }

  actualizarEmpleado(idEmpleado: number) {

  }

  eliminarEmpleado(idEmpleado: number) {
    
  }

}

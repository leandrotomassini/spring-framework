import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente();
  titulo: string = 'Crear cliente';

  private errores: string[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {

      let id = params['id'];

      if (id) {
        this.clienteService.getCliente(id)
          .subscribe(
            cliente => this.cliente = cliente
          )
      }
    });
  }

  create(): void {
    this.clienteService.create(this.cliente)
      .subscribe({
        next: () => {
          swal.fire(
            'Nuevo cliente',
            `Cliente ${this.cliente.nombre}, ${this.cliente.apellido} creado correctamente.`,
            'success'
          );
          this.router.navigateByUrl('/clientes');
        },
        error: err => {
          this.errores = err.error.errors as string[]
        }
      });
  }

  update(): void {
    this.clienteService.update(this.cliente)
      .subscribe({
        next: (cliente) => {
          swal.fire(
            'Cliente actualizado',
            `Cliente ${this.cliente.nombre}, ${this.cliente.apellido} actualizado correctamente.`,
            'success'
          );
          this.router.navigateByUrl('/clientes');
        },
        error: err => {
          this.errores = err.error.errors as string[]
        }
      }

      )
  }

}

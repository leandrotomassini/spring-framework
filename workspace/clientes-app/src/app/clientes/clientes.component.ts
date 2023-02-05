import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes);
  }


  delete(cliente: Cliente): void {
    this.clienteService.delete(cliente.id)
      .subscribe(
        response => {
          this.clientes = this.clientes.filter(cli => cli !== cliente);
        }
      )
  }

}

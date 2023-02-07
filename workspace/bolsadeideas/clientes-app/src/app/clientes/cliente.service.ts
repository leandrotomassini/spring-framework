import { Injectable } from '@angular/core';
import { map, Observable, of, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';

import { Cliente } from './cliente';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = "http://localhost:8080/api/clientes";
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint)
      .pipe(
        map(response => response as Cliente[])
      );
  };

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      this.urlEndPoint,
      cliente,
      { headers: this.httpHeaders }
    ).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(() => e);
        }
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    );
  }

  getCliente(id: string = ''): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
      .pipe(
        catchError(e => {
          this.router.navigateByUrl('/clientes');
          swal.fire('Error al editar', e.error.mensaje, 'error');
          return throwError(() => e);
        })
      );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      `${this.urlEndPoint}/${cliente.id}`,
      cliente,
      { headers: this.httpHeaders }
    ).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(() => e);
        }
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    );;
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(
      `${this.urlEndPoint}/${id}`,
      { headers: this.httpHeaders }
    ).pipe(
      catchError(e => {
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => e);
      })
    );;
  }

}

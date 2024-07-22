import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Curso } from './curso';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  // URL base da API
  private url = "http://localhost/projeto-api/php/";

  // Construtor
  constructor(private http: HttpClient) { }

  // Obter todos os cursos
  obterCursos(): Observable<Curso[]> {
    return this.http.get<{ Curso: Curso[] }>(this.url + "listar").pipe(
      map(response => response.Curso),
      catchError(this.handleError)
    );
  }

  // Manipulação de erros
  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    return throwError('Algo deu errado; por favor, tente novamente mais tarde.');
  }
}

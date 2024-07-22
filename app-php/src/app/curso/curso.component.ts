import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  vetor: Curso[] = [];

  //Objeto curso da classe curso
  curso = new Curso();

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.selecao();
  }

  // CADASTRO
  cadastro(): void {
    alert("Cadastro");
  }

  // SELEÇÃO
  selecao(): void {
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      },
      error => {
        console.error('Erro ao obter cursos:', error);
      }
    );
  }

  // ALTERAR
  alterar(): void {
    alert("Alterar");
  }

  // REMOVER
  remover(): void {
    alert("Remover");
  }
}

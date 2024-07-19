import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {

  constructor() {}


  ngOnInit(): void {

  }


  //CADASTRO
  cadastro(): void{
    alert("Cadastro");
  }

  //SELECAO
  selecao():void {
    alert("selecao");
  }

  //ALTERAR
  alterar(): void {
    alert("alterar");
  }

  //REMOVER
  remover(): void {
    alert("remover");
  }
}

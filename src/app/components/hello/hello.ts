import { Component, inject } from '@angular/core';
import { EnviandoInfomacoes } from '../../services/enviando-infomacoes';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {
  private enviaInfo = inject(EnviandoInfomacoes);
  nome = "Bernardo";
  conte = 1;
  titulo = false;
  lista = [{nome:"Bernardo", idade: 18}, {nome: "Murilo", idade: 16}, {nome: "Rejaine", idade: 46}]

  atualizarNome(nome: string) {
    this.nome = nome;
  }

  submit() {
    console.log("Teste " + this.conte);
    this.conte = this.conte + 1;
  }

  novoTitulo() {
    this.titulo = true;
  }

  enviandoInfo() {
    this.enviaInfo.enviandoInfoParaBack("OLA");
  }

}

import { Component, OnInit } from '@angular/core';
import Cartao from './cartao/cartao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  tarefas = [
    {
      nome: 'Raul Provas',
      descricao: '31 a 03',
      checklist: [
        {
          nome: 'Segunda',
          concluido: false,
        },
        {
          nome: 'Terça',
          concluido: false,
        },
        {
          nome: 'Quarta',
          concluido: false,
        },
        {
          nome: 'Quinta',
          concluido: false,
        },
      ]
    },
  ];

  cartoes: Cartao[] = [];

  ngOnInit(): void {
    
    this.tarefas.forEach((t) => {
      let cartao = new Cartao();
      cartao.nome = t.nome;
      cartao.descricao = t.descricao;
      cartao.checklist = t.checklist;
      this.cartoes.push(cartao);
    });
  }



}
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
      nome: 'Fazer tarefa Projeto Integrador, Tiago',
      descricao: 'Realizar as seguintes tarefas',
      checklist: [
        {
          nome: 'tarefa1',
          concluido: true,
        },
        {
          nome: 'tarefa2',
          concluido: false,
        },
        {
          nome: 'tarefa3',
          concluido: false,
        },
        {
          nome: 'tarefa4',
          concluido: false,
        },
        {
          nome: 'tarefa5',
          concluido: false,
        }
      ]
    },
    {
      nome: 'Estudar Orientação a Objetos',
      descricao: 'Compreender orientação a objetos e aplicar em exercícios práticos',
      checklist: [
        {
          nome: 'Abstração',
          concluido: true,
        },
        {
          nome: 'Encapsulamento',
          concluido: false,
        },
        {
          nome: 'Herança',
          concluido: false,
        },
      ]
    }
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
import { Component, OnInit } from '@angular/core';
import { Empregado } from '../models/empregados';

@Component({
  selector: 'app-empregados',
  templateUrl: './empregados.component.html',
  styleUrls: ['./empregados.component.css']
})
export class EmpregadosComponent implements OnInit {
  generoSelec = 'Todos';
  listaEmpregados: Empregado[] = [
    { arquivo: 1, nome: 'Rivaldo', apelido: 'Souza', genero: 'Masculino', salario: 80000 },
    { arquivo: 2, nome: 'Adriana', apelido: 'Pereira', genero: 'Femenino', salario: 60000 },
    { arquivo: 3, nome: 'Manu', apelido: 'Souza', genero: 'Femenino', salario: 50000 },
    { arquivo: 4, nome: 'Steven', apelido: 'Teste', genero: 'Masculino', salario: 30000 },
    { arquivo: 5, nome: 'Anderson', apelido: 'Santos', genero: 'Masculino', salario: 20000 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getEmpregados(): number {
    return this.listaEmpregados.length;
  }
  getMasculinos(): number {
    return this.listaEmpregados.filter(list => list.genero === 'Masculino').length;
  }
  getFemeninos(): number {
    return this.listaEmpregados.filter(list => list.genero === 'Femenino').length;
  }
  generoSelect(genero: string): void {
    this.generoSelec = genero;
  }
}

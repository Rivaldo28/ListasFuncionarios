import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empregados',
  templateUrl: './count-empregados.component.html',
  styleUrls: ['./count-empregados.component.css']
})
export class CountEmpregadosComponent implements OnInit {
  radioButtonSelect = 'Todos';
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;
  @Output() radioButton: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  radioButtonChanged(): void {
    /*console.log(this.radioButtonSelect);*/
    this.radioButton.emit(this.radioButtonSelect);
  }
}

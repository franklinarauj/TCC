import { Component, OnInit } from '@angular/core';

export interface Prontuario {
  alergia: string;
  comorbidade: string;
  dispotivo: string;
  prescicao: string;
}

const data_prontuario: Prontuario[] = [
  {alergia: 'Abelha', comorbidade: 'Obeso', dispotivo: 'Marca-Passo', prescicao: 'Remedios'},
];

@Component({
  selector: 'app-interesse',
  templateUrl: './interesse.component.html',
  styleUrls: ['./interesse.component.css']
})

export class InteresseComponent implements OnInit {

  displayedColumns: string[] = ['alergia', 'comorbidade', 'dispotivo', 'prescicao'];
  dataSource = data_prontuario;

  constructor() { }

  ngOnInit(): void {
  }

}

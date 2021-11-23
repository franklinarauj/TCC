import { Component, OnInit } from '@angular/core';
import { Alergia } from 'src/app/interfaces/Alergia';
import { Comorbidade } from 'src/app/interfaces/Comorbidade';
import { Dispositivo } from 'src/app/interfaces/Dispositivo';
import { Prescricao } from 'src/app/interfaces/Prescricao';

export interface Prontuario {
  alergia: string;
  comorbidade: string;
  dispositivo: string;
  prescicao: string;
}

const data_prontuario: Prontuario[] = [
  {alergia: 'Abelha', comorbidade: 'Obeso', dispositivo: 'Marca-Passo', prescicao: 'Remedios'},
];

@Component({
  selector: 'app-interesse',
  templateUrl: './interesse.component.html',
  styleUrls: ['./interesse.component.css']
})

export class InteresseComponent implements OnInit {

  alergias: Alergia[] = [{
    id: 0,
    alergia: "",
    grau: "",
    paciente: ""
  }];

  comorbidades: Comorbidade[] = [{
    id: 0,
    comorbidade: "",
    cuidados: "",
    paciente: ""
  }];

  dispositivos: Dispositivo[] = [{
    id: 0,
    dispositivo: "",
    cuidados: "",
    paciente: ""
  }];

  prescricoes: Prescricao[] = [{
    id: 0,
    remedio: "",
    horarios: "",
    via: "",
    paciente: ""
  }];

  displayedColumns: string[] = ['alergia', 'comorbidade', 'dispositivo', 'prescicao'];
  dataSource = data_prontuario;

  constructor() { }

  ngOnInit(): void {
  }

}

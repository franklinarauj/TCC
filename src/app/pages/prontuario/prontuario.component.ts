import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Alergia } from 'src/app/interfaces/Alergia';
import { Cadastro } from 'src/app/interfaces/Cadastro';
import { Paciente } from 'src/app/interfaces/Paciente';
import { Prescricao } from 'src/app/interfaces/Prescricao';
import { Comorbidade } from 'src/app/interfaces/Comorbidade';
import { Dispositivo } from 'src/app/interfaces/Dispositivo';
import { PacienteService } from 'src/app/services/paciente.service';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

export interface Prontuario {
  alergia: string;
  comorbidade: string;
  dispositivo: string;
  prescicao: string;
}

@Component({
  selector: 'app-interesse',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css']
})

export class ProntuarioComponent implements OnInit {

  paciente!: Paciente;
  nomes!: string[];
  cpf: string = "";
  isLogado!: boolean;
  token!: string | null;

  pacientes: Paciente[] = [];
  dataSource: Paciente[] = [];

  alergias: Alergia[] = [{
    id: 0,
    alergia: "",
    grau: "",
    paciente_cpf: ""
  }];

  comorbidades: Comorbidade[] = [{
    id: 0,
    comorbidade: "",
    cuidados: "",
    paciente_cpf: ""
  }];

  dispositivos: Dispositivo[] = [{
    id: 0,
    dispositivo: "",
    cuidados: "",
    paciente_cpf: ""
  }];

  prescricoes: Prescricao[] = [{
    id: 0,
    remedio: "",
    horarios: "",
    via: "",
    paciente_cpf: ""
  }];

  displayedColumns: string[] = ['nome'];
  // displayedColumns: string[] = ['nome', 'alergia', 'comorbidade', 'dispositivo', 'prescicao'];

  constructor(private router: Router, private pacienteService: PacienteService,
    private route: ActivatedRoute, private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cpf = params['cpf'];
      this.loginService.getToken().then(token => {
        this.token = token;
        if (token) {
          this.pacienteService.getByCpf(this.cpf, token).subscribe(paciente => {
            if (paciente) {
              this.pacientes.push(paciente)
              this.dataSource = this.pacientes
              this.isLogado = true
            }
          })
        }
      });
    });
  }

}

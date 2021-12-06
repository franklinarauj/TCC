import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Alergia } from 'src/app/interfaces/Alergia';
import { Paciente } from 'src/app/interfaces/Paciente';
import { Prescricao } from 'src/app/interfaces/Prescricao';
import { Comorbidade } from 'src/app/interfaces/Comorbidade';
import { Dispositivo } from 'src/app/interfaces/Dispositivo';

import { LoginServiceService } from 'src/app/services/login-service.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { ProntuarioService } from 'src/app/services/prontuario.service';
@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css'],
})
export class ProntuarioComponent implements OnInit {
  cpf: string = '';
  token!: string | null;
  isLogado!: boolean;

  paciente!: Paciente;
  alergia!: Alergia;
  comorbidade!: Comorbidade;
  dispositivo!: Dispositivo;
  prescricao!: Prescricao;

  // Infos do perfil (nome, idade, sexo, endereço)
  // Alergia
  // Comorbidades
  // Dispositivos
  // Prescrições

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private loginService: LoginServiceService,
    private prontuarioService: ProntuarioService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cpf = params['cpf'];
      this.loginService.getToken().then((token) => {
        this.token = token;
        if (token) {
          this.pacienteService
            .getByCpf(this.cpf, token)
            .subscribe((paciente) => {
              if (paciente) {
                this.paciente = paciente;
                this.isLogado = true;
              }
            });

          this.prontuarioService.getAlergia(this.cpf).subscribe((alergia) => {
            if (alergia) {
              this.alergia = alergia;
            }
          });

          this.prontuarioService
            .getComorbidade(this.cpf)
            .subscribe((comorbidade) => {
              if (comorbidade) {
                this.comorbidade = comorbidade;
              }
            });

          this.prontuarioService
            .getDispositivo(this.cpf)
            .subscribe((dispositivo) => {
              if (dispositivo) {
                this.dispositivo = dispositivo;
              }
            });

          this.prontuarioService
            .getPrescricao(this.cpf)
            .subscribe((prescricao) => {
              if (prescricao) {
                this.prescricao = prescricao;
              }
            });
        }
      });
    });
  }
}

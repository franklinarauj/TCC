import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuidador } from 'src/app/interfaces/Cuidador';
import { CuidadorService } from 'src/app/services/cuidador.service';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

import { Experiencia } from 'src/app/interfaces/Experiencia';
import { Certificacao } from 'src/app/interfaces/Certificacao';
import { Formacao } from 'src/app/interfaces/Formacao';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  cpf: string = '';
  token!: string | null;
  isLogado!: boolean;

  cuidador!: Cuidador;
  experiencia!: Experiencia;
  certificacao!: Certificacao;
  formacao!: Formacao;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cuidadorService: CuidadorService,
    private loginService: LoginServiceService,
    private curriculoService: CurriculumService
  ) {}

  // Perfil OK
  // Endereço OK
  // Experiencia OK
  // Certificação OK
  // Formação OK
  // Contato OK

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cpf = params['cpf'];
      this.loginService.getToken().then((token) => {
        this.token = token;
        if (token) {
          this.cuidadorService.get(this.cpf, token).subscribe((cuidador) => {
            if (cuidador) {
              this.cuidador = cuidador;
              this.isLogado = true;
            }
          });

          this.curriculoService
            .getExperiencia(this.cpf)
            .subscribe((experiencia) => {
              console.log('EXPERIENCIA: ', experiencia);
              if (experiencia) {
                this.experiencia = experiencia;
              }
            });

          this.curriculoService
            .getCertificacao(this.cpf)
            .subscribe((certificacao) => {
              console.log('CERTIFICAÇÃO: ', certificacao);
              if (certificacao) {
                this.certificacao = certificacao;
              }
            });

          this.curriculoService.getFormacao(this.cpf).subscribe((formacao) => {
            console.log('FORMAÇÃO: ', formacao);
            if (formacao) {
              this.formacao = formacao;
            }
          });
        }
      });
    });
  }

  match(): void {
    this.router.navigate(['match']);
  }
}

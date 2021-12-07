import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificacao } from 'src/app/interfaces/Certificacao';
import { Experiencia } from 'src/app/interfaces/Experiencia';
import { Formacao } from 'src/app/interfaces/Formacao';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-curriculum-info',
  templateUrl: './curriculum-info.component.html',
  styleUrls: ['./curriculum-info.component.css']
})
export class CurriculumInfoComponent implements OnInit {
  isEdit: boolean = false;
  displayFormationForm: boolean = false;
  cpf: string = '';
  token!: string | null;

  certificao: Certificacao = {
    carga_horaria: undefined,
    cuidador_cpf: "",
    instituicao: "",
    titulo: "",
  };
  experiencia: Experiencia = {
    atual: false,
    cargo: "",
    cuidador_cpf: "",
    data_fim: undefined,
    data_inicio: undefined,
    descricao: "",
    empresa: ""
  };
  formacao: Formacao = {
    cuidador_cpf: "",
    curso: "",
    data_formacao: "",
    data_inicio: "",
    em_andamento: false,
    instituicao: "",
    periodo: ""
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private curriculumService: CurriculumService,
    private loginService: LoginServiceService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cpf = params['cpf'];
      this.loginService.getToken().then((token) => {
        this.token = token;
        if (token) {
          this.curriculumService.getExperiencia(this.cpf)
            .subscribe(experiencia => {
              if (experiencia) {
                this.isEdit = true;
                this.experiencia = experiencia;
                this.experiencia.data_inicio = this.datePipe.transform(this.experiencia.data_inicio, 'dd/MM/yyyy');
                this.experiencia.data_fim = this.datePipe.transform(this.experiencia.data_fim, 'dd/MM/yyyy');
                this.experiencia.cuidador_cpf = this.cpf;
              }
            })
          this.curriculumService.getCertificacao(this.cpf)
            .subscribe(certificao => {
              if (certificao) {
                this.isEdit = true;
                this.certificao = certificao;
                this.certificao.cuidador_cpf = this.cpf;
              }
            })
          this.curriculumService.getFormacao(this.cpf)
            .subscribe(formacao => {
              if (formacao) {
                this.isEdit = true;
                this.formacao = formacao;
                this.formacao.data_inicio = this.datePipe.transform(this.formacao.data_inicio, 'dd/MM/yyyy');
                this.formacao.data_formacao = this.datePipe.transform(this.formacao.data_formacao, 'dd/MM/yyyy');
                this.formacao.cuidador_cpf = this.cpf;
              }
            })
        }
      });
    });
  }

  create() {
    this.experiencia.cuidador_cpf = this.cpf;
    this.certificao.cuidador_cpf = this.cpf;
    this.formacao.cuidador_cpf = this.cpf;
    this.experiencia.data_inicio = this.datePipe.transform(this.experiencia.data_inicio, 'dd/MM/yyyy');
    this.experiencia.data_fim = this.datePipe.transform(this.experiencia.data_fim, 'dd/MM/yyyy');
    this.formacao.data_inicio = this.datePipe.transform(this.formacao.data_inicio, 'dd/MM/yyyy');
    this.formacao.data_formacao = this.datePipe.transform(this.formacao.data_formacao, 'dd/MM/yyyy');

    this.curriculumService.createExperiencia(this.experiencia, this.token).subscribe(() => {
      this.curriculumService.createCertificacao(this.certificao, this.token).subscribe(() => {
        this.curriculumService.createFormacao(this.formacao, this.token).subscribe(() => {
          this.router.navigateByUrl(`profile-helper/${this.cpf}`);
        });
      });
    });
  }

  edit() {
    this.experiencia.cuidador_cpf = this.cpf;
    this.certificao.cuidador_cpf = this.cpf;
    this.formacao.cuidador_cpf = this.cpf;
    // this.experiencia.data_inicio = this.datePipe.transform(this.experiencia.data_inicio, 'dd/MM/yyyy');
    // this.experiencia.data_fim = this.datePipe.transform(this.experiencia.data_fim, 'dd/MM/yyyy');
    // this.formacao.data_inicio = this.datePipe.transform(this.formacao.data_inicio, 'dd/MM/yyyy');
    // this.formacao.data_formacao = this.datePipe.transform(this.formacao.data_formacao, 'dd/MM/yyyy');
    this.curriculumService.editExperiencia(this.experiencia, this.token, this.experiencia.id).subscribe(() => {
      this.curriculumService.editCertificacao(this.certificao, this.token, this.certificao.id).subscribe(() => {
        this.curriculumService.editFormacao(this.formacao, this.token, this.formacao.id).subscribe(() => {
          this.router.navigateByUrl(`profile-helper/${this.cpf}`);
        })
      })
    })
  }

  cancelar(): void {
    this.router.navigate([`profile-helper/${this.cpf}`])
  };
}

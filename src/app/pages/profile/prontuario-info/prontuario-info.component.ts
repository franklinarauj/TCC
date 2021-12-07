import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alergia } from 'src/app/interfaces/Alergia';
import { Comorbidade } from 'src/app/interfaces/Comorbidade';
import { Dispositivo } from 'src/app/interfaces/Dispositivo';
import { Prescricao } from 'src/app/interfaces/Prescricao';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { ProntuarioService } from 'src/app/services/prontuario.service';

@Component({
  selector: 'app-prontuario-info',
  templateUrl: './prontuario-info.component.html',
  styleUrls: ['./prontuario-info.component.css']
})
export class ProntuarioInfoComponent implements OnInit {
  isEdit: boolean = false;
  displayFormationForm: boolean = false;
  cpf: string = '';
  token!: string | null;

  alergia: Alergia = {
    alergia: "",
    grau: "",
    paciente_cpf: ""
  }

  comorbidade: Comorbidade = {
    comorbidade: "",
    cuidados: "",
    paciente_cpf: ""
  }

  dispositivo: Dispositivo = {
    dispositivo: "",
    cuidados: "",
    paciente_cpf: ""
  }

  prescricao: Prescricao = {
    horarios: "",
    paciente_cpf: "",
    remedio: "",
    via: ""
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private prontuarioService: ProntuarioService,
    private loginService: LoginServiceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cpf = params['cpf'];
      this.loginService.getToken().then((token) => {
        this.token = token;
        if (token) {
          this.prontuarioService.getAlergia(this.cpf)
            .subscribe(alergia => {
              if (alergia) {
                this.isEdit = true;
                this.alergia = alergia;
              }
            })
          this.prontuarioService.getComorbidade(this.cpf)
            .subscribe(comorbidade => {
              if (comorbidade) {
                this.isEdit = true;
                this.comorbidade = comorbidade;
              }
            })
          this.prontuarioService.getDispositivo(this.cpf)
            .subscribe(dispositivo => {
              console.log(dispositivo)
              if (dispositivo) {
                this.isEdit = true;
                this.dispositivo = dispositivo;
              }
            })
          this.prontuarioService.getPrescricao(this.cpf)
            .subscribe(prescricao => {
              if (prescricao) {
                this.isEdit = true;
                this.prescricao = prescricao;
              }
            })
        }
      });
    });
  }

  create() {
    this.alergia.paciente_cpf = this.cpf;
    this.comorbidade.paciente_cpf = this.cpf;
    this.dispositivo.paciente_cpf = this.cpf;
    this.prescricao.paciente_cpf = this.cpf;
    this.prontuarioService.createAlergia(this.alergia, this.token).subscribe(() => {
      this.prontuarioService.createComorbidade(this.comorbidade, this.token).subscribe(() => {
        this.prontuarioService.createDispositivo(this.dispositivo, this.token).subscribe(() => {
          this.prontuarioService.createPrescricao(this.prescricao, this.token).subscribe(() => {
            this.router.navigateByUrl(`profile-patient/${this.cpf}`);
          })
        })
      })
    })
    console.log(this.dispositivo)
  }

  edit() {
    this.alergia.paciente_cpf = this.cpf;
    this.comorbidade.paciente_cpf = this.cpf;
    this.dispositivo.paciente_cpf = this.cpf;
    this.prescricao.paciente_cpf = this.cpf;
    this.prontuarioService.editAlergia(this.alergia, this.token).subscribe(() => {
      this.prontuarioService.editComorbidade(this.comorbidade, this.token).subscribe(() => {
        this.prontuarioService.editDispositivo(this.dispositivo, this.token).subscribe(() => {
          this.prontuarioService.editPrescricao(this.prescricao, this.token).subscribe(() => {
            this.router.navigateByUrl(`profile-patient/${this.cpf}`);
          })
        })
      })
    })
  }

  cancelar(): void {
    this.router.navigateByUrl(`profile-patient/${this.cpf}`);
  }
}

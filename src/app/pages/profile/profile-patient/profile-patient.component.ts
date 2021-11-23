import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from 'src/app/interfaces/Cadastro';
import { Paciente } from 'src/app/interfaces/Paciente';
import { Sexo } from 'src/app/interfaces/Sexo';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { TipoUsuarioConstants } from 'src/app/shared/constants/TipoUsuarioConstants';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  paciente!: Paciente;
  cpf: string = "";
  isLogado!: boolean;
  podeEditar: boolean = false;
  sexs: Sexo[] = [
    { name: 'Masculino', value: 'M' },
    { name: 'Feminino', value: 'F' },
  ];
  cadastro!: Cadastro;
  token!: string | null;

  constructor(private router: Router, private pacienteService: PacienteService,
    private route: ActivatedRoute, private loginService: LoginServiceService,
    private cadastroService: CadastroService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cpf = params['cpf'];
      this.loginService.getToken().then(token => {
        this.token = token;
        if (token) {
          this.pacienteService.get(this.cpf, token).subscribe(paciente => {
            if (paciente) {
              this.paciente = paciente
              this.isLogado = true
              this.loginService.getCpfLogado().then(cpf => {
                if (paciente.cpf == cpf)
                  this.podeEditar = true;
              })
            }
          })
        }
      });
    });
  }

  deleteCadastro(): void {
    // this.router.navigate(['/cadastro-delete'])
  };

  editCadastro(): void {
    this.cadastro = {
      cpf: this.paciente.cpf,
      nome: this.paciente.nome,
      data_nascimento: this.paciente.data_nascimento,
      ativo: this.paciente.ativo,
      senha: this.paciente.senha,
      sexo: this.paciente.sexo,
      email: this.paciente.email,
      celular: this.paciente.celular,
      telefone: this.paciente.telefone,
      cep: this.paciente.cep,
      uf: this.paciente.uf,
      cidade: this.paciente.cidade,
      logradouro: this.paciente.logradouro,
      latitude: this.paciente.latitude,
      longitude: this.paciente.longitude
    }
    this.cadastroService.editar(this.cadastro, TipoUsuarioConstants.PACIENTE, this.cpf, this.token)
      .subscribe(paciente => this.paciente = paciente);
  };
}

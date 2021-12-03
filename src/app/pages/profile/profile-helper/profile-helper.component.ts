import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from 'src/app/interfaces/Cadastro';
import { Cuidador } from 'src/app/interfaces/Cuidador';
import { CuidadorService } from 'src/app/services/cuidador.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { CadastroService } from 'src/app/services/cadastro.service';
import { TipoUsuarioConstants } from 'src/app/shared/constants/TipoUsuarioConstants';
import { Sexo } from 'src/app/interfaces/Sexo';

@Component({
  selector: 'app-profile-helper',
  templateUrl: './profile-helper.component.html',
  styleUrls: ['./profile-helper.component.css'],
})
export class ProfileHelperComponent implements OnInit {
  cpf: string = '';
  cuidador!: Cuidador;
  isLogado!: boolean;
  podeEditar: boolean = false;
  cadastro!: Cadastro;
  token!: string | null;
  sexs: Sexo[] = [
    { name: 'Masculino', value: 'M' },
    { name: 'Feminino', value: 'F' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cuidadorService: CuidadorService,
    private loginService: LoginServiceService,
    private cadastroService: CadastroService
  ) {}

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
              this.loginService.getCpfLogado().then((cpf) => {
                if (cuidador.cpf == cpf) this.podeEditar = true;
              });
            }
          });
        }
      });
    });
  }

  editarCadastro(): void {
    this.cadastro = {
      cpf: this.cuidador.cpf,
      nome: this.cuidador.nome,
      data_nascimento: this.cuidador.data_nascimento,
      ativo: this.cuidador.ativo,
      senha: this.cuidador.senha,
      sexo: this.cuidador.sexo,
      email: this.cuidador.email,
      celular: this.cuidador.celular,
      cep: this.cuidador.cep,
      uf: this.cuidador.uf,
      cidade: this.cuidador.cidade,
      logradouro: this.cuidador.logradouro,
      latitude: this.cuidador.latitude,
      longitude: this.cuidador.longitude,
    };
    this.cadastroService
      .editar(
        this.cadastro,
        TipoUsuarioConstants.CUIDADOR,
        this.cpf,
        this.token
      )
      .subscribe((cuidador) => (this.cuidador = cuidador));
    // this.router.navigate(['cadastro-delete']);
  }

  deleteCadastro() {}

  editCadastro(): void {
    this.router.navigate(['cadastro-edit']);
  }

  editCurriculo(): void {
    this.router.navigate([`profile-helper/${this.cpf}/curriculum`]);
  }

  readInteresse(): void {
    this.router.navigate(['interesse']);
  }
}

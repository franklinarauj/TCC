import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/interfaces/Cadastro';
import { Sexo } from 'src/app/interfaces/Sexo';
import { Usuario } from 'src/app/interfaces/Usuario';
import { CadastroService } from 'src/app/services/cadastro.service';
import { TipoUsuarioConstants } from 'src/app/shared/constants/TipoUsuarioConstants';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css'],
})
export class AdditionalInfoComponent implements OnInit {

  lat: any;
  long: any;

  @Input() usuario: Usuario = {
    nome: '',
    cpf: '',
    senha: '',
    latitude: '',
    longitude: '',
  };

  tipoUsuario: number = 0;
  isLinear = false;

  sexControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  sexs: Sexo[] = [
    { name: 'Masculino', value: 'M' },
    { name: 'Feminino', value: 'F' },
  ];

  cadastro: Cadastro = {
    cpf: '',
    nome: '',
    data_nascimento: new Date(),
    ativo: true,
    senha: '',
    sexo: '',
    email: '',
    celular: '',
    cep: '',
    uf: '',
    cidade: '',
    logradouro: '',
    latitude: '',
    longitude: '',
  };

  constructor(
    private cadastroService: CadastroService,
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cadastro.nome = this.usuario.nome;
    this.cadastro.cpf = this.usuario.cpf;
    this.cadastro.senha = this.usuario.senha;
    this.cadastro.latitude = this.usuario.latitude;
    this.cadastro.longitude = this.usuario.longitude;
  }

  preencherLatLong(evento: any) {
    this.lat = evento[0];
    this.long = evento[1];
  }

  cadastrar(tipoUsuario: number) {
    this.cadastroService
      .cadastrar(this.cadastro, tipoUsuario)
      .subscribe((res) => {
        this.loginService
          .autenticar({
            cpf: this.cadastro.cpf,
            senha: this.cadastro.senha,
          })
          .subscribe((res) => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('cpf', this.cadastro.cpf);
            tipoUsuario == TipoUsuarioConstants.PACIENTE
            ? this.router.navigateByUrl(`/profile-patient/${this.cadastro.cpf}`)
            : this.router.navigateByUrl(`/profile-helper/${this.cadastro.cpf}`);
          });
      });
  }
}

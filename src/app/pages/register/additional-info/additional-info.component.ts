import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/interfaces/Cadastro';
import { Usuario } from 'src/app/interfaces/Usuario';
import { CadastroService } from 'src/app/services/cadastro.service';

interface Sexo {
  name: string;
  value: string;
}

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {

  @Input() usuario: Usuario = {
    nome: "",
    cpf: "",
    senha: "",
    latitude: "",
    longitude: ""
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
    cpf: "",
    nome: "",
    data_nascimento: new Date(),
    ativo: true,
    senha: "",
    sexo: "",
    email: "",
    celular: "",
    telefone: "",
    // resumo: "",
    cep: "",
    uf: "",
    cidade: "",
    logradouro: "",
    latitude: "",
    longitude: ""
  };

  constructor(private cadastroService: CadastroService, private router: Router) { }
 
  ngOnInit() {
    this.cadastro.nome = this.usuario.nome;
    this.cadastro.cpf = this.usuario.cpf;
    this.cadastro.senha = this.usuario.senha;
    this.cadastro.latitude = this.usuario.latitude;
    this.cadastro.longitude = this.usuario.longitude;
  }

  cadastrar(tipoUsuario: number) {
    console.log(this.cadastro.data_nascimento);
    this.cadastroService.cadastrar(this.cadastro, tipoUsuario).subscribe(res => { 
      console.log(res);
      tipoUsuario == 1 ? this.router.navigateByUrl('/profile-patient') : this.router.navigateByUrl('/profile-helper');
    })
  }
}

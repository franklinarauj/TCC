import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from 'src/app/interfaces/Cadastro';
import { Sexo } from 'src/app/interfaces/Sexo';
import { Usuario } from 'src/app/interfaces/Usuario';
import { CadastroService } from 'src/app/services/cadastro.service';
import { TipoUsuarioConstants } from 'src/app/shared/constants/TipoUsuarioConstants';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {

  @Input() usuario!: Usuario
  tipoUsuario: number = 0;
  isLinear = false;

  sexControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  sexs: Sexo[] = [
    { name: 'Masculino', value: 'M' },
    { name: 'Feminino', value: 'F' },
  ];

  cadastro!: Cadastro;

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit() {
    this.cadastro.nome = this.usuario.nome;
    this.cadastro.cpf = this.usuario.cpf;
    this.cadastro.senha = this.usuario.senha;
    this.cadastro.latitude = this.usuario.latitude;
    this.cadastro.longitude = this.usuario.longitude;
  }

  cadastrar(tipoUsuario: number) {
    this.cadastroService.cadastrar(this.cadastro, tipoUsuario).subscribe(res => {
      tipoUsuario == TipoUsuarioConstants.PACIENTE ? this.router.navigateByUrl(`/profile-patient/${this.cadastro.cpf}`) : this.router.navigateByUrl(`/profile-helper/${this.cadastro.cpf}`);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/Login';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TipoUsuarioConstants } from 'src/app/shared/constants/TipoUsuarioConstants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: Login = {
    cpf: "",
    senha: ""
  };

  loginError: boolean = false;
  tipoUsuario: number = 0;
  hide = true;

  constructor(private router: Router, private loginService: LoginServiceService) {

  }

  ngOnInit(): void {
  }

  navigateToCadastro(): void {
    this.router.navigate(['/cadastro']);
  }

  logar(): void {
    if (this.tipoUsuario == 0)
      this.tipoUsuario = 4
    this.loginService.autenticar(this.login).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('cpf', this.login.cpf);
      if (this.tipoUsuario == TipoUsuarioConstants.PACIENTE)
        this.router.navigateByUrl(`profile-patient/${this.login.cpf}`)
      if (this.tipoUsuario == TipoUsuarioConstants.CUIDADOR)
        this.router.navigateByUrl(`profile-helper/${this.login.cpf}`)
    },
      err => {
        this.loginError = true;
      });
  }

}

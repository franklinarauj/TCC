import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/Login';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    cpf_cnpj: "",
    senha: ""
  };

  loginError: boolean = false;
  tipoUsuario: string = "";
  hide = true;

  constructor(private router: Router, private loginService: LoginServiceService) {

  }
  ngOnInit(): void {
  }

  navigateToCadastro(): void {
    this.tipoUsuario == "1" ? this.router.navigate(['/cadastro-patient']) : this.router.navigate(['/cadastro-helper'])
  }

  logar(): void {
    this.loginService.autenticar(this.login).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('refreshToken', res.refreshToken);
      localStorage.setItem('username', res.username);
      this.tipoUsuario == "1" ? this.router.navigateByUrl(`profile-patient`) : this.router.navigateByUrl(`profile-helper`)
    },
      err => {
        this.loginError = true;
      });
  }

}

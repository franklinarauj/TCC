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
    cpf: "",
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
    this.tipoUsuario == "1" ? this.router.navigate(['/cadastro']) : this.router.navigate(['/cadastro'])
  }

  logar(): void {
    this.loginService.autenticar(this.login).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('cpf', this.login.cpf);
      this.tipoUsuario == "1" ? this.router.navigateByUrl(`profile-patient/${this.login.cpf}`) : this.router.navigateByUrl(`profile-helper/${this.login.cpf}`)
    },
      err => {
        this.loginError = true;
      });
  }

}

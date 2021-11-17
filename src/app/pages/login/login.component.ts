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

  hide = true;
 
  constructor(private router: Router, private loginService: LoginServiceService) {

  }

  ngOnInit(): void {
  }

  navigateToCadastro(): void {
    this.router.navigate(['/cadastro'])
  }

  navigateToProfile(): void {
    this.router.navigate(['/profile-paciente'])
  }

  logar(): void {
    this.loginService.autenticar(this.login).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('refreshToken', res.refreshToken);
      localStorage.setItem('username', res.username);
      this.router.navigateByUrl(`profile-patient`);
    });
  }

}

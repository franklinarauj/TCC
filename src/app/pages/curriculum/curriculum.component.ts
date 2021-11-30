import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from 'src/app/interfaces/Cadastro';
import { Cuidador } from 'src/app/interfaces/Cuidador';
import { CuidadorService } from 'src/app/services/cuidador.service';
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  cuidador!: Cuidador;
  nomes!: string[];
  cpf: string = "";
  isLogado!: boolean;
  token!: string | null;

  cuidadores: Cuidador[] = [];
  dataSource: Cuidador[] = [];

  displayedColumns: string[] = ['nome'];

  constructor(private router: Router, private route: ActivatedRoute,
    private cuidadorService: CuidadorService, private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cpf = params['cpf'];
      this.loginService.getToken().then(token => {
        this.token = token;
        if (token) {
          this.cuidadorService.get(this.cpf, token).subscribe(cuidador => {
            if (cuidador) {
              this.cuidadores.push(cuidador)
              this.isLogado = true
            }
          })
        }
      });
    });
  }

}

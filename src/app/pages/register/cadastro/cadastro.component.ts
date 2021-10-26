import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cuidador',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  hide = true;
  hide2 = true;

  constructor(private router: Router) {

  }

  ngOnInit(): void {}

  pacienteCadastro(): void {
      this.router.navigate(['/cadastro-paciente'])
  };

  //   cuidadorCadastro(): void {
    //this.router.navigate(['/cadastro-cuidador'])
  //};

}

import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-helper',
  templateUrl: './cadastro-helper.component.html',
  styleUrls: ['./cadastro-helper.component.css']
})
export class CadastroHelperComponent implements OnInit {

  hide = true;
  hide2 = true;

  constructor(private router: Router) {

  }

  ngOnInit(): void {}

  @Input() nome: any;
  @Input() cpf_cnpj: any;
  lat: any;
  long: any;


  preencherLatLong(evento:any) {
    this.lat = evento[0];
    this.long = evento[1];
  }

  async pacienteCadastro(){
    try {
    const dados = this.beforeSave();
    //SERVICE
    console.log(dados);
    } catch (e) {
      console.log('ERROR =>', e);
    }
  };

  private beforeSave() {
    return {
      nome: this.nome,
      cpf_cnpj: this.cpf_cnpj,
      latitude: this.lat,
      longitude: this.long
    };
  }

    cuidadorCadastro(): void {
    this.router.navigate(['/cadastro-cuidador'])
  };

}

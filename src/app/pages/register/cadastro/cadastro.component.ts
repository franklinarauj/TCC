import { Component, Input, OnInit } from '@angular/core';
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

  @Input() nome: any;
  @Input() email: any;
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
      email: this.email,
      latitude: this.lat,
      longitude: this.long
    };
  }
  //   cuidadorCadastro(): void {
    //this.router.navigate(['/cadastro-cuidador'])
  //};

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapaComponent } from 'src/app/components/mapa/mapa.component';
import { Cadastro } from 'src/app/interfaces/Cadastro';
import { Usuario } from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-cuidador',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  hide = true;
  hide2 = true;
  nome: any;
  // cpf_cnpj: any;
  lat: any;
  long: any;
  usuario: Usuario = {
    nome: "",
    cpf: "",
    senha: "",
    latitude: "",
    longitude: ""
  };

  usuarioCadastrado: boolean = false;

  constructor(private router: Router, private mapaComponent: MapaComponent) {
    //console.log('teste 12345');
  }

  ngOnInit(): void {
   }

  preencherLatLong(evento: any) {
    //console.log('evento =>', evento);
    this.lat = evento[0];
    this.long = evento[1];
    this.mapaComponent.marcarMatch("-15.872846316558126","-47.989654541015625");
  }

  cadastrarUsuario() {
    this.usuario.latitude = this.lat;
    this.usuario.longitude = this.long;
    //console.log('estou aqui', this.lat);
    this.usuarioCadastrado = true;
  }
}

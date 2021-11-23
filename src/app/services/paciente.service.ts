import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../interfaces/Paciente';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  get(cpf: string, token: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${BASE_URL}/paciente/${cpf}`, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) });
  }

  recuperarDados(){
    const dadosMock =[{
      "cpf": "123123123123",
      "nome": "TESTE 123456789999",
      "data_nascimento": "2021-11-22T22:24:11.872Z",
      "ativo": true,
      "senha": "",
      "sexo": "M",
      "email": "junior@gmail.com",
      "celular": "61999999999",
      "telefone": "",
      "cep": "72231417",
      "uf": "DF",
      "cidade": "Taguatinga",
      "logradouro": "12345",
      "latitude": -15.827837114029137,
      "longitude": -47.87841796875001
  },
  {
    "cpf": "32132131231",
    "nome": "TESTE 1111",
    "data_nascimento": "2021-11-22T22:24:11.872Z",
    "ativo": true,
    "senha": "",
    "sexo": "M",
    "email": "junior@gmail.com",
    "celular": "61999999999",
    "telefone": "",
    "cep": "72231417",
    "uf": "DF",
    "cidade": "Taguatinga",
    "logradouro": "12345",
    "latitude": -15.815948233847756,
    "longitude": -47.92098999023438
},
];
  console.log('MOCK =>', dadosMock);
  return dadosMock;
  //return this.http.get(dadosMock).toPromise();
  }
}
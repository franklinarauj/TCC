import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cadastro } from '../interfaces/Cadastro';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastrar(cadastro: Cadastro, tipoUsuario: number): Observable<any> {
    return tipoUsuario == 1 ?
      this.http.post(`${BASE_URL}/paciente`, cadastro) :
      this.http.post(`${BASE_URL}/cuidador`, cadastro);    
  }
}

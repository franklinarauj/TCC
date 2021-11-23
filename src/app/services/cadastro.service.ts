import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cadastro } from '../interfaces/Cadastro';
import { Cuidador } from '../interfaces/Cuidador';
import { Paciente } from '../interfaces/Paciente';
import { TipoUsuarioConstants } from '../shared/constants/TipoUsuarioConstants';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastrar(cadastro: Cadastro, tipoUsuario: number): Observable<any> {
    return tipoUsuario == TipoUsuarioConstants.PACIENTE ?
      this.http.post(`${BASE_URL}/paciente`, cadastro) :
      this.http.post(`${BASE_URL}/cuidador`, cadastro);    
  }

  editar(cadastro: Cadastro, tipoUsuario: number, cpf: string, token: string | null): Observable<any> {
    return tipoUsuario == TipoUsuarioConstants.PACIENTE ?
      this.http.put(`${BASE_URL}/paciente/${cpf}`, cadastro, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) }) :
      this.http.put(`${BASE_URL}/cuidador/${cpf}`, cadastro, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) });
  }
}

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

  async getAtivos(token?: string){
  const dados =  this.http.get<Paciente>(`${BASE_URL}/paciente/ativos`, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) }).toPromise();
  //console.log('DADOS =>', dados);
  return dados;
  
  //return this.http.get(dadosMock).toPromise();
  }
}
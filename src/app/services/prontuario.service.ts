import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilsService } from '../shared/constants/utils.service';

import { Alergia } from '../interfaces/Alergia';
import { Comorbidade } from '../interfaces/Comorbidade';
import { Dispositivo } from '../interfaces/Dispositivo';
import { Prescricao } from '../interfaces/Prescricao';
import { Experiencia } from '../interfaces/Experiencia';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  constructor(private http: HttpClient, private utilsService: UtilsService) {}

  //Alergia
  getAlergia(cpf: string): Observable<Alergia> {
    return this.http.get<Alergia>(`${BASE_URL}/alergia/${cpf}`);
  }

  createAlergia(alergia: Alergia, token: string | null) {
    return this.http.post<Alergia>(`${BASE_URL}/alergia/${alergia.paciente_cpf}`, alergia, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) })
  }

  editAlergia(alergia: Alergia, token: string | null) {
    return this.http.put<Alergia>(`${BASE_URL}/alergia/${alergia.id}`, alergia, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) })
  }

  //Comorbidade
  getComorbidade(cpf: string): Observable<Comorbidade> {
    return this.http.get<Comorbidade>(`${BASE_URL}/comorbidade/${cpf}`);
  }

  createComorbidade(comorbidade: Comorbidade, token: string | null) {
    return this.http.post<Comorbidade>(`${BASE_URL}/comorbidade/${comorbidade.paciente_cpf}`, comorbidade, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) })
  }

  editComorbidade(comorbidade: Comorbidade, token: string | null) {
    return this.http.put<Comorbidade>(`${BASE_URL}/alergia/${comorbidade.id}`, comorbidade, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) })
  }

  // Dispositivo
  getDispositivo(cpf: string): Observable<Dispositivo> {
    return this.http.get<Dispositivo>(`${BASE_URL}/dispositivo/${cpf}`);
  }

  createDispositivo(dispositivo: Dispositivo, token: string | null) {
    return this.http.post<Dispositivo>(`${BASE_URL}/dispositivo/${dispositivo.paciente_cpf}`, dispositivo, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) })
  }

  editDispositivo(dispositivo: Dispositivo, token: string | null) {
    return this.http.put<Dispositivo>(`${BASE_URL}/dispositivo/${dispositivo.id}`, dispositivo, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) })
  }

  // Prescrição
  getPrescricao(cpf: string): Observable<Prescricao> {
    return this.http.get<Prescricao>(`${BASE_URL}/prescricao/${cpf}`);
  }

  createPrescricao(prescricao: Prescricao, token: string | null) {
    return this.http.post<Prescricao>(`${BASE_URL}/prescricao/${prescricao.paciente_cpf}`, prescricao, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) })
  }

  editPrescricao(prescricao: Prescricao, token: string | null) {
    return this.http.put<Prescricao>(`${BASE_URL}/prescricao/${prescricao.id}`, prescricao, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) })
  }
}


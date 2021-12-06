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

  // Alergia

  getAlergia(cpf: string): Observable<Alergia> {
    return this.http.get<Alergia>(`${BASE_URL}/alergia/paciente/${cpf}`);
  }

  // Comorbidades

  getComorbidade(cpf: string): Observable<Comorbidade> {
    return this.http.get<Comorbidade>(`${BASE_URL}/comorbidade/${cpf}`);
  }

  // Dispositivos

  getDispositivos(cpf: string): Observable<Dispositivo> {
    return this.http.get<Dispositivo>(`${BASE_URL}/dispositivo/${cpf}`);
  }

  // Prescrições

  getPrescricao(cpf: string): Observable<Prescricao> {
    return this.http.get<Prescricao>(`${BASE_URL}/prescricao/${cpf}`);
  }

}

// Infos do perfil (nome, idade, sexo, endereço)
// Alergia
// Comorbidades
// Dispositivos
// Prescrições

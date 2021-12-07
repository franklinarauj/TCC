import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificacao } from '../interfaces/Certificacao';
import { Experiencia } from '../interfaces/Experiencia';
import { Formacao } from '../interfaces/Formacao';
import { UtilsService } from '../shared/constants/utils.service';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http: HttpClient, private utilsService: UtilsService) {
  }

  // Experiência
  getExperiencia(cpf: string): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${BASE_URL}/experiencia/${cpf}`);
  }

  createExperiencia(experiencia: Experiencia, token: string | null): Observable<Experiencia> {
    if (experiencia.data_inicio)
      experiencia.data_inicio = this.utilsService.formatDate(experiencia.data_inicio);
    if (experiencia.data_fim)
      experiencia.data_fim = this.utilsService.formatDate(experiencia.data_fim);
    return this.http.post<Experiencia>(`${BASE_URL}/experiencia/${experiencia.cuidador_cpf}`, experiencia, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) });
  }

  editExperiencia(experiencia: Experiencia, token: string | null, id?: number): Observable<Experiencia> {
    if (experiencia.data_inicio)
      experiencia.data_inicio = this.utilsService.formatDate(experiencia.data_inicio);
    if (experiencia.data_fim)
      experiencia.data_fim = this.utilsService.formatDate(experiencia.data_fim);
    return this.http.put<Experiencia>(`${BASE_URL}/experiencia/${id}`, experiencia, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) });
  }

  // Formação
  getFormacao(cpf: string): Observable<Formacao> {
    return this.http.get<Formacao>(`${BASE_URL}/formacao/${cpf}`);
  }

  createFormacao(formacao: Formacao, token: string | null): Observable<Formacao> {
    if (formacao.data_inicio)
      formacao.data_inicio = this.utilsService.formatDate(formacao.data_inicio);
    if (formacao.data_formacao)
      formacao.data_formacao = this.utilsService.formatDate(formacao.data_formacao);
    return this.http.post<Formacao>(`${BASE_URL}/formacao/${formacao.cuidador_cpf}`, formacao, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) });
  }

  editFormacao(formacao: Formacao, token: string | null, id?: number): Observable<Formacao> {
    if (formacao.data_inicio)
      formacao.data_inicio = this.utilsService.formatDate(formacao.data_inicio);
    if (formacao.data_formacao)
      formacao.data_formacao = this.utilsService.formatDate(formacao.data_formacao);
    return this.http.put<Formacao>(`${BASE_URL}/formacao/${id}`, formacao, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) });
  }

  //Certificação
  getCertificacao(cpf: string): Observable<Certificacao> {
    return this.http.get<Certificacao>(`${BASE_URL}/certificacao/${cpf}`);
  }

  createCertificacao(certificacao: Certificacao, token: string | null): Observable<Certificacao> {
    return this.http.post<Certificacao>(`${BASE_URL}/certificacao/${certificacao.cuidador_cpf}`, certificacao, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) });
  }

  editCertificacao(certificacao: Certificacao, token: string | null, id?: number): Observable<Certificacao> {
    return this.http.put<Certificacao>(`${BASE_URL}/certificacao/${id}`, certificacao, { headers: new HttpHeaders().append("Authorization", `Bearer ${token}`) });
  }
}

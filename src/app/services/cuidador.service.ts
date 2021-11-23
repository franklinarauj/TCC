import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuidador } from '../interfaces/Cuidador';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class CuidadorService {
  constructor(private http: HttpClient) {}

  get(cpf: string, token: string): Observable<Cuidador> {
    return this.http.get<Cuidador>(`${BASE_URL}/cuidador/${cpf}`, {
      headers: new HttpHeaders().append('Authorization', `Bearer ${token}`),
    });
  }
}

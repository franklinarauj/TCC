import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cuidador } from '../interfaces/Cuidador';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class CuidadorService {

  constructor(private http: HttpClient) { }

  execute(cuidador: Cuidador): Observable<any> {
    return this.http.get(`${BASE_URL}/cuidador/ativos`)
  }
}

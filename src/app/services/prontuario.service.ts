import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilsService } from '../shared/constants/utils.service';

import { Alergia } from '../interfaces/Alergia';
import { Comorbidade } from '../interfaces/Comorbidade';
import { Dispositivo } from '../interfaces/Dispositivo';
import { Prescricao } from '../interfaces/Prescricao';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  constructor(private http: HttpClient) {}

}

// Infos do perfil (nome, idade, sexo, endereço)
// Alergia
// Comorbidades
// Dispositivos
// Prescrições

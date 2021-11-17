import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/Login';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private http: HttpClient) {

   }

   autenticar(login: Login): Observable<any> {
     return this.http.post(`${BASE_URL}/auth`, login);           
   }

   isLoggedIn(cnpj: string): boolean {
    return localStorage.getItem('token') && localStorage.getItem('cnpj') === cnpj ? true : false
  }

  async getRefreshToken() {
    return await localStorage.getItem('refreshToken');
  }

  getToken(refreshToken: string): Observable<any> {
    return this.http.post(`${BASE_URL}/token`, {refreshToken});
  }

  isAdmin(): boolean {
    return localStorage.getItem('cnpj') === '0';
  }
}

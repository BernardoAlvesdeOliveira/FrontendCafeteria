import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface LoginRequest {
  email: string;
  password: string;
}

interface SingupRequest {
  cpf: string;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthAccount {

  private apiUrl = 'http://100.68.183.57:8080';

  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.apiUrl}/user/login`,
      data
    );
  }
  
  signUp(data: SingupRequest): Observable<boolean> {
    return this.http.post<boolean>(
      `${this.apiUrl}/user/create`,
      data
    );
  }
}

import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'https://reqres.in'; // URL base da API

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const loginData = {
      email: username,
      password: password
    };

    return this.http.post<any>(`${this.baseUrl}/api/login`, loginData);
  }
}

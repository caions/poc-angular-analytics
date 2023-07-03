import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('eve.holt@reqres.in'), // Exemplo de e-mail de login preexistente
      password: new FormControl('cityslicka') // Exemplo de senha de login preexistente
    });
  }

  onSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authService.login(username, password).subscribe(response => {
      // Lógica de autenticação bem-sucedida
      console.log('Usuário autenticado:', response);
      console.log('Token de acesso:', response.token);
    }, error => {
      // Lógica de autenticação falhou
      console.error('Falha na autenticação:', error);
    });
  }
}

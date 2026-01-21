import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth';
import { RouterLink } from '@angular/router'; 
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './login-layout.html',
  styleUrl: './login-layout.css',
})
export class LoginLayout {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  emailValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  enviarFormulario() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return
    }

    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    if (!this.emailValido(email)) {
      console.error('Senha inválida');
      return;
    }

    // Enviar para API
    this.authService.login({
      email: email,
      password: senha
    }).subscribe({
      next: (response) => {
        console.log('Resposta da API:', response);
      },
      error: (err) => {
        console.error('Erro na requisição', err);
      }
    });

  }

}

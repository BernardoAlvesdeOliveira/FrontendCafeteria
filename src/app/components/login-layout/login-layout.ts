import { Auth } from '../../services/auth';
import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthAccount } from '../../services/auth/auth-account/auth-account';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterLink],
  templateUrl: './login-layout.html',
  styleUrl: './login-layout.css',
})
export class LoginLayout {

  errorMessage = signal<string | null>(null);
  loading = signal(false);
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authAccount: AuthAccount,
    private auth: Auth,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  emailValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  login() {

    if (!this.emailValido(this.loginForm.value.email)) {
      console.log("Erro no email")
      return;
    }

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);

    this.authAccount.login(this.loginForm.value).subscribe({
      next: response => {
        this.auth.login(response.token);
        this.router.navigate(['/profile']);
      },
      error: err => {
        this.loading.set(false);

        if (err.status === 401 || err.status === 403) {
          this.errorMessage.set(
            'Email ou senha incorretos. Verifique os dados e tente novamente.'
          );
        } else {
          this.errorMessage.set(
            'Erro ao tentar acessar sua conta. Tente novamente mais tarde.'
          );
        }
      }
    });
  }

}

import { Component, signal } from '@angular/core';
import { AuthService } from '../../services/auth/auth';

import { 
  ReactiveFormsModule, 
  AbstractControl, 
  FormBuilder, 
  FormGroup, 
  Validators,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-signup-layout',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-layout.html',
  styleUrl: './signup-layout.css',
})

export class SignUpLayout {
  
  cadastroForm: FormGroup;
  mensagemErro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.cadastroForm = this.fb.group(
      {
        cpf: ['', [Validators.required, this.cpfValido]],
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, this.senhaForte]],
        confirmarSenha: ['', Validators.required],
      },
      {
        validators: this.senhasIguais.bind(this),
      }
    );
  }

  cpfValido(control: AbstractControl) {
    const cpf = control.value?.replace(/\D/g, '');
    if (!cpf || cpf.length !== 11) return { cpfInvalido: true };
    if (/^(\d)\1+$/.test(cpf)) return { cpfInvalido: true };

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += +cpf[i] * (10 - i);
    let dig1 = (soma * 10) % 11;
    if (dig1 === 10) dig1 = 0;
    if (dig1 !== +cpf[9]) return { cpfInvalido: true };

    soma = 0;
    for (let i = 0; i < 10; i++) soma += +cpf[i] * (11 - i);
    let dig2 = (soma * 10) % 11;
    if (dig2 === 10) dig2 = 0;
    if (dig2 !== +cpf[10]) return { cpfInvalido: true };

    return null;
  }

  senhaForte(control: AbstractControl) {
    const value = control.value || '';
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    return regex.test(value) ? null : { senhaFraca: true };
  }

  emailValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  senhasIguais(control: AbstractControl): ValidationErrors | null {
    const senha = control.get('senha')?.value;
    const confirmarSenha = control.get('confirmarSenha')?.value;

    if (!senha || !confirmarSenha) {
      return null;
    }

    return senha === confirmarSenha ? null : { senhasDiferentes: true };
  }

  onSubmit() {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return
    }

    const cpf = this.cadastroForm.value.cpf;
    const name = this.cadastroForm.value.name;
    const email = this.cadastroForm.value.email;
    const senha = this.cadastroForm.value.senha;

    if (!this.emailValido(email)) {
      console.error('Senha inválida');
      return;
    }

    // Enviar para API
    this.authService.signUp({
      cpf: cpf,
      name: name,
      email: email,
      password: senha
    }).subscribe({
      next: (response) => {

        console.log('Resposta da API:', response);
        if (response !== true) {
          this.mensagemErro = 'Erro ao realizar cadastro. Verifique o que foi digitado e tente novamente.';
          return;
        }

        this.mensagemErro = null;
        console.log('Cadastro realizado com sucesso');

      },
      error: (err) => {
        console.error('Erro na requisição', err);
      }
    });

  }
}

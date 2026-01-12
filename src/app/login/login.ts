import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginId = '';
  password = '';
  errorMessage = '';

  private readonly validLoginId = 'Melvin';
  private readonly validPassword = 'Melvin123';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin() {
    if (!this.loginId || !this.password) {
      this.errorMessage = 'Login ID and Password are required';
      return;
    }

    if (
      this.loginId !== this.validLoginId ||
      this.password !== this.validPassword
    ) {
      this.errorMessage = 'Invalid Login ID or Password';
      return;
    }

    // ✅ Mark user as logged in
    this.authService.login();

    this.errorMessage = '';
    this.router.navigate(['/dashboard']);
  }
}

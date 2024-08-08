import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'Admin' && this.password === 'Admin') {
      this.router.navigate(['/main-menu']);
    } else {
      alert('Invalid credentials');
    }
  }
}

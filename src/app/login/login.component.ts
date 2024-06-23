import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../sevices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    // Llamar al método login del servicio de autenticación
    const authenticated = this.authService.login(this.username, this.password);
    
    if (authenticated) {
      // Redirigir al usuario a la ruta protegida después de iniciar sesión correctamente
      this.router.navigate(['/menu']);
    } else {
      // Mostrar mensaje de error o tomar otra acción si la autenticación falla
      alert('Usuario o contraseña incorrectos');
    }
  }
}

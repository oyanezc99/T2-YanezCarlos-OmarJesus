import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    {path:"login", component: LoginComponent},
    {path: "", redirectTo: "login", pathMatch: "full"},
    { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/menu' } 
];

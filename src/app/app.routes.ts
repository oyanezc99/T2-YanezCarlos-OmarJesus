import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './services/auth.guard';
import { PreguntaDosComponent } from './menu/pregunta-dos/pregunta-dos.component';
import { PreguntaTresComponent } from './menu/pregunta-tres/pregunta-tres.component';
import { PreguntaCuatroComponent } from './menu/pregunta-cuatro/pregunta-cuatro.component';

export const routes: Routes = [
    {path:"login", component: LoginComponent},
    {path: "", redirectTo: "login", pathMatch: "full"},
    { path: 'menu', component: MenuComponent,
         canActivate: [AuthGuard],
         children: [
            {path: "pregunta-dos", component: PreguntaDosComponent},
            {path: "pregunta-tres", component: PreguntaTresComponent},
            {path: "pregunta-cuatro", component: PreguntaCuatroComponent},
        ] },
    { path: '**', redirectTo: '/menu' } 
];

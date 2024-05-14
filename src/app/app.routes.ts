import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

import { BibliotecaComponent } from './page/biblioteca/biblioteca.component';
import { privadoGuard } from './guards/privado.guard';
import { loginGuard, registroGuard } from './guards/login.guard';
import { Registro2Component } from './component/registro2/registro2.component';
import { RegistroComponent } from './page/registro/registro.component';

export const routes: Routes = [
   
    { path: 'login', component: LoginComponent,canActivate:[privadoGuard]},
    { path: 'registro', component:RegistroComponent,canMatch:[registroGuard]},
    { path: 'biblioteca', component: BibliotecaComponent,canActivate:[loginGuard]},
    { path: 'registro', component: Registro2Component},
   
];

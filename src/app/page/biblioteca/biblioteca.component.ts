import { Component, inject } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [],
  templateUrl: './biblioteca.component.html',
  styleUrl: './biblioteca.component.css'
})
export class BibliotecaComponent {
  servicio =inject(LoginService) 
  token: any;

  logaut(){
    localStorage.removeItem('token')
    if (this.token !== '') {
      localStorage.setItem('token','false');
      //this.router.navigate(['privado']); 

      window.location.href=('login')
    }
  }

}

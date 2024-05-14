import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
    private API_Login='http://localhost:3000/login';

    ////para registrar 
    private API_register='http://localhost:3000/users';

    postUsers(usuario:any):Observable<any>{
      return this.http.post(this.API_Login,usuario)
    }

    postUsers2(usuario:any):Observable<any>{
      return this.http.post(this.API_register,usuario)
    }

}

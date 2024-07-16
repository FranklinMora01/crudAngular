import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../../../core/models/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  //identificar el usuario que queremos actualizar
  getUserById(id: number): Observable <IUser>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<IUser>(`${this.URL}/usuarios/${id}`, {headers})  // {headers: headers } => {headers}
  }

  //acutualizamos al usuario en el servidor.
  updatedUser(id: number, usuario: IUser){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(`${this.URL}/usuarios/${id}`, usuario, {headers});
  }

}

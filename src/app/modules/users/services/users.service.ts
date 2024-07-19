import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@core/models/IUser';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly ULR = environment.api;
  constructor(private http: HttpClient) { 

  }

  getAllUser$(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.ULR}/usuarios`);   
  }

  deleteUser(id: number){
    const URL = `${this.ULR}/usuarios/${id}`;
    const headers = new HttpHeaders().set('Content-Type', 'applications/json');

    return this.http.delete(URL, {headers}).pipe( map ( resp => {
      Swal.fire(
        'Borrado!',
        'El usuario a sido eliminado',
        'success'
      )
      return true;
    }));
  } 
}

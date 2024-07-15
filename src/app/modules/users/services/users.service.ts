import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@core/models/IUser';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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

}

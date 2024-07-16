import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdateService } from '@modules/update-user/services/user-update.service';
import { IUser } from '../../../../core/models/IUser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-updated',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-updated.component.html',
  styleUrl: './user-updated.component.css'
})
export class UserUpdatedComponent implements OnInit{

  //[(ngModel)]
  public userHtml: IUser = {
    nombre: "",
    mail: "",
    telefono: 0, 
    empresa: ""
  }

  constructor(
    private userUpdateService: UserUpdateService,
    private activeRoute: ActivatedRoute,
    private router: Router
    ){

    }
  ngOnInit(): void {
    this.getUserById();
  }
 
    //identificar el usuario que queremos actualizar
     getUserById(){
      this.activeRoute.paramMap.subscribe( params => {
        const id = Number(params.get('id'));
        this.userUpdateService.getUserById(id).subscribe( user => this.userHtml = user)
      })
    } 

    //acutualizamos al usuario en el servidor.

}

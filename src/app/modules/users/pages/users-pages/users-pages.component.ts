import { Component, OnInit } from '@angular/core';
import { UsersService } from '@modules/users/services/users.service';
import { IUser } from '../../../../core/models/IUser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-pages.component.html',
  styleUrl: './users-pages.component.css'
})
export class UsersPagesComponent implements OnInit{
  
  public userHtml: IUser[] = [];
  constructor(private userService: UsersService,
    private router: Router){

  }
  
  ngOnInit(): void {
    this.getUserAll();
  }

  getUserAll(){
    this.userService.getAllUser$().subscribe( users => {
      this.userHtml = users;
      //console.log(this.userHtml);
    })
  }

  updateUser(id: any){
    this.router.navigate(['/user-update', id])
  }  

  deleteUser(id: any){
    const idUser = Number(id);

    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Estas a punto de eliminar el usuario",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borra ahora!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(idUser).subscribe( resp => {
          if(resp){
            this.getUserAll();
          }
        })
        }
      });
  }


}

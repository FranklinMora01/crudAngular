import { Component, OnInit } from '@angular/core';
import { UsersService } from '@modules/users/services/users.service';
import { IUser } from '../../../../core/models/IUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-pages.component.html',
  styleUrl: './users-pages.component.css'
})
export class UsersPagesComponent implements OnInit{
  
  public userHtml: IUser[] = [];
  constructor(private userService: UsersService){

  }
  
  ngOnInit(): void {
    this.getUserAll();
  }

  getUserAll(){
    this.userService.getAllUser$().subscribe( users => {
      this.userHtml = users;
      console.log(this.userHtml);
    })
  }

  updateUser(id: any){
    console.log(id);
  }

  deleteUser(id: any){
    console.log(id);
  }


}

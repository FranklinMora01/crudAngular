import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserUpdateService } from '@modules/update-user/services/user-update.service';
import { IUser } from '../../../../core/models/IUser';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-updated',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-updated.component.html',
  styleUrl: './user-updated.component.css'
})
export class UserUpdatedComponent implements OnInit{

  @ViewChild ('formUpdateUser') formUpdateUser!: NgForm;

  /* public regexEmail = "(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1-63}\.){1,125}[A-Z]{2,63}$/i)" */
  public regexEmail = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
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
    updateUser(){
      //console.log(this.formUpdateUser); //accede a todas las propiedades del formulario
      // console.log(this.formUpdateUser.controls);  // accede a las propieades del formulario pro solo a los input
      if(!this.formUpdateUser.valid) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Completa los campos necesarios!'
        });
        return;
      }
      const id = Number(this.userHtml.id);

      this.userUpdateService.updatedUser(id, this.userHtml).subscribe(
        resp => {
          //console.log(resp);
          if(resp){
            Swal.fire(
              'Actualizado',
              'El Usuario se actualizo con exito...',
              'success'
            );
          }//fin dl if
        });
      this.router.navigateByUrl('/users');
    }

    nombreValidado(){
      return this.formUpdateUser?.controls['nombre']?.invalid && this.formUpdateUser?.controls['nombre']?.touched;
    }

    correoValidado(){
      return this.formUpdateUser?.controls['email']?.invalid && this.formUpdateUser?.controls['email']?.touched;
    }

    correoTelefono(){
      return this.formUpdateUser?.controls['telefono']?.invalid && this.formUpdateUser?.controls['telefono']?.touched;
    }

}

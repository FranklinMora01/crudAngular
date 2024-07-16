import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('@modules/users/users.module').then( m => m.UsersModule)
  },
  {
    path: 'user-update/:id', 
    loadChildren: () => import('@modules/update-user/update-user.module').then( m => m.UpdateUserModule)
  },
  {
    path: '**',
    redirectTo: '/users'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

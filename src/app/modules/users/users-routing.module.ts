import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPagesComponent } from './pages/users-pages/users-pages.component';

const routes: Routes = [
  {
    path: '',
    component: UsersPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

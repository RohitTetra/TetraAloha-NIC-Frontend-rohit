import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./component/auth/login.module').then(m => m.LoginModule) },
  { path: 'user-admin', loadChildren: () => import('./component/user-admin/user-admin.module').then(m => m.UserAdminModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
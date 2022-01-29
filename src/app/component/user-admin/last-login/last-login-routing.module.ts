import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastLoginComponent } from './last-login.component';

const routes: Routes = [{ path: '', component: LastLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LastLoginRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastLoginRoutingModule } from './last-login-routing.module';
import { LastLoginComponent } from './last-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 


@NgModule({
  declarations: [
    LastLoginComponent
  ],
  imports: [
    CommonModule,
    LastLoginRoutingModule,
    FontAwesomeModule
  ]
})
export class LastLoginModule { }

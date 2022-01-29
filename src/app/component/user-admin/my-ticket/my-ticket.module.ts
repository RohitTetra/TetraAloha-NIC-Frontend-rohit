import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTicketRoutingModule } from './my-ticket-routing.module';
import { MyTicketComponent } from './my-ticket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 


@NgModule({
  declarations: [
    MyTicketComponent
  ],
  imports: [
    CommonModule,
    MyTicketRoutingModule,
    FontAwesomeModule
  ]
})
export class MyTicketModule { }

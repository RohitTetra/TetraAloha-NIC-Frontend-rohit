import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitTicketComponent } from './submit-ticket.component';

const routes: Routes = [
  {
    path:'',component:SubmitTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmitTicketRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmitTicketRoutingModule } from './submit-ticket-routing.module';
import { SubmitTicketComponent } from './submit-ticket.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    SubmitTicketComponent
  ],
  imports: [
    CommonModule,
    SubmitTicketRoutingModule,
    CKEditorModule
  ]
})
export class SubmitTicketModule { }
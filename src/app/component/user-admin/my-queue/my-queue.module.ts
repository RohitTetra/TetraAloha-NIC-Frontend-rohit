import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyQueueRoutingModule } from './my-queue-routing.module';
import { MyQueueComponent } from './my-queue.component';


@NgModule({
  declarations: [
    MyQueueComponent
  ],
  imports: [
    CommonModule,
    MyQueueRoutingModule
  ]
})
export class MyQueueModule { }

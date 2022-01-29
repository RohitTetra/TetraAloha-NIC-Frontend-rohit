import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyQueueComponent } from './my-queue.component';

const routes: Routes = [{ path: '', component: MyQueueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyQueueRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAdminComponent } from './user-admin.component';

const routes: Routes = [
  {
    path:'user-admin',component:UserAdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'submit-ticket', loadChildren: () => import('../user-admin/submit-ticket/submit-ticket.module').then(m => m.SubmitTicketModule) },
      { path: 'my-queue', loadChildren: () => import('../user-admin/my-queue/my-queue.module').then(m => m.MyQueueModule) },
      { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
      { path: 'my-ticket', loadChildren: () => import('./my-ticket/my-ticket.module').then(m => m.MyTicketModule) },
      { path: 'last-login', loadChildren: () => import('./last-login/last-login.module').then(m => m.LastLoginModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdminRoutingModule { }

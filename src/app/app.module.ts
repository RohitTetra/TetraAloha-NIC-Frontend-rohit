import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './component/auth/login.module';
import { SharedModule } from './component/user-admin/shared/shared.module';
import { UserAdminRoutingModule } from './component/user-admin/user-admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    UserAdminRoutingModule,
    SharedModule,                        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

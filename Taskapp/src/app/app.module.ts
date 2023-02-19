import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import {RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const allLinks:Routes = [
  {path:'admin',component: AdminComponent},
  {path:'normal',component:NormalUserComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NormalUserComponent
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(allLinks),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

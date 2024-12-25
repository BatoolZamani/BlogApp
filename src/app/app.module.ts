import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { CategoryNavbarComponent } from './Layouts/category-navbar/category-navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [
  
  ],
imports:[
  BrowserModule,
  RouterModule.forRoot(routes)
],
exports:[RouterModule],
  providers:[],
  bootstrap:[]
})

export class AppModule { }

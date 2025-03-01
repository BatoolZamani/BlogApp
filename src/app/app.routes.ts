import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
   {path:'', component:HomeComponent},
   {path: 'category', component:SingleCategoryComponent},
   {path:'post',component:SinglePostComponent},
   
   {path:'about',component:AboutUsComponent},
   {path:'term-conditions',component:TermsAndConditionComponent},
   {path:'contact',component:ContactUsComponent}

];

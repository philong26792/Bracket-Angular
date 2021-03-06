import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule
  ]
})
export class PagesModule { }

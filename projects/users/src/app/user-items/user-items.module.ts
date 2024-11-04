import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserItemsRoutingModule } from './user-items-routing.module';
import { UserItemsComponent } from './user-items.component';


@NgModule({
  declarations: [
    UserItemsComponent
  ],
  imports: [
    CommonModule,
    UserItemsRoutingModule
  ]
})
export class UserItemsModule { }

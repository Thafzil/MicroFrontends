import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserItemsComponent } from './user-items.component';

const routes: Routes = [{ path: '', component: UserItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserItemsRoutingModule { }
